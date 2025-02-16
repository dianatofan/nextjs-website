'use client';

import React from 'react';
import Image from 'next/image';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';
import { User, Users } from 'react-feather';
import 'animate.css';

import { metropolis } from '@/app/utils/local-font';

export default function Page() {
  return (
    <Layout isProjectPage>
      <Image
        src="../images/time-series/timeSeriesHeaderCrop.png"
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
              Visual Exploration of Time Series
            </h1>
            <h3 className={`text-lg text-gray-500 ${metropolis.className}`}>
              Medical dashboard for doctors and patients
            </h3>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-12 px-8 pb-8 lg:p-0 lg:pb-0">
            <div>
              <div
                className={`font-semibold uppercase text-gray-400 text-sm ${metropolis.className}`}
              >
                Duration
              </div>
              <div className={metropolis.className}>6 months</div>
            </div>
            <div>
              <div
                className={`font-semibold uppercase text-gray-400 text-sm ${metropolis.className}`}
              >
                Type
              </div>
              <div className={metropolis.className}>Personal project</div>
            </div>
            <div>
              <div
                className={`font-semibold uppercase text-gray-400 text-sm ${metropolis.className}`}
              >
                Role
              </div>
              <div className={metropolis.className}>
                UX/UI designer & developer
              </div>
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
                Healthcare professionals need an easy-to-use tool for analyzing
                their patients' data.{' '}
              </h1>
              <p
                className={`text-lg max-w-75ch mb-4 mt-4 ${metropolis.className}`}
              >
                Sharing self-tracked data with others to seek treatment or
                solutions to a problem led to an ever growing number of
                healthcare professionals who must rely on time-dependent
                visualizations to help their patients. Although they may be
                knowledgeable in their field, not all of them are computer
                experts, hence they need an easy-to-use tool in order to analyze
                and extract relevant information from the data under
                investigation.
              </p>
              <h3
                className={`font-semibold uppercase text-gray-400 text-sm mt-16 mb-4 ${metropolis.className}`}
              >
                Goal
              </h3>
              <h1
                className={`text-4xl max-w-75ch antialiased tracking-tighter lg:leading-tight md:text-5xl text-primary font-semibold ${metropolis.className}`}
              >
                Deliver a web application capable of generating time series
                visualizations rich in information and easy to interact with.
              </h1>
              <p className={`text-lg mt-4 mb-4 ${metropolis.className}`}>
                By using quantified-self data collected from real subjects, the
                goal of the project is to help newcomers discover meaningful
                patterns in their datasets, with minimum effort and maximum
                results.
              </p>
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
              How might we extract meaningful patterns from temporal data with
              minimum effort and maximum results?
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
              Analysis
            </h1>
            <div className="max-w-screen-lg">
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                Target users
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                There are two groups of people who usually engage in a
                self-monitoring process:
              </p>
              <div className="container mx-auto p-4  grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                  <User width={80} height={80} />
                  <h2
                    className={`${metropolis.className} text-xl font-semibold mb-2`}
                  >
                    Private Self-Trackers
                  </h2>
                  <p
                    className={`${metropolis.className} text-base text-gray-600`}
                  >
                    Individuals who voluntarily track for personal reasons.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users width={80} height={80} />
                  <h2
                    className={`${metropolis.className} text-xl font-semibold mb-2`}
                  >
                    Pressured Self-Trackers
                  </h2>
                  <p
                    className={`${metropolis.className} text-base text-gray-600`}
                  >
                    Those who engage in self-tracking due to social, workplace,
                    or medical pressure.
                  </p>
                </div>
              </div>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                This tool focuses on the second category, hence it involves many
                different actors (e.g. patient and medical practitioner) and
                aims to improve the communication between them through visual
                aids.
              </p>
              <p
                className={`text-lg mb-4 mt-16 font-semibold ${metropolis.className}`}
              >
                Use-case scenario
              </p>
              <p className={`text-lg max-w-75ch mb-4 ${metropolis.className}`}>
                This application primarily focuses on solving problems from the
                healthcare industry and helps medical entities diagnose and
                treat their patients. For instance it could be used by a PTSD
                patient who is regularly attending therapeutic sessions. Each
                time he encounters outbursts, he records the episodes using a
                one-button device and shares the collected data with his
                therapist for a better diagnosis and treatment.
              </p>
              <div className="w-full">
                <Image
                  src="../images/time-series/useCaseScenario.png"
                  alt="cover"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="w-full animate__animated animate__fadeIn"
                />
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
              Design
            </h1>
            <div className="max-w-screen-lg">
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                System overview
              </p>
              <p className={`text-lg max-w-75ch mb-4 ${metropolis.className}`}>
                Each dataset belongs to a real person who - at some point -
                tracked specific events in his/her life. The data was recorded
                with the help of a one-button device that when pressed, stored
                the corresponding timestamp in a CSV file.
              </p>
              <div className="w-full">
                <Image
                  src="../images/time-series/system.png"
                  alt="cover"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="w-full animate__animated animate__fadeIn"
                />
              </div>
              <p className={`text-lg max-w-75ch  mb-4 ${metropolis.className}`}>
                A timestamp is a sequence of characters encoding time-oriented
                information. In this project, all timestamps have a common
                structure: <code>YYYY-MM-DDTHH:mm:ss</code>, where{' '}
                <code>YYYY-MM-DD</code> represents the date and{' '}
                <code>HH:mm:ss </code>is the hour when the observation occurred.
              </p>
              <p
                className={`text-2xl max-w-75ch mb-4 font-semibold ${metropolis.className}`}
              >
                By relying on data visualization techniques, the main goal of
                the system is to help users quickly identify patterns, reflect
                on them and gain useful insights.
              </p>
              <p
                className={`text-lg mb-4 mt-16 font-semibold ${metropolis.className}`}
              >
                Use-case scenario
              </p>
              <p className={`text-lg max-w-75ch mb-4 ${metropolis.className}`}>
                This application primarily focuses on solving problems from the
                healthcare industry and helps medical entities diagnose and
                treat their patients. For instance it could be used by a PTSD
                patient who is regularly attending therapeutic sessions. Each
                time he encounters outbursts, he records the episodes using a
                one-button device and shares the collected data with his
                therapist for a better diagnosis and treatment.
              </p>
              <div className="w-full">
                <Image
                  src="../images/time-series/useCaseScenario.png"
                  alt="cover"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="w-full animate__animated animate__fadeIn"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-24 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              App overview
            </h1>
            <div className="max-w-screen-lg">
              <div className="w-full">
                <Image
                  src="../images/time-series/app.png"
                  alt="cover"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="w-full rounded-3xl border-4 border-black animate__animated animate__fadeIn"
                />
              </div>
              <p className={`text-lg mb-4 mt-16 ${metropolis.className}`}>
                This time-series visualization is the result of 3 major
                components strongly tied together:
              </p>
              <ul className="mt-2 p-8 border-l-2 border-l-gray-300 bg-gray-200">
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg  max-w-75ch font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; Calendar heatmap&nbsp;
                  </span>
                  - The central component on which this prototype is based,
                  showing the concentration of events over the year. The
                  weekdays, week numbers, individual days and month names are
                  clickable and will update the bar chart below with
                  corresponding data. There is also a hidden shortcut for
                  allowing users to compare 2 elements between each other by
                  clicking on the first one and shift-clicking the second.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; Bar chart&nbsp;
                  </span>
                  - It shows the time-of-day variation of the self-tracked
                  events. When any of the 3 checkboxes is checked, an area chart
                  is rendered on top to compare the selected day to other days
                  in the same week, month or weekday. The more observations
                  registered, the darker the color of each bar.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; Radial chart&nbsp;
                  </span>
                  - It shows the most impactful weekdays from the entire dataset
                  and supports mouse-over effects when inspecting each circular
                  bar - it will highlight the corresponding weekday in the
                  calendar heatmap.
                </li>
              </ul>
            </div>
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
                Setting the stage
              </p>
              <p className={`text-lg max-w-75ch  mb-4 ${metropolis.className}`}>
                The usability test was carried out on four persons and two
                datasets were used. In the first one, 5,743 observations were
                recorded, whereas the second presented 647 timestamps. Both
                datasets belong to real persons who - at some point - tracked
                specific events in their lives using the one-button device.
              </p>
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                The tasks
              </p>
              <p className={`text-lg max-w-75ch mb-4 ${metropolis.className}`}>
                The survey consisted of 10 questions which covered most of the
                functionalities implemented in the visualization. The first half
                of the questions was based on the first dataset and the rest on
                the second. There were plenty of tasks to perform with various
                levels of difficulty. For finding out what the subjects were
                thinking while answering the questions, they were asked to think
                out loud and explain their actions.
              </p>
              <p className={`text-lg max-w-75ch  mb-4 ${metropolis.className}`}>
                On the whole, the users enjoyed playing with the visualization
                and completed the survey without experiencing major
                difficulties.
              </p>
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                Analysis of the results
              </p>
              <p className={`text-lg max-w-75ch  mb-4 ${metropolis.className}`}>
                Overall, the calendar heatmap was intuitive and posed no major
                problems. In terms of the bar chart, it was easy to interpret
                the meaning of each bar, and the subjects enjoyed the animation
                that showed up when switching from one day to another. The
                radial chart served its purpose too.
              </p>
              <p
                className={`text-3xl max-w-75ch  lg:text-4xl font-semibold mb-4 ${metropolis.className}`}
              >
                The most challenges were faced during the interaction with the
                area graph, plotted over the bar chart.
              </p>
              <p className={`text-lg max-w-75ch  mb-4 ${metropolis.className}`}>
                Although the participants were informed what kind of values it
                displayed, they were reluctant to use it during the evaluation
                and would rather rely on the heatmap or bar chart to find the
                correct answers.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 pt-12 pb-16 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className="max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold"
              id="overview"
            >
              Lessons learned
            </h1>
            <div className="max-w-screen-lg">
              <p className={`text-lg max-w-75ch  mb-4 ${metropolis.className}`}>
                Reflecting on the survey results, it can be deduced that even
                though the time-series visualization looks simple at first
                sight, it is actually not so easy to decipher the meaning of all
                values being displayed. The most important lesson that I learned
                was that
              </p>
              <p
                className={`text-3xl lg:text-4xl font-semibold mb-4 ${metropolis.className}`}
              >
                The novice user is reluctant to using overlapping plots and
                would prefer two simple charts instead of a more advanced one.
              </p>
              <p className={`text-lg mb-16 ${metropolis.className}`}>
                Besides, hidden shortcuts often get overlooked and the users
                don't benefit fully from the app. Besides, hidden shortcuts
                often get overlooked and the users don't benefit fully from the
                app.
              </p>
              <a
                href="https://dianatofan.github.io/Time-Series-Visualization/"
                className={`text-xl lg:text-2xl font-semibold text-tertiary hover:underline mb-4 ${metropolis.className}`}
              >
                Open website
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
