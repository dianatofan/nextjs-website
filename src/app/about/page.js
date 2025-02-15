'use client';

import React from 'react';
import Image from 'next/image';
import { useSpring } from '@react-spring/core';

import Layout from '@/components/Layout';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import LinkItem from '@/components/about/LinkItem';
import Quote from '@/components/about/Quote';

export default function Page() {
  const [{ background, fill }, set] = useSpring(
    {
      background: '#f0f0f0',
      fill: '#202020',
    },
    []
  );

  return (
    <Layout>
      <div className="container w-screen p-4 my-[14rem] mb-[6rem] max-w-screen-xl flex items-start  flex-col lg:flex-row gap-12 animate__animated animate__fadeIn">
        <div className="w-full lg:w-[45%]">
          <Image
            src="/images/about/me2.png"
            alt="Picture with me"
            className="animate__animated animate__fadeIn"
            layout="responsive"
            width={420}
            height={580}
            style={{ borderRadius: '16px' }}
          />
        </div>

        <div className="w-full lg:w-[55%] leading-8 flex flex-col gap-6">
          <h1 className="text-xl antialiased tracking-tighter lg:leading-headers md:text-4xl text-primary font-semibold">
            Hi, I'm Diana, a multi-disciplinary{' '}
            <span className="text-tertiary">product designer</span> and{' '}
            <span className="text-tertiary">frontend engineer</span> passionate
            about solving problems. In my work, I balance{' '}
            <span className="text-tertiary">user needs</span> with technical
            feasability and{' '}
            <span className="text-tertiary">business goals</span> to fuel
            growth. Having a deep understanding of both sides of the product
            lifecycle, I can communicate clearly with all types of stakeholders,
            regardless of their background, to ensure great output.
          </h1>
          {/*<p className="text-gray-400 text-lg">/dee · uh · nah/</p>*/}
          {/*<p className="text-3xl font-semibold">*/}
          {/*  I'm a multi-disciplinary frontend engineer and product designer*/}
          {/*  passionate about solving problems.*/}
          {/*</p>*/}
          <div className="mt-2 text-lg flex flex-col gap-6">
            <h4 className="font-semibold">Where I've worked</h4>
            <ul className="border border-dashed border-gray-200 rounded-xl">
              <LinkItem
                title="Tactile Games"
                description="Product Designer"
                link="https://tactilegames.com/"
                image="/images/logos/tactileLogo.jpeg"
              />
              <LinkItem
                title="Google"
                description="UX Engineer"
                link="https://google.com/"
                image="/images/logos/googleLogo.png"
              />
              <LinkItem
                title="Famly"
                description="UX/UI Designer"
                link="https://famly.co/"
                image="/images/logos/famly.png"
              />
              <LinkItem
                title="Maersk"
                description="Frontend Engineer"
                link="https://maersk.com/"
                image="/images/logos/maersk.png"
              />
            </ul>
            {/*<p>*/}
            {/*  Send me a message if you would like to connect! 😄*/}
            {/*  <br />*/}
            {/*  <a*/}
            {/*    href="mailto:dianatofan.dt@gmail.com?Subject=Hello"*/}
            {/*    target="_top"*/}
            {/*    className="text-tertiary"*/}
            {/*  >*/}
            {/*    E-mail*/}
            {/*  </a>*/}
            {/*  {' / '}*/}
            {/*  <a*/}
            {/*    href="https://linkedin.com/in/diana-tofan"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*    className="text-tertiary"*/}
            {/*  >*/}
            {/*    Linkedin*/}
            {/*  </a>*/}
            {/*</p>*/}
          </div>
        </div>
      </div>
      <section className="animate__animated animate__fadeIn animate__delay-1s container p-4 w-screen max-w-screen-xl ">
        <h2 className="text-2xl font-semibold mb-8">Where I shine</h2>
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icons/squiggle.png"
              alt="Profile"
              className="w-12 h-12 mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">End-to-end expertise</h2>
            <p className="text-base text-gray-600">
              I bridge the gap between design and development, ensuring seamless
              integration from early concept to final product.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icons/rocket.png"
              alt="Profile"
              className="w-12 h-12  mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Rapid prototyping</h2>
            <p className="text-base text-gray-600">
              I can deliver multiple versions of a concept quickly, moving fast
              through iterations to refine and improve concepts based on
              real-world feedback.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icons/users.png"
              alt="Profile"
              className="w-12 h-12  mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              Collaboration & communication
            </h2>
            <p className="text-base text-gray-600">
              I communicate effectively across teams, ensuring alignment and a
              clear understanding of technical and design constraints.
            </p>
          </div>
        </div>
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icons/smile.png"
              alt="Profile"
              className="w-12 h-12  mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              Human-centered design
            </h2>
            <p className="text-base text-gray-600">
              I prioritize human needs while balancing technical feasibility and
              business goals, crafting intuitive and scalable solutions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icons/keyboard.png"
              alt="Profile"
              className="w-12 h-12 mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              Technical proficiency
            </h2>
            <p className="text-base text-gray-600">
              I’m able to create interactive prototypes with live data and
              complex microinteractions, pushing beyond the limitations of tools
              like Figma.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icons/bars.png"
              alt="Profile"
              className="w-12 h-12  mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Data visualization</h2>
            <p className="text-base text-gray-600">
              I enjoy transforming complex data into clear, engaging visual
              representations that drive insight and help inform better
              decision-making.
            </p>
          </div>
        </div>
      </section>
      {/*<section className="animate__animated animate__fadeIn animate__delay-1s container p-4 w-screen max-w-screen-xl ">*/}
      {/*  <h2 className="text-2xl font-semibold mb-8">Where I shine</h2>*/}
      {/*  <div className="flex flex-col gap-4 w-full">*/}
      {/*    <div className="border-b border-gray-200 pb-4">*/}
      {/*      <p className="text-xl font-semibold">*/}
      {/*        "Prototyping" -- someone wise*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="border-b border-gray-200 pb-4">*/}
      {/*      <p className="text-xl font-semibold">*/}
      {/*        "Implementation" -- someone wise*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="border-b border-gray-200 pb-4">*/}
      {/*      <p className="text-xl font-semibold">"Title 3" -- someone wise</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section className="animate__animated animate__fadeIn animate__delay-1s container p-4 w-screen max-w-screen-xl ">
        <h2 className="text-2xl font-semibold mb-8">Words I live by</h2>
        <svg
          className="w-8 h-8 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <div className="flex flex-col gap-4 w-full">
          <Quote quote="A prototype is worth 1000 meetings" />
          <Quote quote="The best UX is the least UX" />
          <Quote quote="Consistency for the sake of clarity" />
          <Quote quote="A problem well stated is a problem half solved" />
        </div>
      </section>
      {/*<Carousel />*/}
    </Layout>
  );
}
