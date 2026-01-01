import '@/styles/ProtectedRoute.scss';
import { ArrowRight } from 'react-feather';
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';

const VideoBackground = lazy(() => import('@/components/VideoBackground'));

const ONE_HOUR = 60 * 60 * 1000;

const isSlowConnection = () => {
  try {
    const nav = navigator;
    if (nav?.connection) {
      if (nav.connection.saveData) return true;
      const eff = nav.connection.effectiveType || '';
      if (eff.includes('2g')) return true;
    }
  } catch {}
  return false;
};

const INPUT_CLASSES =
  'w-full h-12 px-4 rounded-xl bg-white/10 text-white ' +
  'border border-white/10 placeholder-gray-400 ' +
  'focus:outline-none focus:ring-2 focus:ring-white/20';

const ProtectedRoute = ({ children }) => {
  const [password, setPassword] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [enableVideo, setEnableVideo] = useState(false);
  const [shake, setShake] = useState(false);

  // extra: if video errors, fall back to dark background forever
  const [videoFailed, setVideoFailed] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const loggedIn = window.localStorage.getItem('loggedIn');
    if (!loggedIn) return;

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
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isSlowConnection()) {
      setEnableVideo(false);
      return;
    }

    let idleId = null;
    let timeoutId = null;
    let observer = null;

    const enable = () => setEnableVideo(true);

    const onIdle = () => {
      if ('IntersectionObserver' in window && containerRef.current) {
        observer = new IntersectionObserver(
          (entries) => {
            if (entries[0]?.isIntersecting) {
              enable();
              observer.disconnect();
            }
          },
          { threshold: 0.01 }
        );
        observer.observe(containerRef.current);
      } else {
        timeoutId = setTimeout(enable, 300);
      }
    };

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(onIdle, { timeout: 500 });
    } else {
      timeoutId = setTimeout(onIdle, 250);
    }

    return () => {
      if (idleId && 'cancelIdleCallback' in window)
        window.cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === 'pixies') {
      setPasswordCorrect(true);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          'loggedIn',
          JSON.stringify({ value: true, expires: Date.now() + ONE_HOUR })
        );
      }
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 900);
    }
  };

  if (passwordCorrect) return <>{children}</>;

  const Form = (
    <form onSubmit={onSubmit} className="flex gap-4 items-center w-80">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={INPUT_CLASSES}
      />

      <button
        type="submit"
        className={`w-16 h-12 flex items-center justify-center rounded-xl bg-white hover:bg-gray-100 transition shadow-md ${
          shake ? 'animate__animated animate__shakeX' : ''
        }`}
        aria-label="Submit password"
      >
        <ArrowRight width={20} height={20} color="#000" />
      </button>
    </form>
  );

  return (
    <>
      {/* Base layer: ALWAYS dark. If video loads, it sits above this. */}
      <div
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-[#0b0b0d]"
      >
        {/* Optional subtle gradient/noise feel */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(80% 60% at 50% 40%, rgba(255,255,255,0.06), transparent 60%)',
          }}
        />

        <Suspense
          fallback={
            <div className="relative z-10 flex items-center justify-center h-screen">
              {Form}
            </div>
          }
        >
          {enableVideo && !videoFailed ? (
            <VideoBackground onError={() => setVideoFailed(true)}>
              {/* Overlay to ensure text stays legible over video */}
              <div className="absolute inset-0 bg-black/35" />

              <div className="relative z-10 flex items-center justify-center h-screen animate-fadeIn">
                {Form}
              </div>
            </VideoBackground>
          ) : (
            <div className="relative z-10 flex items-center justify-center h-screen animate-fadeIn">
              {Form}
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default ProtectedRoute;
