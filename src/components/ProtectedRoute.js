import '@/styles/ProtectedRoute.scss';

import { ArrowRight } from 'react-feather';
import React, { useEffect, useState } from 'react';
import VideoBackground from '@/components/VideoBackground';

const ProtectedRoute = ({ children, location }) => {
  const [password, setPassword] = useState('');
  const [passwordShould, setPasswordShould] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    }
  }, [passwordCorrect]);
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      setPasswordCorrect(true);
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
      {passwordCorrect ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('loggedIn') === 'true') ? (
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
