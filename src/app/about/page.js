'use client';

import React from 'react';
import { useSpring } from '@react-spring/core';
import { CldImage } from 'next-cloudinary';

import Layout from '@/components/Layout';
import '@/styles/about.scss';
import '@/styles/styles.scss';
import LinkItem from '@/components/about/LinkItem';
import 'animate.css';
import { metropolis } from '@/app/utils/local-font';
import CrosswordFact from '@/components/about/CrosswordFact';

/**
 * IMPORTANT:
 * These `src` values must match Cloudinary PUBLIC IDs.
 * From your example URL:
 *   .../upload/.../minime.jpg
 * means public_id is:
 *   "minime"
 * (no extension, no folders)
 */

export default function Page() {
  const [{ background, fill }, set] = useSpring(
    {
      background: '#f0f0f0',
      fill: '#202020',
    },
    []
  );

  const facts = [
    {
      imageSrc: 'minime', // was /images/about/minime.png
      alt: 'Fact 1',
      text: 'Curious about computers since day one',
    },
    {
      imageSrc: 'run', // was /images/about/run.jpg
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
      imageSrc: 'ride', // was /images/about/ride.jpg
      alt: 'Fact 4',
      text: '3 bikes and counting',
    },
    {
      imageSrc: 'museum', // was /images/about/museum.png
      alt: 'Fact 5',
      text: 'Immersive art? Yes please',
    },
    {
      imageSrc: 'datavis', // was /images/about/datavis.png
      alt: 'Fact 6',
      text: 'Data visualization nerd',
    },
  ];

  return (
    <Layout fill={fill} isProjectPage={false}>
      <div className="container w-screen p-4 my-[14rem] mb-[6rem] max-w-screen-xl flex items-start flex-col lg:flex-row gap-12 animate__animated animate__fadeIn">
        <div className="w-full lg:w-[45%]">
          <CldImage
            src="img" // your about-me image public_id
            alt="Picture with me"
            width={420}
            height={580}
            priority
            fetchPriority="high"
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 420px"
            className="w-full h-auto rounded-2xl object-cover"
          />
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

          <div className="mt-2 text-lg flex flex-col gap-6">
            <h4 className={`${metropolis.className} font-semibold`}>
              Where I've worked
            </h4>

            <ul className="border border-dashed border-gray-200 rounded-xl">
              {/* NOTE: LinkItem must render this using CldImage (public_id), not next/image or <img src="./images/..."> */}
              <LinkItem
                title="Tactile Games"
                description="Product Designer"
                link="https://tactilegames.com/"
                image="tactileLogo" // upload + set public_id to this
              />
              <LinkItem
                title="Google"
                description="UX Engineer"
                link="https://google.com/"
                image="googleLogo"
              />
              <LinkItem
                title="Famly"
                description="UX/UI Designer"
                link="https://famly.co/"
                image="Famly"
              />
              <LinkItem
                title="Maersk"
                description="Frontend Engineer"
                link="https://maersk.com/"
                image="maersk"
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
            <CldImage
              src="squiggle"
              alt="End-to-end expertise"
              width={48}
              height={48}
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
            <CldImage
              src="rocket"
              alt="Rapid prototyping"
              width={48}
              height={48}
              className="w-12 h-12 mb-4"
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
            <CldImage
              src="users"
              alt="Cross-functional collaboration"
              width={48}
              height={48}
              className="w-12 h-12 mb-4"
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
            <CldImage
              src="smile"
              alt="Human-centered design"
              width={48}
              height={48}
              className="w-12 h-12 mb-4"
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
            <CldImage
              src="keyboard"
              alt="Technical proficiency"
              width={48}
              height={48}
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
            <CldImage
              src="bars"
              alt="Data visualization"
              width={48}
              height={48}
              className="w-12 h-12 mb-4"
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
                    <CldImage
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
    </Layout>
  );
}
