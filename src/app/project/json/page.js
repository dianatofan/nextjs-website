'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import ProtectedRoute from '@/components/ProtectedRoute';
import 'animate.css';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';
import Tldr from '@/components/Tldr';
import { metropolis, nauryz } from '@/app/utils/local-font';
import MethodsComparison from '@/app/project/json/methods-comparison';
import ImageCompare from 'image-compare-viewer';

const labels = [
  { text: 'Google' },
  { text: '3 Months' },
  { text: 'Mobile' },
  { text: 'UX Engineer' },
];

export default function Page() {
  useEffect(() => {
    const viewers = document.querySelectorAll('.image-compare');
    console.log('viewers', viewers);
    viewers?.forEach((element) => {
      let view = new ImageCompare(element).mount();
    });
  }, []);

  const tldrData = {
    title: "JSON Editor UI",
    problem:
      "Release managers had no safe way to edit JSON game configs. Even minor changes required developers, causing delayed launches, broken events, and lost revenue while draining engineering time.",
    research:
      "The pain was well known across the company. Instead of formal user research, I ran a technical exploration: comparing custom-built UIs vs. schema-driven approaches. As a frontend developer, I identified the most suitable npm library (react-jsonschema-form) and designed a custom wrapper UI layer on top—balancing schema flexibility with usability.",
    solution:
      "I built a scalable, schema-driven JSON Editor that simplified complex nested configs with expand/collapse navigation and focused editing; translated technical validation errors into plain language; offered multiple view modes and flexible input types (toggles, selectors, pickers, dropdowns); and empowered release managers to make instant changes without developer intervention.",
    metrics: [
      { value: "0", label: "broken live events post-launch" },
      { value: "80%", label: "faster content updates" },
      { value: "~20%", label: "reduction in developer support work" },
    ],
  };

  
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
          <section className="flex flex-col items-start justify-between w-screen max-w-screen-xl">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center">
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
            </div>
            <Tldr {...tldrData} />
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
                {/*<p className={`text-lg mb-4 ${metropolis.className}`}>*/}
                {/*  Most of the live content in a game—sales events, rewards,*/}
                {/*  pricing, and timing—is stored in JSON files. Traditionally,*/}
                {/*  only developers could edit these files. A JSON Editor brings*/}
                {/*  this data into a user-friendly interface, so non-technical*/}
                {/*  release managers can safely make changes without touching raw*/}
                {/*  code.*/}
                {/*</p>*/}
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
              {/*<p className={`text-lg mt-4 mb-4 ${metropolis.className}`}>*/}
              {/*  including limited-time sale events👇*/}
              {/*</p>*/}
              <Image
                src="/images/json/jsonInAGame.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 animate__animated animate__fadeIn"
              />
              {/*<p className={`text-lg mt-4 mb-4 ${metropolis.className}`}>*/}
              {/*  hence the need for a safe way of managing data without risking*/}
              {/*  stability*/}
              {/*</p>*/}
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
                  Technical exploration
                </h3>
                <p className={`text-lg mb-6 ${metropolis.className}`}>
                  I didn’t start this project with formal user research—the pain
                  was already well-known across the company, voiced daily in
                  Slack and in conversations with release managers. As an
                  engineering-minded designer, I focused instead on the
                  solution. I began by investigating how to transform raw JSON
                  files into readable, editable content in a web browser. My
                  goal was to design an interface that made configuration data
                  approachable for non-technical users, while still respecting
                  the complexity of the underlying game systems.
                </p>
                <br />
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Options considered
                </h3>
                <MethodsComparison />
                <br />
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Decision
                </h3>
                <p className={`text-lg mb-6 ${metropolis.className}`}>
                  I chose the schema-driven approach using the&nbsp;
                  <code className="text-tertiary">
                    react-jsonschema-form
                  </code>{' '}
                  library. This gave us a scalable foundation while allowing me
                  to design a custom interface layer to improve usability for
                  release managers.
                </p>
                <br />
                <h3
                  className={`font-semibold uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
                >
                  Why it was hard
                </h3>
                <p className={`text-lg mb-6 ${metropolis.className}`}>
                  Designing the editor wasn’t straightforward. The main
                  challenges fell into four areas:
                </p>
                <ul className="mt-2 p-8 border-l-2 border-l-gray-300 bg-gray-100">
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Nested complexity&nbsp;
                    </span>
                    <br />
                    Deeply nested arrays made configs unreadable for
                    non-technical users.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Poor error handling&nbsp;
                    </span>
                    <br />
                    Validation showed unclear technical messages, adding risk.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Rigid layouts&nbsp;
                    </span>
                    <br />
                    The default form generator was built for developers, not
                    release managers.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Balancing power & simplicity&nbsp;
                    </span>
                    <br />
                    Needed to keep schema flexibility while making the tool safe
                    and intuitive.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="bg-white flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen lg:px-64">
              <div className="flex flex-wrap justify-center">
                <Image
                  src="/images/json/jsonSchema.png"
                  alt="cover"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="w-full mt-12 animate__animated animate__fadeIn"
                />
                <p className="text-left text-gray-500 mt-4 text-sm">
                  react-json-schema-form default UI
                </p>
              </div>
            </div>
          </section>
          <br />
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
                Keep the power of a schema-driven approach while designing a{' '}
                <span className="text-tertiary">custom UI layer</span> on top of
                the 3rd party
              </p>
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
                The Custom UI Layer
              </h1>
              <Image
                src="/images/json/customUILayer.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          <section className="bg-orange-50 py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className={`max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-tertiary font-semibold ${metropolis.className}`}
                id="overview"
              >
                1. Expand/collapse functionality
              </h1>
              <p className={`text-lg mb-6 ${metropolis.className}`}>
                for nested items, letting release managers drill into details
                without losing context
              </p>
            </div>
            <div className="w-screen px-8 lg:px-32">
              <Image
                src="/images/json/expandCollapse.gif"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          <section className="bg-orange-50 py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className={`max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-tertiary font-semibold ${metropolis.className}`}
                id="overview"
              >
                2. Four switchable views
              </h1>
              <p className={`text-lg mb-6 ${metropolis.className}`}>
                so users could choose the best way to work
              </p>
            </div>
            <div className="w-screen px-8 lg:px-32">
              <Image
                src="/images/json/viewingModes.gif"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          <section className="bg-orange-50 py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className={`max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-tertiary font-semibold ${metropolis.className}`}
                id="overview"
              >
                3. Clear validation errors
              </h1>
              <p className={`text-lg mb-6 ${metropolis.className}`}>
                that explain issues in plain language
              </p>
            </div>
            <div className="w-screen px-8 lg:px-32">
              <Image
                src="/images/json/errors.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 animate__animated animate__fadeIn"
              />
            </div>
          </section>
          <section className="bg-orange-50 py-12 flex flex-col items-center w-screen justify-center px-8">
            <div className="w-screen p-8 lg:px-32 lg:py-8">
              <h1
                className={`max-w-screen-xl text-xl antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-3xl text-tertiary font-semibold ${metropolis.className}`}
                id="overview"
              >
                4. One child at a time display
              </h1>
              <p className={`text-lg mb-6 ${metropolis.className}`}>
                showing only the relevant section of the JSON instead of
                overwhelming users with the full object
              </p>
            </div>
            <div className="w-screen px-8 lg:px-32">
              <Image
                src="/images/json/oneChild.gif"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 animate__animated animate__fadeIn"
              />
            </div>
          </section>

          <section className="bg-gray-100 py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                id="overview"
              >
                Scalability
              </h1>
              <div className="max-w-screen-lg">
                <p className={`text-lg mb-12 ${metropolis.className}`}>
                  The JSON Editor was designed for scalability, capable of
                  handling a wide variety of game configs and input types. Its
                  flexible UI supports multiple layouts and a range of controls,
                  including toggle buttons, item selectors, color pickers,
                  numerical inputs, dropdowns, and more. This allows release
                  managers to interact with complex, nested JSON data in the
                  most intuitive way for each field, while the underlying
                  schema-driven system ensures validation and consistency across
                  different game systems. The editor can easily adapt to new
                  config types, making it a reusable tool that scales as the
                  company’s games and requirements grow.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/json/scalable.png"
                    alt="cover"
                    width={320}
                    height={560}
                    layout="responsive"
                    className=" animate__animated animate__fadeIn"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
            <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
              <h1
                className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold"
                id="overview"
              >
                Outcome
              </h1>
              <div className="max-w-screen-lg">
                <p className={`text-lg mb-16 ${metropolis.className}`}>
                  The JSON Editor delivered measurable impact across the
                  company: it enabled faster live updates, ensuring events
                  launched on time, and reduced risk by minimizing broken
                  configs and creating safer workflows. By freeing engineers
                  from repetitive support tasks, it improved developer
                  efficiency, while more reliable events and promotions boosted
                  revenue.
                </p>
                <div className="mb-8">
                  <p className="text-xl lg:text-2xl mb-4 font-semibold">
                    Strategic opportunity
                  </p>
                  <p className={`text-lg mb-4 ${metropolis.className}`}>
                    Beyond internal benefits, the company positioned to sell the
                    editor as a product to other studios, creating a new revenue
                    stream on top of games.
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
                  Designing the JSON Editor was uniquely challenging because it
                  was an abstract task with no clear precedent or visual
                  inspiration. Unlike typical product interfaces, there were no
                  existing patterns to follow—every decision had to balance
                  flexibility, safety, and usability for non-technical users. I
                  had to translate complex, nested JSON data into an intuitive
                  interface from scratch, inventing workflows, interaction
                  patterns, and visual structures as I went. This project pushed
                  me to combine technical understanding with design creativity
                  in a highly experimental way.
                </p>
                <div className="mb-8">
                  <p className="text-lg lg:text-xl mb-4 font-semibold">
                    Next steps
                  </p>
                  <p className={`text-lg mb-4 ${metropolis.className}`}>
                    Next, I want to focus on refining the editor so it can be
                    positioned as a product for other studios. This includes
                    running external user tests to ensure it’s intuitive for
                    teams unfamiliar with our games, enhancing validation and
                    error handling, and adding features that make it adaptable
                    across different game systems. My goal is to make the tool
                    robust, scalable, and polished enough to create a viable new
                    revenue stream beyond our internal use.
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
