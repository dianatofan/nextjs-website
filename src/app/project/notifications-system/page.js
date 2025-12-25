'use client';

import React from 'react';
import Image from 'next/image';
import ProtectedRoute from '@/components/ProtectedRoute';
import 'animate.css';

import TravelStatistics from '@/app/project/google-travel/travel-statistics';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';
import Tldr from '@/components/Tldr';
import { metropolis, nauryz } from '@/app/utils/local-font';

const labels = [
  { text: 'Google' },
  { text: '3 Months' },
  { text: 'Mobile' },
  { text: 'UX Engineer' },
];

export default function Page() {
  const tldrData = {
    title: "Google Travel Search",
    problem:
      "Travellers used Google to plan trips, but the experience was text-heavy and overwhelming. Flexible users—often unsure about dates or destinations—struggled to compare options and make confident choices.",
    research:
      "We drew on insights from previous UX studies showing that most users are flexible (70% on dates, 50% on destinations) and often change plans mid-search. The main friction points were getting inspired, comparing alternatives, and resuming past searches. Our design sprint focused on solving these challenges while supporting Google’s shift toward more visual, interactive results with images, maps, and multimedia.",
    solution:
      "I built interactive prototypes in Figma and React to bring our ideas to life. In React, I implemented complex animations that Figma couldn’t support and integrated the Google Maps API to mimic realistic travel scenarios. The final design restructured the journey into three stages: Get Inspired (visual, cross-vertical content), Look into Alternatives (side-by-side suggestions with price/context), and Rediscover the Journey (personalized history with insights).",
    metrics: [
      { value: "3", label: "clear stages defined in the traveller journey framework" },
      { value: "✔", label: "validated by UX leadership and adopted into 2024 roadmap" },
      { value: "→", label: "contributed to Google Search\’s broader shift toward visual, multimedia results" },
    ],
  };
  

  
  return (
    <ProtectedRoute>
      <Layout isProjectPage>
      <div className="relative w-full h-[100vh]">
          <Image
            src="/images/explore/cover.png"
            alt="cover"
            priority
            fill
            className="object-cover w-full h-full animate__animated animate__fadeIn"
          />
        </div>
        <div className="w-screen mt-8 items-center align-center animate__animated animate__fadeIn">
        <section className="flex flex-col align-center justify-between w-screen max-w-screen-xl">
        <div className="flex flex-col md:align-center lg:items-center gap-2 md:flex-row md:gap-12 px-8 pb-8 lg:p-0 lg:pb-0">
            <div className="p-8">
              <h1
                className={`text-3xl antialiased tracking-tighter lg:leading-headers md:text-4xl text-primary font-semibold ${metropolis.className}`}
              >
                An Enhanced Travel Experience
              </h1>
              <h3 className={`text-lg text-gray-500 ${metropolis.className}`}>
                Making Google Search the most loved tool for travellers
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
                <div className={metropolis.className}>Design sprint</div>
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
            </div>
            <Tldr {...tldrData} />
          </section>
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
                  Background
                </h3>
                <p className={`text-lg mb-4 ${metropolis.className}`}>
                  91% of travellers are turning to search engines when looking
                  for places to visit, with the vast majority (81%) preferring
                  to use Google as their most common source of travel
                  inspiration.
                </p>
                <p className={`text-lg mb-4 ${metropolis.className}`}>
                  However, many users expressed frustration with constantly
                  switching between pages during their trip planning, drowning
                  in a sea of possibilities.
                </p>
                <p className={`text-lg mb-8 ${metropolis.className}`}>
                  Together with 3 UXDs and a UXR, we embarked on a design sprint
                  journey to improve the search experience for travellers,
                  making it easier to narrow down choices when planning a
                  vacation.
                </p>

                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Problem
                </h3>
                <h1
                  className={`text-4xl antialiased tracking-tighter lg:leading-tight md:text-5xl text-primary font-semibold ${metropolis.className}`}
                >
                  Current search experience for travellers is not tailored
                  around their interests.
                </h1>
              </div>
            </div>
          </section>
          {/*Quote Section*/}
          {/*/!* Why Section *!/*/}
          {/*<section className="relative z-10 px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">*/}
          {/*  <div className="mb-8">*/}
          {/*    <h2*/}
          {/*      className={`text-md text-gray-400 mb-6 font-medium ${metropolis.className}`}*/}
          {/*    >*/}
          {/*      Why it mattered?*/}
          {/*    </h2>*/}
          {/*    <h3*/}
          {/*      className={`text-4xl md:text-5xl lg:text-6xl font-semibold leading-tighter tracking-tighter mb-8 ${metropolis.className}`}*/}
          {/*    >*/}
          {/*      Trip planning on Google felt fragmented and overwhelming.*/}
          {/*    </h3>*/}
          {/*    <p*/}
          {/*      className={`text-lg md:text-xl text-primary leading-relaxed font-normal ${metropolis.className}`}*/}
          {/*    >*/}
          {/*      Search is the #1 starting point for travel planning — but for*/}
          {/*      many users, it quickly becomes a source of stress. Research*/}
          {/*      showed that travelers were constantly switching between tabs,*/}
          {/*      drowning in choices, and struggling to compare destinations.*/}
          {/*      Planning felt like work, not inspiration.*/}
          {/*    </p>*/}
          {/*  </div>*/}

          {/*  /!* Data Visualization *!/*/}
          {/*  <div className="relative flex justify-center items-center h-[28rem]">*/}
          {/*    /!* 91% Bubble *!/*/}
          {/*    <div className="absolute text-center left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800 rounded-full flex flex-col justify-center items-start z-10 shadow-lg">*/}
          {/*      <span className="text-white text-5xl text-center w-full font-semibold mb-2">*/}
          {/*        91%*/}
          {/*      </span>*/}
          {/*      <span*/}
          {/*        className={`text-white text-lg text-center w-full ${metropolis.className}`}*/}
          {/*      >*/}
          {/*        Rely on search engines*/}
          {/*        <br /> for trip inspiration*/}
          {/*      </span>*/}
          {/*    </div>*/}
          {/*    /!* 81% Bubble (overlapping) *!/*/}
          {/*    <div className="absolute left-80 top-1/2 -translate-y-1/2 w-80 h-80 bg-gray-600 rounded-full flex flex-col justify-center items-center z-20 shadow-lg border-4 border-white">*/}
          {/*      <span className="text-white text-4xl font-semibold mb-2">*/}
          {/*        81%*/}
          {/*      </span>*/}
          {/*      <span*/}
          {/*        className={`text-white text-base text-center max-w-xs ${metropolis.className}`}*/}
          {/*      >*/}
          {/*        Prefer Google*/}
          {/*      </span>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}
          <section className="bg-black text-white py-40 md:py-56 text-center  w-lg xl:flex flex-col items-center justify-center w-screen px-8 gap-3">
            <p
              className={`text-7xl antialiased tracking-tighter lg:leading-tight md:text-8xl text-white font-medium max-w-6xl mx-auto ${nauryz.className}`}
            >
              How might we
            </p>
            <p
              className={`text-6xl antialiased tracking-tighter lg:leading-tighter md:text-7xl text-white font-semibold max-w-5xl mx-auto ${metropolis.className}`}
            >
              help travellers narrow down their choices when planning a
              vacation?
            </p>
          </section>
          {/* What we know Section */}
          <section className="bg-white py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-16">
              <h1
                className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                id="overview"
              >
                What we knew
              </h1>
              <TravelStatistics />
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
            <div className="w-screen p-8 lg:px-32 lg:py-16">
              <h1
                className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                id="overview"
              >
                Today's search experience
              </h1>
              <Image
                src="/images/explore/currentUx.png"
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
                help flexible travellers make confident decisions about
                <span className="text-tertiary"> where</span> to go and{' '}
                <span className="text-tertiary"> when</span> to go by offering
                rich and inspiring experiences on Search
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
