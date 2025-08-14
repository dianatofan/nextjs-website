'use client';

import React from 'react';
import Image from 'next/image';
import ProtectedRoute from '@/components/ProtectedRoute';
import 'animate.css';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';
import { metropolis, nauryz } from '@/app/utils/local-font';

const labels = [
  { text: 'Google' },
  { text: '3 Months' },
  { text: 'Mobile' },
  { text: 'UX Engineer' },
];

export default function Page() {
  return (
    <ProtectedRoute>
      <Layout isProjectPage>
        <div className="relative w-full h-[100vh]">
          <Image
            src="/images/thumbnail6.png"
            alt="cover"
            priority
            fill
            className="object-cover w-full h-full animate__animated animate__fadeIn"
          />
          {/* Gradient overlay */}
          {/* Label */}
        </div>
        <div className="w-screen mt-8 items-center animate__animated animate__fadeIn">
          <section className="lg:flex items-center justify-between w-screen max-w-screen-xl">
            <div className="p-8">
              <h1
                className={`text-3xl antialiased tracking-tighter lg:leading-headers md:text-4xl text-primary font-semibold ${metropolis.className}`}
              >
                JSON Editor UI
              </h1>
              <h3 className={`text-lg text-gray-500 ${metropolis.className}`}>
                Enabling faster, safer, developer-independent updates to live
                game content
              </h3>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-12 px-8 pb-8 lg:p-0 lg:pb-0">
              <div>
                <div
                  className={`font-semibold uppercase text-gray-400 text-sm ${metropolis.className}`}
                >
                  Duration
                </div>
                <div className={metropolis.className}>3 months</div>
              </div>
              <div>
                <div
                  className={`font-semibold uppercase text-gray-400 text-sm ${metropolis.className}`}
                >
                  Type
                </div>
                <div className={metropolis.className}>Work project</div>
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
          <section className="bg-gray-100 py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                id="overview"
              >
                Overview{' '}
              </h1>
              <div className="max-w-screen-lg">
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Background
                </h3>
                <p className={`text-lg mb-4 ${metropolis.className}`}>
                  In a live game environment, timing is everything—whether it's
                  launching a seasonal event, adjusting pricing, or fixing
                  gameplay issues. But before the JSON Editor, release managers
                  couldn’t edit configuration data themselves and had to rely on
                  developers for even small changes. Errors were common, events
                  often broke, and important updates were delayed, frustrating
                  players and hurting revenue.
                </p>
                <p className={`text-lg mb-4 ${metropolis.className}`}>
                  We needed a solution that made managing game data safe,
                  simple, and fast—so the team could respond instantly without
                  waiting on development support.
                </p>
                <br />
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Problem
                </h3>
                <h1
                  className={`text-4xl antialiased tracking-tighter lg:leading-tight md:text-5xl text-primary font-semibold ${metropolis.className}`}
                >
                  No safe, direct way for release managers to edit game data
                </h1>
              </div>
            </div>
          </section>
          <section className="bg-white py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-16">
              <h1
                className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                id="overview"
              >
                In lives games, everything runs on JSON
              </h1>
              <p className={`text-lg mt-4 mb-4 ${metropolis.className}`}>
                including limited-time sale events👇
              </p>
              <Image
                src="/images/json/jsonInAGame.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 animate__animated animate__fadeIn"
              />
              <p className={`text-lg mt-4 mb-4 ${metropolis.className}`}>
                hence the need for a safe way of managing data without risking
                stability
              </p>
            </div>
          </section>
          <section className="bg-black text-white py-40 md:py-56 text-center  w-lg xl:flex flex-col items-center justify-center w-screen px-8 gap-3">
            <p
              className={`text-7xl antialiased tracking-tighter lg:leading-tight md:text-8xl text-white font-medium max-w-6xl mx-auto ${nauryz.className}`}
            >
              How might we
            </p>
            <div
              className={`text-6xl antialiased tracking-tighter lg:leading-tighter md:text-7xl text-white font-semibold max-w-5xl mx-auto ${metropolis.className}`}
            >
              <span className="text-tertiary">reduce friction and risk</span> in
              editing complex JSON configs?
            </div>
          </section>
          {/* What we know Section */}
          <section className="bg-white  py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl">
              {/* Left column: Heading */}
              <div className="xl:w-1/4 flex items-start xl:items-center">
                <h1
                  className={`text-lg xl:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                  id="overview"
                >
                  What I did
                </h1>
              </div>
              {/* Right column: Paragraph + Image */}
              <div className="xl:w-3/4 flex flex-col">
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  User research
                </h3>
                <p className={`text-lg mb-6 ${metropolis.className}`}>
                  I spoke with release managers to understand pain points,
                  workflows, and the types of mistakes that commonly occurred
                  when editing raw JSON.
                </p>
                <Image
                  src="/images/json/research.png"
                  alt="cover"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="w-full mt-4 animate__animated animate__fadeIn"
                />
              </div>
            </div>
          </section>

          {/*<section className="relative z-10 px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">*/}
          {/*  <div className="mb-8">*/}
          {/*    <h2*/}
          {/*      className={`text-md text-gray-400 mb-6 font-medium ${metropolis.className}`}*/}
          {/*    >*/}
          {/*      What we knew*/}
          {/*    </h2>*/}
          {/*    <TravelStatistics />*/}
          {/*  </div>*/}
          {/*</section>*/}
          {/* State-of-art Section */}
          <section className="bg-white py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className={`max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-primary font-semibold ${metropolis.className}`}
                id="overview"
              >
                A typical user journey is... frustrating
              </h1>
            </div>
            <div className="max-w-screen-lg">
              <Image
                src="/images/explore/uxnow.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          <section className="bg-white py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className={`max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-primary font-semibold ${metropolis.className}`}
                id="overview"
              >
                An ideal user journey is... awesome
              </h1>
            </div>
            <div className="max-w-screen-lg">
              <Image
                src="/images/explore/uxideal.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          {/* Quote Section */}
          <section className="bg-black text-white w-lg xl:flex items-center justify-center w-screen px-8 al">
            <div
              className={`text-5xl antialiased tracking-tighter lg:leading-tight md:text-6xl text-white text-center font-semibold max-w-screen-md mx-auto py-32 ${metropolis.className}`}
            >
              <p
                className={`text-7xl antialiased tracking-tighter lg:leading-tight md:text-8xl text-white font-medium max-w-6xl mx-auto ${nauryz.className}`}
              >
                Goal
              </p>
              <p
                className={`text-6xl antialiased tracking-tighter lg:leading-tighter md:text-10xl text-white font-semibold max-w-8xl mx-auto ${metropolis.className}`}
              >
                Design a{' '}
                <span className="text-tertiary">
                  structured, intuitive JSON Editor UI
                </span>{' '}
                to allow users to safely edit game configurations
              </p>
            </div>
          </section>
          <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                id="overview"
              >
                Meet Naomi
              </h1>
              <div className="max-w-screen-lg">
                <p className={`text-lg mb-4 ${metropolis.className}`}>
                  Naomi is a mother and a travel enthusiast, who lives in Zürich
                  and is interested in booking a weekend getaway somewhere in
                  Europe with her family.
                </p>
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/explore/naomi.jpeg"
                    alt="cover"
                    width={1920}
                    height={1080}
                    layout="responsive"
                    className="max-w-screen-sm animate__animated animate__fadeIn"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-primary font-semibold ${metropolis.className}`}
                id="overview"
              >
                Naomi's exploration journey
              </h1>
            </div>
            <div className="max-w-screen-xl">
              <Image
                src="/images/explore/tripExploration.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-6 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          <section className="bg-lightTeal py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className={`max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-teal font-semibold ${metropolis.className}`}
                id="overview"
              >
                I. Get Inspired
              </h1>
            </div>
            <div className="max-w-screen-lg">
              <Image
                src="/images/explore/getInspired.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-6 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          <section className="bg-gray-100 py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                id="overview"
              >
                Context
              </h1>
              <div className="max-w-screen-lg">
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Why?
                </h3>
                <p className={`text-lg mb-12 ${metropolis.className}`}>
                  According to a recent survey of US travelers, “exploring” is
                  the most enjoyable part of the journey.
                </p>
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  How?
                </h3>
                <p className={`text-lg mb-12 ${metropolis.className}`}>
                  By creating a one stop shop that is lightweight, fun and
                  informative, we can make more delightful experiences and
                  increase the overall funnel.
                </p>
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Back to Naomi's story
                </h3>
                <p className={`text-lg mb-4 ${metropolis.className}`}>
                  Naomi doesn't have a solid idea for trip destinations, so she
                  starts her search by typing a broad query: “weekend getaway”
                  to get started in her journey.
                </p>
                <p className={`text-lg mb-8 ${metropolis.className}`}>
                  First she is drawn to Grindelwald as it seems relaxing. After
                  a quick peek, she thinks that it may not be kid-friendly and
                  remembers seeing some family friendly places before.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/explore/firstscreen-grindelwald.gif"
                    alt="cover"
                    width={320}
                    height={560}
                    layout="responsive"
                    className="max-w-xs border-4 mb-12 border-black rounded-32px animate__animated animate__fadeIn"
                  />
                </div>
                <p className={`text-lg mb-8 ${metropolis.className}`}>
                  She wants to check the map as she needs to make sure the
                  travel time is manageable for the kids. She then discovers
                  that London would be an affordable option. She wants to learn
                  more.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/explore/firstscreen-selected.gif"
                    alt="cover"
                    width={320}
                    height={560}
                    layout="responsive"
                    className="max-w-xs border-4 mb-12 border-black rounded-32px animate__animated animate__fadeIn"
                  />
                </div>
                <p className={`text-lg mb-8 ${metropolis.className}`}>
                  She wants to check the map as she needs to make sure the
                  travel time is manageable for the kids. She then discovers
                  that London would be an affordable option. She wants to learn
                  more.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-lightPurple py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className={`max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-purple font-semibold ${metropolis.className}`}
                id="overview"
              >
                II. Look into alternatives
              </h1>
            </div>
            <div className="max-w-screen-lg">
              <Image
                src="/images/explore/flights.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-6 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          <section className="bg-gray-100 py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                id="overview"
              >
                Context
              </h1>
              <div className="max-w-screen-lg">
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Why?
                </h3>
                <p className={`text-lg mb-12 ${metropolis.className}`}>
                  1/3 of users who have a destination in mind are still
                  exploring travel ideas.
                </p>
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  How?
                </h3>
                <p className={`text-lg mb-12 ${metropolis.className}`}>
                  Offer alternative suggestions based on user's intent.
                </p>
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Back to Naomi's story
                </h3>
                <p className={`text-lg mb-4 ${metropolis.className}`}>
                  "London seems to be a nice choice!" Naomi starts to check the
                  flight details by searching “flights to London”. However,
                  she's also wondering: “are there other cheaper destinations?”,
                  “am I missing out anything?”
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/explore/secondscreen-flights.gif"
                    alt="cover"
                    width={320}
                    height={560}
                    layout="responsive"
                    className="max-w-xs border-4 mb-12 border-black rounded-32px animate__animated animate__fadeIn"
                  />
                </div>
                <p className={`text-lg mb-8 ${metropolis.className}`}>
                  “Alternative destinations” gives Naomi suggestions based on
                  price and her search history, as well as sustainable
                  suggestions to travel nearby.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-lightGreen py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className="max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-green font-semibold"
                id="overview"
              >
                III. Rediscover the journey
              </h1>
            </div>
            <div className="max-w-screen-lg">
              <Image
                src="/images/explore/rediscover.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-6 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          <section className="bg-gray-100 py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold"
                id="overview"
              >
                Context
              </h1>
              <div className="max-w-screen-lg">
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  Why?
                </h3>
                <p className={`text-lg mb-12 ${metropolis.className}`}>
                  The average length of a successful travel journey in Search is
                  34 days.
                </p>
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  How?
                </h3>
                <p className={`text-lg mb-12 ${metropolis.className}`}>
                  Intelligently curate Search history to provide users with a
                  personalized and up-to-date Search experience, making it easy
                  to resume their search and find the information they need.
                </p>
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  Back to Naomi's story
                </h3>
                <p className={`text-lg mb-4 ${metropolis.className}`}>
                  Naomi considers a few potential destinations, but hasn’t made
                  up her mind yet. She comes back to Search and types one of
                  places in her mind, “London”; the search history page shows
                  information about London, which she has searched for before
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/explore/lastscreen.gif"
                    alt="cover"
                    width={320}
                    height={560}
                    layout="responsive"
                    className="max-w-xs border-4 mb-12 border-black rounded-32px animate__animated animate__fadeIn"
                  />
                </div>
                <p className={`text-lg mb-8 ${metropolis.className}`}>
                  She discovers that there is a Disney festival in London that
                  her son would like. The flight is even cheaper than last time.
                  London is calling.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold"
                id="overview"
              >
                Summing up
              </h1>
              <div className="max-w-screen-lg">
                <p className={`text-lg mb-16 ${metropolis.className}`}>
                  We divided the customer journey in three main stages and
                  proposed solutions for each aspect of the trip planning.
                </p>
                <div className="mb-8">
                  <p className="text-xl lg:text-2xl mb-4 font-semibold">
                    I. Get inspired (cross-vertical journey)
                  </p>
                  <p className={`text-lg mb-4 ${metropolis.className}`}>
                    Offer snackable content across diverse verticals (hotels,
                    food, things to do etc.) to inspire users where to go.
                  </p>
                </div>
                <div className="mb-8">
                  <p className="text-xl lg:text-2xl mb-4 font-semibold">
                    II. Look into alternatives (sideway navigation)
                  </p>
                  <p className={`text-lg mb-4 ${metropolis.className}`}>
                    Provide compelling multi-format content streams for
                    suggestions and facilitate user comparisons.
                  </p>
                </div>
                <div className="mb-8">
                  <p className="text-xl lg:text-2xl mb-4 font-semibold">
                    III. Rediscover the journey (multi-session)
                  </p>
                  <p className={`text-lg mb-4 ${metropolis.className}`}>
                    Users can revisit their search history to resume
                    explorations, accompanied by insights to support their
                    decision-making.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-100 pt-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold"
                id="overview"
              >
                Conclusion
              </h1>
              <div className="max-w-screen-lg">
                <p className={`text-lg mb-16 ${metropolis.className}`}>
                  We successfully proposed a new framework oriented towards
                  travelers, to inspire them to travel to places that suit their
                  needs and interests. This framework can be extended to
                  multiple scenarios, from weekend trips to ski tours or long
                  summer vacations.
                </p>
                <div className="mb-8">
                  <p className="text-lg lg:text-xl mb-4 font-semibold">
                    Next steps
                  </p>
                  <p className={`text-lg mb-4 ${metropolis.className}`}>
                    We presented our ideas to the steering committee of UX leads
                    and after weekly feedback rounds, these concepts set the
                    roadmap for 2024 planning, however there is stil a lot of
                    work left to do. Even if the concepts were validated by
                    internal stakeholders, we still need to conduct more user
                    studies with external participants to identify areas which
                    might not seem so counterintuitive to the average traveller.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
