import 'hint.css';
import React, { useState } from 'react';
import { Copy } from 'react-feather';
import Image from 'next/image';
import '@/styles/footer.scss';
import { metropolis } from '@/app/utils/local-font';

const WIDTH = 32;
const HEIGHT = 32;

function IconItem({ href, src, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      className="hint--bottom"
      aria-label={alt}
      rel="noreferrer"
    >
      <Image src={src} width={WIDTH} height={HEIGHT} alt={alt} />
    </a>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('dianatofan.dt@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer id="footer" className="text-white bg-black p-10 w-screen">
      <div className="flex flex-col items-center">
        <div className="lg:text-2xl text-xl font-semibold m-8">
          Let's get in touch
        </div>
        <div className="flex items-center gap-2 relative m-1">
          <Image
            src="./images/send.png"
            alt=""
            className="send-icon"
            width={WIDTH / 2}
            height={HEIGHT / 2}
          />
          <span
            className={`${metropolis.className} text-base hover:underline cursor-pointer`}
            id="copyEmail"
            onClick={handleCopy}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            dianatofan.dt@gmail.com
          </span>
          {hovered && !copied && (
            <Copy
              size={16}
              className={`${metropolis.className} absolute -right-24 text-sm text-white opacity-50`}
            >
              Copy
            </Copy>
          )}
          {copied && (
            <span
              className={`${metropolis.className} text-sm text-white absolute -right-60 opacity-50 animate-disappear`}
            >
              Copied!
            </span>
          )}
        </div>
        <ul className="flex items-center gap-8 m-4">
          <li>
            <IconItem
              href="https://www.linkedin.com/in/diana-tofan-43730013b/"
              src="./images/logos/linkedin.png"
              alt="Linkedin"
            />
          </li>
          <li>
            <IconItem
              href="https://dribbble.com/dianatofan/"
              src="./images/logos/dribbble.png"
              alt="Dribbble"
            />
          </li>
          <li>
            <IconItem
              href="https://github.com/dianatofan/"
              src="./images/logos/github.png"
              alt="Github"
            />
          </li>
        </ul>{' '}
        <div className="line" />
        <div className="text-sm flex dianatofan.dt@gmail.com flex-col items-center opacity-50 leading-loose text-center">
          <span className={metropolis.className}>
            &copy; {`${new Date().getFullYear()}`} Diana Tofan
          </span>
          <span className={metropolis.className}>
            Built with Next.js, Tailwind and a sprinkle of 3D magic
          </span>
        </div>
      </div>
    </footer>
  );
}
