'use client';

import React from 'react';
import Image from 'next/image';
import ProtectedRoute from '@/components/ProtectedRoute';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';

export default function Page() {
  return (
    <ProtectedRoute>
      <Layout>
        <Image
          src="./images/explore/cover.png"
          alt="cover"
          width={1920}
          height={1080}
          layout="responsive"
          className="w-full animate__animated animate__fadeIn"
        />
        <div className="w-screen mt-8 items-center animate__animated animate__fadeIn">
          <section className="lg:flex items-center justify-between w-screen max-w-screen-xl">
            <div className="p-8">
              <h1 className="text-3xl antialiased tracking-tighter lg:leading-headers md:text-4xl text-primary font-semibold">
                An Enhanced Travel Experience
              </h1>
              <h3 className="text-lg text-gray-500">
                Making Google Search the most loved tool for travellers
              </h3>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-12 px-8 pb-8 lg:p-0 lg:pb-0">
              <div>
                <div className="font-semibold uppercase text-gray-400 text-sm">
                  Duration
                </div>
                <div>3 months</div>
              </div>
              <div>
                <div className="font-semibold uppercase text-gray-400 text-sm">
                  Type
                </div>
                <div>Design sprint</div>
              </div>
              <div>
                <div className="font-semibold uppercase text-gray-400 text-sm">
                  Role
                </div>
                <div>UX/UI designer</div>
              </div>
            </div>
          </section>
          {/* Overview Section */}
          <section className="bg-gray-100 py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold"
                id="overview"
              >
                Overview
              </h1>
              <div className="max-w-screen-lg">
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  Background
                </h3>
                <p className="text-lg mb-4">
                  91% of travellers are turning to search engines when looking
                  for places to visit, with the vast majority (81%) preferring
                  to use Google as their most common source of travel
                  inspiration.
                </p>
                <p className="text-lg mb-4">
                  However, many users expressed frustration with constantly
                  switching between pages during their trip planning, drowning
                  in a sea of possibilities.
                </p>
                <p className="text-lg mb-8">
                  Together with 3 UXDs and a UXR, we embarked on a design sprint
                  journey to improve the search experience for travellers,
                  making it easier to narrow down choices when planning a
                  vacation.
                </p>

                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  Problem
                </h3>
                <h1 className="text-4xl antialiased tracking-tighter lg:leading-tight md:text-5xl text-primary font-semibold">
                  Current search experience for travellers is not tailored
                  around their interests.
                </h1>
              </div>
            </div>
          </section>
          {/* Quote Section */}
          <section className="bg-black text-white py-12 w-lg xl:flex items-center justify-center w-screen px-8">
            <blockquote className="text-center">
              <p className="text-5xl antialiased tracking-tighter lg:leading-tight md:text-8xl font-semibold mb-6 text-left">
                “
              </p>
              <p className="text-5xl antialiased tracking-tighter lg:leading-tight md:text-6xl text-white font-semibold max-w-screen-md mx-auto">
                How might we help travellers narrow down their choices when
                planning a vacation?
              </p>
              <p className="text-6xl antialiased tracking-tighter lg:leading-tight md:text-8xl font-semibold text-right">
                ”
              </p>
            </blockquote>
          </section>
          {/* What we know Section */}
          <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold"
                id="overview"
              >
                What we know
              </h1>
              <div className="max-w-screen-lg">
                <p className="text-lg mb-4">
                  We started by looking at previous research data to validate
                  our assumptions and made some key discoveries:
                </p>
                <Image
                  src="./images/explore/stats.png"
                  alt="cover"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="w-full animate__animated animate__fadeIn"
                />
              </div>
            </div>
          </section>
          {/* State-of-art Section */}
          <section className="bg-white py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-16">
              <h1
                className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold"
                id="overview"
              >
                Today's search experience
              </h1>
              <Image
                src="./images/explore/currentUx.png"
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
                className="max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-primary font-semibold"
                id="overview"
              >
                A typical user journey is... frustrating
              </h1>
            </div>
            <div className="max-w-screen-lg">
              <Image
                src="./images/explore/uxnow.png"
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
                className="max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-primary font-semibold"
                id="overview"
              >
                An ideal user journey is... awesome
              </h1>
            </div>
            <div className="max-w-screen-lg">
              <Image
                src="./images/explore/uxideal.png"
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
            <div className="text-5xl antialiased tracking-tighter lg:leading-tight md:text-6xl text-white text-center font-semibold max-w-screen-md mx-auto py-32">
              We want to help flexible travellers make confident decisions about
              <span className="text-tertiary"> where</span> to go and{' '}
              <span className="text-tertiary"> when</span> to go by offering
              rich and inspiring experiences on Search
            </div>
          </section>
          <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold"
                id="overview"
              >
                Meet Naomi
              </h1>
              <div className="max-w-screen-lg">
                <p className="text-lg mb-4">
                  Naomi is a mother and a travel enthusiast, who lives in Zürich
                  and is interested in booking a weekend getaway somewhere in
                  Europe with her family.
                </p>
                <div className="flex justify-center items-center">
                  <Image
                    src="./images/explore/naomi.jpeg"
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
                className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-primary font-semibold"
                id="overview"
              >
                Naomi's exploration journey
              </h1>
            </div>
            <div className="max-w-screen-xl">
              <Image
                src="./images/explore/tripExploration.png"
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
                className="max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-teal font-semibold"
                id="overview"
              >
                I. Get Inspired
              </h1>
            </div>
            <div className="max-w-screen-lg">
              <Image
                src="./images/explore/getInspired.png"
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
                <p className="text-lg mb-12">
                  According to a recent survey of US travelers, “exploring” is
                  the most enjoyable part of the journey.
                </p>
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  How?
                </h3>
                <p className="text-lg mb-12">
                  By creating a one stop shop that is lightweight, fun and
                  informative, we can make more delightful experiences and
                  increase the overall funnel.
                </p>
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  Back to Naomi's story
                </h3>
                <p className="text-lg mb-4">
                  Naomi doesn't have a solid idea for trip destinations, so she
                  starts her search by typing a broad query: “weekend getaway”
                  to get started in her journey.
                </p>
                <p className="text-lg mb-8">
                  First she is drawn to Grindelwald as it seems relaxing. After
                  a quick peek, she thinks that it may not be kid-friendly and
                  remembers seeing some family friendly places before.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="./images/explore/firstscreen-grindelwald.gif"
                    alt="cover"
                    width={320}
                    height={560}
                    layout="responsive"
                    className="max-w-xs border-4 mb-12 border-black rounded-32px animate__animated animate__fadeIn"
                  />
                </div>
                <p className="text-lg mb-8">
                  She wants to check the map as she needs to make sure the
                  travel time is manageable for the kids. She then discovers
                  that London would be an affordable option. She wants to learn
                  more.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="./images/explore/firstscreen-selected.gif"
                    alt="cover"
                    width={320}
                    height={560}
                    layout="responsive"
                    className="max-w-xs border-4 mb-12 border-black rounded-32px animate__animated animate__fadeIn"
                  />
                </div>
                <p className="text-lg mb-8">
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
                className="max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-purple font-semibold"
                id="overview"
              >
                II. Look into alternatives
              </h1>
            </div>
            <div className="max-w-screen-lg">
              <Image
                src="./images/explore/flights.png"
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
                <p className="text-lg mb-12">
                  1/3 of users who have a destination in mind are still
                  exploring travel ideas.
                </p>
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  How?
                </h3>
                <p className="text-lg mb-12">
                  Offer alternative suggestions based on user's intent.
                </p>
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  Back to Naomi's story
                </h3>
                <p className="text-lg mb-4">
                  "London seems to be a nice choice!" Naomi starts to check the
                  flight details by searching “flights to London”. However,
                  she's also wondering: “are there other cheaper destinations?”,
                  “am I missing out anything?”
                </p>
                <div className="flex justify-center">
                  <Image
                    src="./images/explore/secondscreen-flights.gif"
                    alt="cover"
                    width={320}
                    height={560}
                    layout="responsive"
                    className="max-w-xs border-4 mb-12 border-black rounded-32px animate__animated animate__fadeIn"
                  />
                </div>
                <p className="text-lg mb-8">
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
                src="./images/explore/rediscover.png"
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
                <p className="text-lg mb-12">
                  The average length of a successful travel journey in Search is
                  34 days.
                </p>
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  How?
                </h3>
                <p className="text-lg mb-12">
                  Intelligently curate Search history to provide users with a
                  personalized and up-to-date Search experience, making it easy
                  to resume their search and find the information they need.
                </p>
                <h3 className="font-semibold uppercase text-gray-400 text-sm mb-4">
                  Back to Naomi's story
                </h3>
                <p className="text-lg mb-4">
                  Naomi considers a few potential destinations, but hasn’t made
                  up her mind yet. She comes back to Search and types one of
                  places in her mind, “London”; the search history page shows
                  information about London, which she has searched for before
                </p>
                <div className="flex justify-center">
                  <Image
                    src="./images/explore/lastscreen.gif"
                    alt="cover"
                    width={320}
                    height={560}
                    layout="responsive"
                    className="max-w-xs border-4 mb-12 border-black rounded-32px animate__animated animate__fadeIn"
                  />
                </div>
                <p className="text-lg mb-8">
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
                <p className="text-lg mb-16">
                  We divided the customer journey in three main stages and
                  proposed solutions for each aspect of the trip planning.
                </p>
                <div className="mb-8">
                  <p className="text-xl lg:text-2xl mb-4 font-semibold">
                    I. Get inspired (cross-vertical journey)
                  </p>
                  <p className="text-lg mb-4">
                    Offer snackable content across diverse verticals (hotels,
                    food, things to do etc.) to inspire users where to go.
                  </p>
                </div>
                <div className="mb-8">
                  <p className="text-xl lg:text-2xl mb-4 font-semibold">
                    II. Look into alternatives (sideway navigation)
                  </p>
                  <p className="text-lg mb-4">
                    Provide compelling multi-format content streams for
                    suggestions and facilitate user comparisons.
                  </p>
                </div>
                <div className="mb-8">
                  <p className="text-xl lg:text-2xl mb-4 font-semibold">
                    III. Rediscover the journey (multi-session)
                  </p>
                  <p className="text-lg mb-4">
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
                <p className="text-lg mb-16">
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
                  <p className="text-lg mb-4">
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
