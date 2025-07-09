import '@/styles/ProtectedRoute.scss';
import { ArrowRight } from 'react-feather';
import React, { useEffect, useState } from 'react';
import VideoBackground from '@/components/VideoBackground';

const ONE_HOUR = 60 * 60 * 1000;

const ProtectedRoute = ({ children, location }) => {
  const [password, setPassword] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState(false);

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

  const onSubmit = (event) => {
    event.preventDefault();
    if (password === 'sasayaku') {
      setPasswordCorrect(true);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          'loggedIn',
          JSON.stringify({ value: true, expires: Date.now() + ONE_HOUR })
        );
      }
    } else {
      document.getElementById('button').classList.add('animate__shakeX');
      setTimeout(function () {
        document.getElementById('button').classList.remove('animate__shakeX');
      }, 1000);
      setPasswordCorrect(false);
    }
  };

  return (
    <>
      {passwordCorrect ? (
        <>{children}</>
      ) : (
        <VideoBackground>
          <div className="flex flex-row items-center justify-center h-screen bg-cover bg-center bg-no-repeat animate-fadeIn">
            <form
              onSubmit={onSubmit}
              className="flex flex-row gap-4 items-center w-80"
            >
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-primary text-white border-none placeholder-gray-500"
                id="input"
              />
              <button
                type="submit"
                className="animate__animated w-16 flex items-center justify-center h-12 cursor-pointer bg-white hover:bg-gray-100 rounded-xl transition-colors duration-300 shadow-md"
                id="button"
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
      )}
    </>
  );
};

export default ProtectedRoute;
