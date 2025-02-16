'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'nuka-carousel';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';
import { metropolis } from '@/app/utils/local-font';
import 'animate.css';

export default function Page() {
  return (
    <Layout isProjectPage>
      <Image
        src="../images/racefinder/coverblue.png"
        alt="cover"
        width={1920}
        height={1080}
        layout="responsive"
        className="w-full animate__animated animate__fadeIn"
      />
      <div className="w-screen mt-8 items-center animate__animated animate__fadeIn">
        <section className="lg:flex items-center justify-between w-screen max-w-screen-xl">
          <div className="p-8">
            <h1
              className={`text-3xl antialiased tracking-tighter lg:leading-headers md:text-4xl text-primary font-semibold ${metropolis.className}`}
            >
              Racefinder
            </h1>
            <h3 className={`text-lg text-gray-500 ${metropolis.className}`}>
              Event discovery app for runners
            </h3>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-12 px-8 pb-8 lg:p-0 lg:pb-0">
            <div>
              <div
                className={`font-semibold uppercase text-gray-400 text-sm ${metropolis.className}`}
              >
                Duration
              </div>
              <div className={metropolis.className}>2 months</div>
            </div>
            <div>
              <div
                className={`font-semibold uppercase text-gray-400 text-sm ${metropolis.className}`}
              >
                Type
              </div>
              <div className={metropolis.className}>Self-initiated project</div>
            </div>
            <div>
              <div
                className={`font-semibold uppercase text-gray-400 text-sm ${metropolis.className}`}
              >
                Role
              </div>
              <div className={metropolis.className}>UX/UI designer</div>
            </div>
          </div>
        </section>
        {/* Overview Section */}
        <section className="bg-gray-100 py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Overview
            </h1>
            <div className="max-w-screen-lg">
              <h3
                className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
              >
                Problem
              </h3>
              <h1
                className={`text-4xl antialiased tracking-tighter lg:leading-tight md:text-5xl text-primary font-semibold ${metropolis.className}`}
              >
                Finding races leaves much to be desired.
              </h1>
              <p className={`text-lg mb-4 ${metropolis.className} max-w-75ch`}>
                Despite the growing popularity of running events, discovering
                and registering for races remains a fragmented and inefficient
                process. Existing platforms lack robust filtering options,
                making it difficult for runners to find relevant events based on
                location, distance, or difficulty. The absence of a dedicated
                mobile solution further compounds the problem, requiring users
                to navigate multiple sources to gather essential race
                information.
              </p>
              <h3
                className={`font-semibold uppercase text-gray-400 text-sm mt-16 mb-4 ${metropolis.className}`}
              >
                Goal
              </h3>
              <h1
                className={`text-4xl antialiased tracking-tighter lg:leading-tight md:text-5xl text-primary font-semibold ${metropolis.className}`}
              >
                Create an app targeted at the running community that allows
                runners to find and book races in their area directly from their
                smartphones.
              </h1>
            </div>
          </div>
        </section>
        {/* Quote Section */}
        <section className="bg-black text-white py-12 w-lg xl:flex items-center justify-center w-screen px-8">
          <blockquote className="text-center">
            <p
              className={`text-5xl antialiased tracking-tighter lg:leading-tight md:text-8xl font-semibold mb-6 text-left ${metropolis.className}`}
            >
              “
            </p>
            <p
              className={`text-5xl antialiased tracking-tighter lg:leading-tight md:text-6xl text-white font-semibold max-w-screen-md mx-auto ${metropolis.className}`}
            >
              How can we create a meaningful experience that helps runners plan
              their upcoming races more effectively?
            </p>
            <p
              className={`text-6xl antialiased tracking-tighter lg:leading-tight md:text-8xl font-semibold text-right ${metropolis.className}`}
            >
              ”
            </p>
          </blockquote>
        </section>
        {/* What we know Section */}
        <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Research
            </h1>
            <div className="max-w-screen-lg">
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                Gaining insights from runners
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                As much as I would have loved to solve one of my personal
                frustrations, the first thing that needed to be done was to find
                out if I'm the only one experiencing the same struggles or there
                are others out there resonating with me. Prior to the
                interviews, I made sure the people I talked to were engaging in
                physical activities regularly and liked participating in
                competitive events.
              </p>
              <p
                className={`text-2xl mb-4 font-semibold ${metropolis.className}`}
              >
                Most people agreed that the race-booking process is longer than
                necessary.
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                This thing alone gave me the green light to carry on with my
                research.
              </p>
            </div>
          </div>
        </section>
        {/* State-of-art Section */}
        <section className="bg-grayRace py-12 flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-64 lg:py-16">
            <Image
              src="../images/racefinder/research.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
          </div>
        </section>
        <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Findings
            </h1>
            <div className="max-w-screen-lg">
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                Primary Research: Direct User Engagement
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                Pain points when trying to register for a race:
                <ul className="mt-4 px-8">
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Information Fragmentation&nbsp;
                    </span>
                    – Runners struggle to find race details in one place.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Inefficient Registration&nbsp;
                    </span>
                    – Signing up for races requires navigating multiple external
                    sites.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Limited Filtering Capabilities&nbsp;
                    </span>
                    - No existing platform allows users to search based on
                    essential attributes like race length, difficulty, or
                    proximity.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Lack of a Mobile-First Experience&nbsp;
                    </span>
                    - No dedicated mobile app exists for streamlined race
                    discovery.
                  </li>
                </ul>
              </p>
              <p
                className={`text-lg mb-4  mt-16 font-semibold ${metropolis.className}`}
              >
                Secondary Research: Market & Competitive Analysis{' '}
              </p>
              <div className={`text-lg mb-4 ${metropolis.className}`}>
                Analyzing existing solutions, I identified four key runner
                personas:
                <div className="container mx-auto p-4  grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="../images/racefinder/runnerType1.png"
                      alt="Profile"
                      className="w-40 h-40 p-8 mb-4 overflow-visible bg-black rounded-full"
                    />
                    <h2
                      className={`${metropolis.className} text-xl font-semibold mb-2`}
                    >
                      Casual Runners
                    </h2>
                    <p
                      className={`${metropolis.className} text-base text-gray-600`}
                    >
                      Occasionally participate in 5K/10K events but struggle to
                      find relevant races.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="../images/racefinder/runnerType2.png"
                      alt="Profile"
                      className="w-40 h-40 p-8 mb-4 overflow-visible bg-black rounded-full"
                    />
                    <h2
                      className={`${metropolis.className} text-xl font-semibold mb-2`}
                    >
                      Competitive Runners{' '}
                    </h2>
                    <p
                      className={`${metropolis.className} text-base text-gray-600`}
                    >
                      Regularly train and participate in multiple events
                      annually.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="../images/racefinder/runnerType3.png"
                      alt="Profile"
                      className="w-40 h-40 p-8 mb-4 overflow-visible bg-black rounded-full"
                    />
                    <h2
                      className={`${metropolis.className} text-xl font-semibold mb-2`}
                    >
                      Social Runners
                    </h2>
                    <p
                      className={`${metropolis.className} text-base text-gray-600`}
                    >
                      Engage in races with friends, clubs, or organizations.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="../images/racefinder/runnerType4.png"
                      alt="Profile"
                      className="w-40 h-40 p-8 mb-4 overflow-visible bg-black rounded-full"
                    />
                    <h2
                      className={`${metropolis.className} text-xl font-semibold mb-2`}
                    >
                      Devoted Runners
                    </h2>
                    <p
                      className={`${metropolis.className} text-base text-gray-600`}
                    >
                      Long-distance enthusiasts who require detailed event data
                      and advanced filtering options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Personas
            </h1>
            <div className="max-w-screen-lg">
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                Defining users
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                After researching, I created two personas that best shape the
                potential users of this app, along with their needs and
                frustrations. Throughout the rest of the design process, I
                focused on solving their problems and come up with improvements.
              </p>
              <Carousel enableKeyboardControls showArrows showDots>
                <img src="../images/racefinder/persona1.png" alt="persona1" />
                <img src="../images/racefinder/persona2.png" alt="persona2" />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32 lg:py-16">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Ideation & wireframing
            </h1>
            <p className={`text-lg mt-4 mb-4 ${metropolis.className}`}>
              Leveraging insights from research, I sketched initial concepts
              focusing on:
            </p>
            <ul className="mt-2 p-8 border-l-2 border-l-gray-300 bg-gray-100">
              <li className={`text-lg mb-4 ${metropolis.className}`}>
                <span
                  className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                >
                  &rarr; Interactive Map&nbsp;
                </span>
                – The app's central feature, displaying pinpoints for upcoming
                race locations.
              </li>
              <li className={`text-lg mb-4 ${metropolis.className}`}>
                <span
                  className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                >
                  &rarr; Search Filters&nbsp;
                </span>
                – Customizable options for race type, distance, and date range.
              </li>
              <li className={`text-lg mb-4 ${metropolis.className}`}>
                <span
                  className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                >
                  &rarr; Dual-View Feature&nbsp;
                </span>
                – The option to switch between map view and expandable cards.
              </li>
              <li className={`text-lg mb-4 ${metropolis.className}`}>
                <span
                  className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                >
                  &rarr; Race History&nbsp;
                </span>{' '}
                – A dedicated page for race history.
              </li>
            </ul>
            <Image
              src="../images/racefinder/wireframes1.jpg"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
            <Image
              src="../images/racefinder/wireframes2.jpg"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full animate__animated animate__fadeIn"
            />
          </div>
        </section>
        <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Layout refinements
            </h1>
            <div className="max-w-screen-lg">
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                After testing the wireframes with a handful of people, I updated
                the design according to the feedback. Most of the layout was
                kept with a few changes:
              </p>
              <ul className="mt-4 px-8">
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Continue without login [removed]
                  </span>{' '}
                  - Guest mode was dropped as it prevents data retention, which
                  most users prefer.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Search filters [updated]
                  </span>{' '}
                  - The race length and proximity were kept, however
                  "difficulty" was removed (too subjective). Added start & end
                  date filter for time-based searches.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Expandable cards [simplified]
                  </span>{' '}
                  - Expandable cards were replaced with clickable ones due to
                  text overload. Clicking on a card now leads to a race details
                  page with registration and invite options.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Logo and Toggle [moved]
                  </span>{' '}
                  - Both were shifted to the top to avoid overlapping with
                  navigation.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32 lg:py-16">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Mid-fidelity prototype
            </h1>
            <Image
              src="../images/racefinder/midFidelityRounded.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
          </div>
        </section>
        <section className="bg-gray-900 py-12 flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32 lg:py-16">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-white font-semibold ${metropolis.className}`}
              id="overview"
            >
              High-fidelity prototype
            </h1>
            <h1
              className={`max-w-screen-xl text-md antialiased tracking-tighter lg:leading-headers mt-16 mb-8 xl:mb-0 md:text-xl text-gray-600 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Sign-up flow
            </h1>
            <Image
              src="../images/racefinder/signUpFlow.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
            <h1
              className={`max-w-screen-xl text-md antialiased tracking-tighter lg:leading-headers mt-16 mb-8 xl:mb-0 md:text-xl text-gray-600 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Onboarding
            </h1>
            <Image
              src="../images/racefinder/onboarding.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
            <h1
              className={`max-w-screen-xl text-md antialiased tracking-tighter lg:leading-headers mt-16 mb-8 xl:mb-0 md:text-xl text-gray-600 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Profile page & previous races
            </h1>
            <Image
              src="../images/racefinder/profileAndHistory.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
            <h1
              className={`max-w-screen-xl text-md antialiased tracking-tighter lg:leading-headers mt-16 mb-8 xl:mb-0 md:text-xl text-gray-600 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Filter races, register & send invitations
            </h1>
            <Image
              src="../images/racefinder/map.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
          </div>
        </section>
        <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              User testing
            </h1>
            <div className="max-w-screen-lg">
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                Identifying bottlenecks
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                After creating the high-fidelity prototpe, I conducted usability
                testing with four participants (three in person and one online
                via screen-sharing). My main goal was to detect whether the
                participants found the app intuitive and were able to perform
                tasks without extra help needed, so I came up with a series of
                tasks that best described the purpose of the app and observed
                how the people interacted with the prototype. Tasks included
                looking for a race with custom parameters, sending an
                invitation, register for a race and access the previous races.
                Overall, the testing went very well and the users completed the
                tasks easily. Except for a few minor things.
              </p>
              <div className="w-full">
                <Image
                  src="../images/racefinder/usabilityTest.jpg"
                  alt="cover"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="w-full animate__animated animate__fadeIn"
                />
              </div>
              <p
                className={`text-2xl mb-4 mt-8 font-semibold ${metropolis.className}`}
              >
                Participants had the tendency to zoom in the map.
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                However this feature was not supported at the moment. They also
                wished to see their current location on the map, along with the
                pinpoints. Regarding the invitations, there was no way to tell
                what people you previously invited to a race, so having that in
                plain sight would have also been helpful.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32 lg:py-16">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Revision
            </h1>
            <Image
              src="../images/racefinder/refinements.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
          </div>
        </section>
        <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Reflection
            </h1>
            <div className="max-w-screen-lg">
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                This project has been a great opportunity for me to expand my
                strategic thinking. On the whole, the app met its purpose and
                could be a significant tool to runners looking for upcoming
                races. My key learning during the design process was how
                important it is to ask for user feedback before everything else
                comes into play.
              </p>
              <h3
                className={`font-semibold text-primary text-lg mb-4 ${metropolis.className}`}
              >
                Future iterations
              </h3>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                While the core experience has been validated, there is always
                room for improvement. This application could be enhanced with:
              </p>
              <ul className="mt-4 px-8">
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; User Settings & Notifications&nbsp;
                  </span>
                  - Personalized alerts for upcoming races.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; AI-Driven Race Suggestions&nbsp;
                  </span>
                  - Smart recommendations based on user preferences.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; Expanded Filtering Options&nbsp;
                  </span>
                  - Custom race categories and community-based rankings.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="iframe-container">
        <iframe
          style={{
            border: 'none',
            background: '#fff',
          }}
          width="1400"
          height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Flu0VBSCpiFcH1fJCLtOk5l%2FUntitled%3Fnode-id%3D241%253A5949%26scaling%3Dscale-down%26page-id%3D241%253A380%26starting-point-node-id%3D241%253A5949%26hide-ui%3D1"
          allowFullScreen
          allowTransparency
          frameBorder={0}
        ></iframe>
      </div>
    </Layout>
  );
}
