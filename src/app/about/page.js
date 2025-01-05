'use client';

import React from 'react';
import Image from 'next/image';
import { useSpring } from '@react-spring/core';
import Marquee from 'react-fast-marquee';

import Layout from '@/components/Layout';
import Polaroid from '@/components/Polaroid';
import Grid from '@/components/Grid';

import '@/styles/about.scss';
import '@/styles/styles.scss';

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
      <div className="container w-screen p-4 my-[14rem] mb-[6rem] max-w-screen-xl flex items-center flex-col lg:flex-row gap-12 animate__animated animate__fadeIn">
        <div className="w-full lg:w-[45%]">
          <Image
            src="/images/about/me.jpg"
            alt="Picture with me"
            className="animate__animated animate__fadeIn"
            layout="responsive"
            width={520}
            height={660}
            style={{ borderRadius: '16px' }}
          />
        </div>

        <div className="w-full lg:w-[55%] leading-8 flex flex-col gap-6">
          <h1 className="text-3xl font-semibold">
            Hi, I'm Diana, a multi-disciplinary frontend engineer and product
            designer passionate about solving problems.
          </h1>
          {/*<p className="text-gray-400 text-lg">/dee · uh · nah/</p>*/}
          {/*<p className="text-3xl font-semibold">*/}
          {/*  I'm a multi-disciplinary frontend engineer and product designer*/}
          {/*  passionate about solving problems.*/}
          {/*</p>*/}
          <div className="mt-2 text-lg flex flex-col gap-6">
            <p>
              With a foundation in frontend development, I've always had a keen
              interest in how users perceive and interact with web interfaces.
              This curiosity led me to broaden my expertise in UX design, and I
              now combine my technical skills with my creativity to craft
              meaningful, user-centered solutions.
            </p>
            {/*<p>*/}
            {/*  In businesses, I believe data-driven decisions always steer growth*/}
            {/*  and this is why in my approach I like exploring one hundred ideas*/}
            {/*  to find the right one through rapid prototyping.*/}
            {/*</p>*/}
            <p>
              Through my career, I gained a deep understanding of how to build
              pixel-perfect, responsive applications, while being particularly
              drawn to the human side of technology.
            </p>
            {/*<blockquote className="border-l-4 border-gray-500 italic pl-4 md:pl-8 py-4">*/}
            {/*  <p className="text-2xl font-semibold">*/}
            {/*    A prototype is worth a thousand meetings*/}
            {/*  </p>*/}
            {/*  <cite className="block text-right mt-4 text-gray-600">*/}
            {/*    - words I live by*/}
            {/*  </cite>*/}
            {/*</blockquote>*/}
            <p>
              Currently, I work as a product designer{' '}
              <a
                href="https://tactilegames.com/"
                target="_blank"
                rel="noreferrer"
                className="text-tertiary"
              >
                @Tactile
              </a>
              , where I build internal tools for game release managers to enable
              them to efficiently manage and monitor live operations. Before
              that, I worked as a UX engineer at{' '}
              <a
                href="https://google.com/"
                target="_blank"
                rel="noreferrer"
                className="text-tertiary"
              >
                @Google
              </a>
              , where I built high-fidelity prototypes for travellers to
              validate concepts and explore ideas.
            </p>
            <p>
              Send me a message if you would like to connect! 😄
              <br />
              <a
                href="mailto:dianatofan.dt@gmail.com?Subject=Hello"
                target="_top"
                className="text-tertiary"
              >
                E-mail
              </a>
              {' / '}
              <a
                href="https://linkedin.com/in/diana-tofan"
                target="_blank"
                rel="noreferrer"
                className="text-tertiary"
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
      <section className="animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-2xl font-semibold">
          When I'm not in front of the computer, I...
        </h2>
        <div className="flex flex-wrap gap-8">
          <Polaroid src="/images/about/ride.jpg" caption="go for a ride" />
          <Polaroid
            src="/images/about/mountain.png"
            caption="explore the world"
          />
          <Polaroid src="/images/about/sunset.png" caption="watch the sunset" />
        </div>
        <h2 className="text-2xl font-semibold">Things that inspire me</h2>
        <div className="picsGrid">
          <Polaroid src="/images/about/art.png" caption="street art" />
          <Polaroid src="/images/about/museum.png" caption="museums" />
          <Polaroid
            src="/images/about/architecture.png"
            caption="architecture"
          />
        </div>
      </section>
      {/* <section> */}
      {/*  <h2>Bands I could listen to forever</h2> */}
      {/*  <Img fixed={data.pixies.childImageSharp.fixed} /> */}
      {/*  <Img fixed={data.strokes.childImageSharp.fixed} /> */}
      {/*  <Img fixed={data.killers.childImageSharp.fixed} /> */}
      {/*  <Img fixed={data.arcadeFire.childImageSharp.fixed} /> */}
      {/* </section> */}
      {/* <section> */}
      {/*  <h2>My    skills in a nutshell</h2> */}
      {/*  <div> */}
      {/*    <div>Frontend</div> */}
      {/*    <div>Design</div> */}
      {/*    <div>DataVis</div> */}
      {/*  </div> */}
      {/* </section> */}
      {/* <section> */}
      {/*  <h2>My personality type</h2> */}
      {/*  <div>Turbulent Entrepreneur (ESTP-T)</div> */}
      {/* </section> */}
    </Layout>
  );
}
