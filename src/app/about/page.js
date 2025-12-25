'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import mePhoto from '@/images/about/me.jpg'; // move `public/images/about/me.jpg` -> `src/images/about/me.jpg` for blur support
import { useSpring } from '@react-spring/core';

import Layout from '@/components/Layout';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import LinkItem from '@/components/about/LinkItem';
import 'animate.css';
import { metropolis } from '@/app/utils/local-font';
import CrosswordFact from '@/components/about/CrosswordFact';

export default function Page() {
  const [{ background, fill }, set] = useSpring(
    {
      background: '#f0f0f0',
      fill: '#202020',
    },
    [],
  );

  const facts = [
    {
      imageSrc: '/images/about/minime.png',
      alt: 'Fact 1',
      text: 'Curious about computers since day one',
    },
    {
      imageSrc: '/images/about/run.jpg',
      alt: 'Fact 2',
      text: 'Running is my therapy',
    },
    {
      alt: 'Fact 3',
      text: 'I love crosswords (Copenhagen crossword ⬆️, enjoy!)',
      media: <CrosswordFact />,
      showBorder: true,
    },
    {
      imageSrc: '/images/about/ride.jpg',
      alt: 'Fact 4',
      text: '3 bikes and counting',
    },
    {
      imageSrc: '/images/about/museum.png',
      alt: 'Fact 5',
      text: 'Immersive art? Yes please',
    },
    {
      imageSrc: '/images/about/datavis.png',
      alt: 'Fact 6',
      text: 'Data visualization nerd',
    },
  ];
  const [loaded, setLoaded] = useState(false);

  return (
    <Layout fill={fill} isProjectPage={false}>
      <div
        className="container w-screen p-4 my-[14rem] mb-[6rem] max-w-screen-xl flex items-start  flex-col lg:flex-row gap-12 animate__animated animate__fadeIn">
        <div className="w-full lg:w-[45%]">
          <div
            aria-hidden="true"
            style={{
              transition: 'opacity .36s ease, transform .36s ease',
              opacity: loaded ? 1 : 0.01,
              transform: loaded ? 'none' : 'scale(1.02)',
              borderRadius: 16,
            }}
          >
            <Image
              src={mePhoto}
              alt="Picture with me"
              width={420}
              height={580}
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 420px"
              onLoad={() => setLoaded(true)}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 16,
              }}
            />
          </div>
        </div>

        <div className="w-full lg:w-[55%] leading-8 flex flex-col gap-6">
          <h1
            className={`${metropolis.className} text-xl antialiased tracking-tighter lg:leading-headers md:text-4xl text-primary font-semibold`}
          >
            Hi, I'm Diana, a multi-disciplinary{' '}
            <span className={`${metropolis.className} text-tertiary`}>
              product designer
            </span>{' '}
            and{' '}
            <span className={`${metropolis.className} text-tertiary`}>
              frontend engineer
            </span>{' '}
            passionate about solving problems. In my work, I balance{' '}
            <span className={`${metropolis.className} text-tertiary`}>
              user needs
            </span>{' '}
            with technical feasibility and{' '}
            <span className={`${metropolis.className} text-tertiary`}>
              business goals
            </span>{' '}
            to fuel growth. Having a deep understanding of both sides of the
            product lifecycle, I can communicate clearly with all types of
            stakeholders, regardless of their background, to ensure great
            output.
          </h1>
          {/*<p className="text-gray-400 text-lg">/dee · uh · nah/</p>*/}
          {/*<p className="text-3xl font-semibold">*/}
          {/*  I'm a multi-disciplinary frontend engineer and product designer*/}
          {/*  passionate about solving problems.*/}
          {/*</p>*/}
          <div className="mt-2 text-lg flex flex-col gap-6">
            <h4 className={`${metropolis.className} font-semibold`}>
              Where I've worked
            </h4>
            <ul className="border border-dashed border-gray-200 rounded-xl">
              <LinkItem
                title="Tactile Games"
                description="Product Designer"
                link="https://tactilegames.com/"
                image="./images/logos/tactileLogo.jpeg"
              />
              <LinkItem
                title="Google"
                description="UX Engineer"
                link="https://google.com/"
                image="./images/logos/googleLogo.png"
              />
              <LinkItem
                title="Famly"
                description="UX/UI Designer"
                link="https://famly.co/"
                image="./images/logos/famly.png"
              />
              <LinkItem
                title="Maersk"
                description="Frontend Engineer"
                link="https://maersk.com/"
                image="./images/logos/maersk.png"
              />
            </ul>
          </div>
        </div>
      </div>
      <section className="animate__animated animate__fadeIn animate__delay-1s container p-4 w-screen max-w-screen-xl ">
        <h2 className={`${metropolis.className} text-2xl font-semibold mb-8`}>
          Where I shine
        </h2>
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="./images/icons/squiggle.png"
              alt="Profile"
              className="w-12 h-12 mb-4"
            />
            <h2
              className={`${metropolis.className} text-xl font-semibold mb-2`}
            >
              End-to-end expertise
            </h2>
            <p className={`${metropolis.className} text-base text-gray-600`}>
              I move from problem definition to prototypes and delivery without
              losing context.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="./images/icons/rocket.png"
              alt="Profile"
              className="w-12 h-12  mb-4"
            />
            <h2
              className={`${metropolis.className} text-xl font-semibold mb-2`}
            >
              Rapid prototyping
            </h2>
            <p className={`${metropolis.className} text-base text-gray-600`}>
              I iterate fast, using real feedback to refine concepts quickly.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="./images/icons/users.png"
              alt="Profile"
              className="w-12 h-12  mb-4"
            />
            <h2
              className={`${metropolis.className} text-xl font-semibold mb-2`}
            >
              Cross-functional collaboration
            </h2>
            <p className={`${metropolis.className} text-base text-gray-600`}>
              I align designers, engineers, and stakeholders through clear
              communication.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="./images/icons/smile.png"
              alt="Profile"
              className="w-12 h-12  mb-4"
            />
            <h2
              className={`${metropolis.className} text-xl font-semibold mb-2`}
            >
              Human-centered design
            </h2>
            <p className={`${metropolis.className} text-base text-gray-600`}>
              I design for real people while staying grounded in technical and
              business constraints.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="./images/icons/keyboard.png"
              alt="Profile"
              className="w-12 h-12 mb-4"
            />
            <h2
              className={`${metropolis.className} text-xl font-semibold mb-2`}
            >
              Technical proficiency
            </h2>
            <p className={`${metropolis.className} text-base text-gray-600`}>
              I build interactive prototypes that behave like real products.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="./images/icons/bars.png"
              alt="Profile"
              className="w-12 h-12  mb-4"
            />
            <h2
              className={`${metropolis.className} text-xl font-semibold mb-2`}
            >
              Data visualization
            </h2>
            <p className={`${metropolis.className} text-base text-gray-600`}>
              I turn complex data into visuals that support better decisions.
            </p>
          </div>
        </div>
      </section>
      {/*<section className="animate__animated animate__fadeIn animate__delay-1s container p-4 mb-8 w-screen max-w-screen-xl ">*/}
      {/*  <h2 className={`${metropolis.className} text-2xl font-semibold mb-8`}>*/}
      {/*    Words I live by*/}
      {/*  </h2>*/}
      {/*  <svg*/}
      {/*    className="w-8 h-8 mx-auto mb-3 text-gray-400 dark:text-gray-600"*/}
      {/*    aria-hidden="true"*/}
      {/*    xmlns="http://www.w3.org/2000/svg"*/}
      {/*    fill="currentColor"*/}
      {/*    viewBox="0 0 18 14"*/}
      {/*  >*/}
      {/*    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />*/}
      {/*  </svg>*/}
      {/*  <div className="flex flex-col gap-4 w-full">*/}
      {/*    <Quote quote="A prototype is worth 1000 meetings" />*/}
      {/*    <Quote quote="The best UX is the least UX" />*/}
      {/*    <Quote quote="Consistency for the sake of clarity" />*/}
      {/*    <Quote quote="A problem well stated is a problem half solved" />*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section className="w-full flex justify-center px-8 py-16 bg-white">
        <div className="w-full max-w-screen-xl">
          <h2 className={`${metropolis.className} text-2xl font-semibold mb-8`}>
            6 facts about me
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {facts.map((fact, i) => (
              <article key={i} className="bg-white">
                <div
                  className={`relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 ${
                    fact?.showBorder ? 'border border-gray-200' : 'border-0'
                  }`}
                >
                  {fact.media ? (
                    <div className="absolute inset-0">{fact.media}</div>
                  ) : (
                    <Image
                      src={fact.imageSrc}
                      alt={fact.alt ?? ''}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={i < 2}
                    />
                  )}
                </div>

                <div className="pt-4">
                  <p
                    className={`${metropolis.className} text-base text-gray-600`}
                  >
                    {fact.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/*<section className="animate__animated animate__fadeIn animate__delay-1s container p-4 mb-8 w-screen max-w-screen-xl ">*/}
      {/*  <h2 className={`${metropolis.className} text-2xl font-semibold mb-8`}>*/}
      {/*    My life in numbers*/}
      {/*  </h2>*/}
      {/*  <div className="flex flex-row flex-wrap gap-8 w-full">*/}
      {/*    <div className="flex flex-col items-center gap-2">*/}
      {/*      <CountUp className="text-5xl" from={0} to={31} />*/}
      {/*      <span>laps around the sun</span>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-col items-center gap-2">*/}
      {/*      <CountUp className="text-5xl" from={0} to={8} />*/}
      {/*      <span>Danish winters survived</span>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-col items-center gap-2">*/}
      {/*      <CountUp className="text-5xl" from={0} to={6} />*/}
      {/*      <span>years of consistent Strava activity</span>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-col items-center gap-2">*/}
      {/*      <CountUp className="text-5xl" from={0} to={92} />%*/}
      {/*      <span>*/}
      {/*        of my Figma files: “final_v3_FINAL_reallyfinal(FINAL).fig”*/}
      {/*      </span>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/*<Carousel />*/}
    </Layout>
  );
}
