import '@/styles/ProtectedRoute.scss';
import { ArrowRight } from 'react-feather';
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'; // Lazy-load the heavy VideoBackground component so it won't be part of the initial bundle

// Lazy-load the heavy VideoBackground component so it won't be part of the initial bundle
const VideoBackground = lazy(() => import('@/components/VideoBackground'));

const ONE_HOUR = 60 * 60 * 1000;

const isSlowConnection = () => {
  try {
    const nav = navigator;
    // Respect Save-Data & avoid loading video on very slow connections
    if (nav?.connection) {
      if (nav.connection.saveData) return true;
      const eff = nav.connection.effectiveType || '';
      // treat 2g and slow-2g as slow
      if (eff.includes('2g')) return true;
    }
  } catch {
    // ignore
  }
  return false;
};

const ProtectedRoute = ({ children, location }) => {
  const [password, setPassword] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  // Controls whether the video component should be mounted / loaded
  const [enableVideo, setEnableVideo] = useState(false);

  // local refs for button/input to avoid getElementById
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  // simple state-driven shake flag to animate submit button
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = window.localStorage.getItem('loggedIn');
      if (loggedIn) {
        try {
          const { value, expires } = JSON.parse(loggedIn);
          if (value && Date.now() < expires) {
            setPasswordCorrect(true);
          } else {
            window.localStorage.removeItem('loggedIn');
          }
        } catch {
          window.localStorage.removeItem('loggedIn');
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If user/device prefers reduced data or on slow connection, don't load video
    if (isSlowConnection()) {
      setEnableVideo(false);
      return;
    }

    // Defer mounting the video until:
    // - the browser is idle (requestIdleCallback) OR after a short timeout (250ms)
    // - and the component is visible in the viewport (IntersectionObserver)
    let idleId = null;
    let t = null;
    let observer = null;

    const tryEnable = () => {
      // mount the video but slightly delayed so first paint isn't blocked
      setEnableVideo(true);
    };

    const onIdle = () => {
      // Use IntersectionObserver to avoid loading video if user never scrolls to it
      if ('IntersectionObserver' in window && containerRef.current) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // load video when visible
                tryEnable();
                if (observer) {
                  observer.disconnect();
                  observer = null;
                }
              }
            });
          },
          { root: null, threshold: 0.01 }
        );
        observer.observe(containerRef.current);
      } else {
        // fallback: just enable after a short timeout
        t = setTimeout(tryEnable, 300);
      }
    };

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(onIdle, { timeout: 500 });
    } else {
      // fallback
      t = setTimeout(onIdle, 250);
    }

    return () => {
      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (t) clearTimeout(t);
      if (observer) observer.disconnect();
    };
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    if (password === 'pixies') {
      setPasswordCorrect(true);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          'loggedIn',
          JSON.stringify({ value: true, expires: Date.now() + ONE_HOUR })
        );
      }
    } else {
      // Use state-driven shake and ref focus instead of getElementById
      setShake(true);
      setTimeout(() => setShake(false), 900);
      setPasswordCorrect(false);
      if (buttonRef.current) buttonRef.current.focus();
    }
  };

  return (
    <>
      {passwordCorrect ? (
        <>{children}</>
      ) : (
        // containerRef used to detect visibility for lazy video loading
        <div ref={containerRef}>
          <Suspense
            fallback={
              // fallback while VideoBackground is being loaded (lightweight static background)
              <div className="flex flex-row items-center justify-center h-screen bg-[#0b0b0d]">
                <div className="flex items-center justify-center w-full">
                  <div className="w-full max-w-md px-4">
                    <form
                      onSubmit={onSubmit}
                      className="flex flex-row gap-4 items-center w-80 mx-auto"
                    >
                      <input
                        name="password"
                        id="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full h-12 px-4 rounded-lg bg-gray-50 text-white border-none placeholder-gray-500"
                      />
                      <button
                        type="submit"
                        ref={buttonRef}
                        id="button"
                        className={`w-16 flex items-center justify-center h-12 cursor-pointer bg-white hover:bg-gray-100 rounded-xl transition-colors duration-300 shadow-md ${
                          shake ? 'animate-shakeX' : ''
                        }`}
                        aria-label="Submit password"
                      >
                        <ArrowRight
                          width={20}
                          height={20}
                          color="#000"
                          strokeWidth={2}
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            }
          >
            {/* Only mount VideoBackground when enableVideo is true; otherwise fallback UI above */}
            {enableVideo ? (
              <VideoBackground>
                <div className="flex flex-row items-center justify-center h-screen bg-cover bg-center bg-no-repeat animate-fadeIn">
                  <form
                    onSubmit={onSubmit}
                    className="flex flex-row gap-4 items-center w-80"
                  >
                    <input
                      name="password"
                      id="input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full h-12 px-4 rounded-lg bg-primary text-white border-none placeholder-gray-500"
                    />
                    <button
                      type="submit"
                      ref={buttonRef}
                      id="button"
                      className={`w-16 flex items-center justify-center h-12 cursor-pointer bg-white hover:bg-gray-100 rounded-xl transition-colors duration-300 shadow-md ${
                        shake ? 'animate-shakeX' : ''
                      }`}
                      aria-label="Submit password"
                    >
                      <ArrowRight
                        width={20}
                        height={20}
                        color="#000"
                        strokeWidth={2}
                      />
                    </button>
                  </form>
                </div>
              </VideoBackground>
            ) : (
              // If video is disabled (slow connection / save-data) show the static / gradient background but keep exact layout
              <div className="flex flex-row items-center justify-center h-screen bg-cover bg-center bg-no-repeat animate-fadeIn bg-[#0b0b0d]">
                <form
                  onSubmit={onSubmit}
                  className="flex flex-row gap-4 items-center w-80"
                >
                  <input
                    name="password"
                    id="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full h-12 px-4 rounded-lg bg-primary text-white border-none placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    ref={buttonRef}
                    id="button"
                    className={`w-16 flex items-center justify-center h-12 cursor-pointer bg-white hover:bg-gray-100 rounded-xl transition-colors duration-300 shadow-md ${
                      shake ? 'animate-shakeX' : ''
                    }`}
                    aria-label="Submit password"
                  >
                    <ArrowRight
                      width={20}
                      height={20}
                      color="#000"
                      strokeWidth={2}
                    />
                  </button>
                </form>
              </div>
            )}
          </Suspense>
        </div>
      )}
      {/* Inline, tiny shake animation to avoid dependency on animate.css and keep performance.
          You already import ProtectedRoute.scss — you can move this to that file if preferred. */}
      <style>{`
        @keyframes shakeX {
          0% { transform: translate3d(0, 0, 0); }
          10% { transform: translate3d(-6px, 0, 0); }
          20% { transform: translate3d(6px, 0, 0); }
          30% { transform: translate3d(-6px, 0, 0); }
          40% { transform: translate3d(6px, 0, 0); }
          50% { transform: translate3d(-4px, 0, 0); }
          60% { transform: translate3d(4px, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-shakeX {
          animation: shakeX 0.9s ease;
        }
      `}</style>
    </>
  );
};

export default ProtectedRoute;
