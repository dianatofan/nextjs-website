import { useEffect, useRef } from 'react';

export default function AlternatingVideos({
  video1,
  video2,
  caption1,
  caption2,
}) {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const first = firstRef.current;
    const second = secondRef.current;

    if (!first || !second) return;

    const playFirst = () => {
      second.pause();
      second.currentTime = 0;

      timeoutRef.current = setTimeout(() => {
        first.currentTime = 0;
        first.play();
      }, 300); // small buffer to avoid race conditions
    };

    const playSecond = () => {
      first.pause();
      first.currentTime = 0;

      timeoutRef.current = setTimeout(() => {
        second.currentTime = 0;
        second.play();
      }, 300);
    };

    // Start with first video
    playFirst();

    first.addEventListener('ended', playSecond);
    second.addEventListener('ended', playFirst);

    return () => {
      first.removeEventListener('ended', playSecond);
      second.removeEventListener('ended', playFirst);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mb-8">
      {/* Video 1 */}
      <figure className="flex flex-col">
        <video
          ref={firstRef}
          src={video1}
          className="w-full h-auto border border-gray-300 rounded-2xl"
          muted
          playsInline
          preload="auto"
        />
        <figcaption className="mt-3 text-xs md:text-sm text-gray-500">
          {caption1}
        </figcaption>
      </figure>

      {/* Video 2 */}
      <figure className="flex flex-col">
        <video
          ref={secondRef}
          src={video2}
          className="w-full h-auto border border-gray-300 rounded-2xl"
          muted
          playsInline
          preload="auto"
        />
        <figcaption className="mt-3 text-xs md:text-sm text-gray-500">
          {caption2}
        </figcaption>
      </figure>
    </div>
  );
}
