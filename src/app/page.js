'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/web';

import Overlay from '@/components/Overlay';
import Card from '@/components/Card';
import Layout from '@/components/Layout';

import '@/styles/styles.scss';
// import '@/styles/fonts.scss';
import 'animate.css';
import { metropolis } from '@/app/utils/local-font';

const NoSSRCanvas = dynamic(() => import('@/components/Canvas'), {
  ssr: false,
});

export default function App() {
  const [{ background, fill }, set] = useSpring(
    {
      background: '#fff',
      fill: '#202020',
    },
    []
  );

  return (
    <Layout fill={fill} isProjectPage={false}>
      <a.main
        style={{ background }}
        className="overflow-x-hidden items-center flex-col"
      >
        <section className="container mx-auto max-w-screen-xl h-[80vh] flex flex-col  md:flex-row items-center">
          <NoSSRCanvas setBg={set} />
          <Overlay fill={fill} />
        </section>
        <section className="animate__animated animate__fadeIn animate__delay-1s w-full h-[10vh] text-center flex items-center justify-center">
          <a.span
            className={`${metropolis.className} role inline-block mt-4 mb-2 text-sm md:mb-3 md:text-base font-normal text-primary`}
            id="scroll-to-explore"
            style={{ color: fill }}
          >
            <a.div
              className="icon-scroll"
              style={{
                boxShadow: `inset 0 0 0 1.5px ${fill}`,
              }}
            />
          </a.span>
        </section>

        <section className="animate__animated animate__fadeIn animate__delay-1s w-full ml-8 mr-8 flex justify-center">
          <div className="max-w-screen-xl w-full py-8 mx-4 lg:mx-0">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
              <Card
                title="Google Search for Travellers"
                description="Making Google Search the most loved tool for travellers"
                role="UX/UI DESIGN"
                image="./images/thumbnail5.png"
                url="explore"
                label="Shipped"
                isPasswordProtected
                fill={fill}
                project="google-travel"
              />
              <Card
                title="JSON Editor UI"
                description="Enabling faster, safer, developer-independent updates to live game content"
                role="UX/UI DESIGN"
                image="./images/thumbnail6.png"
                url="json"
                label="Shipped"
                isPasswordProtected
                fill={fill}
                project="json"
              />
              <Card
                title="Famly's First-Ever Design System"
                description="Shaping a design system for a mature product"
                role="UX/UI DESIGN | USER RESEARCH"
                image="./images/famlyThumbnail.png"
                url="famly"
                label="Shipped"
                fill={fill}
                project="famly-redesign"
              />
              <Card
                title="Racefinder App"
                description="Optimizing the racebooking process to help runners find their next race easier"
                role="UX/UI DESIGN | USER RESEARCH"
                image="./images/thumbnail1.png"
                url="racefinder"
                label="Side project"
                fill={fill}
                project="racefinder"
              />
              {/*<Card*/}
              {/*  title="Sustainable E-Commerce"*/}
              {/*  description="Reimagining the checkout flow to reduce packaging waste in online orders"*/}
              {/*  role="UX/UI DESIGN | USER RESEARCH"*/}
              {/*  image="./images/thumbnail3.png"*/}
              {/*  url="sustainability"*/}
              {/*  label="Side project"*/}
              {/*  fill={fill}*/}
              {/*  project="sustainable-ecommerce"*/}
              {/*/>*/}
              <Card
                title="Visual Exploration of Time Series in Healthcare"
                description="Generate medical charts given patient data"
                role="DATA VISUALIZATION | UX/UI DESIGN"
                image="./images/thumbnail2.png"
                url="time-series"
                label="Research"
                fill={fill}
                project="time-series"
              />
            </div>
          </div>
        </section>
      </a.main>
    </Layout>
  );
}
