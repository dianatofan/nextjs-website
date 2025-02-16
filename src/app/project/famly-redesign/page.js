'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';
import { metropolis } from '@/app/utils/local-font';
import ImageCompare from 'image-compare-viewer';

export default function Page() {
  useEffect(() => {
    const viewers = document.querySelectorAll('.image-compare');

    viewers?.forEach((element) => {
      let view = new ImageCompare(element).mount();
    });
  }, []);

  return (
    <Layout>
      <Image
        src="../images/famly/cover.png"
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
              Famly's Redesign
            </h1>
            <h3 className={`text-lg text-gray-500 ${metropolis.className}`}>
              Shaping a design system for an already existing product
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
                Background
              </h3>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                Famly is a childcare management platform designed to streamline
                communication between educators and parents while handling key
                operational tasks such as scheduling, attendance, and billing.
                Founded in 2013, the company initially prioritized engineering
                over design, leading to an inconsistent and fragmented UI as the
                platform scaled. Without a dedicated design team in the early
                years, the product grew organically, accumulating design debt
                that made maintenance cumbersome and user experience suboptimal.
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                When I joined Famly, eight years post-foundation, it was clear
                that the absence of a design system was a bottleneck—causing
                inefficiencies in development, inconsistencies in the user
                experience, and friction between design and engineering teams.
                Leveraging my UX expertise and frontend development knowledge, I
                helped establish a scalable, robust, and maintainable design
                system from the ground up.
              </p>
              <h3
                className={`font-semibold mt-16 uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
              >
                Problem
              </h3>
              <h1
                className={`text-4xl antialiased tracking-tighter lg:leading-tight md:text-5xl text-primary font-semibold ${metropolis.className}`}
              >
                Lack of a unified design system
              </h1>
              <div className={`text-lg mt-8 mb-4 ${metropolis.className}`}>
                The lack of a unified design system resulted in:
                <ul className="mt-2 p-8 border-l-2 border-l-gray-300 bg-gray-200">
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; UI inconsistencies&nbsp;
                    </span>
                    across the platform, negatively impacting brand perception
                    and usability.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; A
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &nbsp;fragmented development workflow&nbsp;
                    </span>
                    where identical components were implemented differently
                    across various parts of the app.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Inefficient collaboration&nbsp;
                    </span>
                    between designers and developers due to the absence of a
                    shared design language.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Increased technical debt&nbsp;
                    </span>
                    making product iteration slow and resource-heavy.
                  </li>
                </ul>
              </div>
              <h3
                className={`font-semibold mt-16 uppercase text-gray-400 text-sm mb-4 ${metropolis.className}`}
              >
                Goal
              </h3>
              <h1
                className={`text-4xl antialiased tracking-tighter lg:leading-tight md:text-5xl text-primary font-semibold ${metropolis.className}`}
              >
                Create a single source of truth for both designers and
                developers.
              </h1>
              <div className={`text-lg mt-8 mb-4 ${metropolis.className}`}>
                This single source of truth would:
                <ul className="mt-2 p-8 border-l-2 border-l-gray-300 bg-gray-200">
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Standardize UI and UX components across the platform.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Improve developer efficiency by streamlining
                    implementation.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Foster seamless collaboration between
                    cross-functional teams.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Enhance the overall user experience through
                    consistency and usability improvements.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Establish a scalable system to support future product
                    growth.
                  </li>
                </ul>
              </div>
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
              How can we ensure consistency across the platform?
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
              Process
            </h1>
            <div className="max-w-screen-lg">
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                We drew inspiration from the Double Diamond framework to shape
                our approach, using its principles to inform our process while
                adapting it to our needs.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Part 1: Discovery
            </h1>
            <div className="max-w-screen-lg">
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                To understand the full scope of inconsistencies, I conducted an
                exhaustive UI audit, mapping out all existing components and
                design patterns. This revealed:
                <ul className="mt-4 px-8">
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Redundant and inconsistent component variations.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Mismatched color schemes, typography, and spacing
                    rules.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; A lack of accessibility considerations in existing
                    designs.
                  </li>
                </ul>
              </p>
              <div className={`text-lg mb-4 ${metropolis.className}`}>
                To validate our findings and prioritize focus areas, I
                facilitated interviews and workshops with frontend developers,
                product managers, and customer support teams. Key insights
                revealed that{' '}
                <span
                  className={`text-lg font-semibold ${metropolis.className} text-tertiary`}
                >
                  inefficiencies in UI implementation led to extended
                  development cycles
                </span>
                , while the lack of clear design guidelines created{' '}
                <span
                  className={`text-lg font-semibold  ${metropolis.className} text-tertiary`}
                >
                  unnecessary rework
                </span>
                .
              </div>
            </div>
          </div>
        </section>
        {/* State-of-art Section */}
        <section className="bg-white flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32">
            <Image
              src="../images/famly/phase1.png"
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
              Part 2: Definition
            </h1>
            <div className="max-w-screen-lg">
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                From our research, we defined a clear problem statement:
                <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 ">
                  <p
                    className={`${metropolis.className} text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white`}
                  >
                    We need a design system that standardizes UI and UX
                    components, optimizes development workflows, and enhances
                    overall product consistency.
                  </p>
                </blockquote>
                We established the core principles for our design system:
                <ul className="mt-4 px-8">
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Single Source of Truth&nbsp;
                    </span>
                    - Centralized documentation and assets.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Clarity&nbsp;
                    </span>
                    - Improved communication between designers and developers.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Efficiency&nbsp;
                    </span>
                    - Faster development cycles and reduced technical debt.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Consistency&nbsp;
                    </span>
                    - A cohesive brand and user experience.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    <span
                      className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                    >
                      &rarr; Scalability&nbsp;
                    </span>
                    - Designed with the future in mind.
                  </li>
                </ul>
              </p>
              <div className={`text-lg mb-4 ${metropolis.className}`}>
                To validate our findings and prioritize focus areas, I
                facilitated interviews and workshops with frontend developers,
                product managers, and customer support teams. Key insights
                revealed that{' '}
                <span
                  className={`text-lg font-semibold ${metropolis.className} text-tertiary`}
                >
                  inefficiencies in UI implementation led to extended
                  development cycles
                </span>
                , while the lack of clear design guidelines created{' '}
                <span
                  className={`text-lg font-semibold  ${metropolis.className} text-tertiary`}
                >
                  unnecessary rework
                </span>
                .
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
              Part 3: Development
            </h1>
            <div className="max-w-screen-lg">
              <span className={`text-lg mb-4 ${metropolis.className}`}>
                After evaluating various frameworks, we selected Figma for
                design components, with React, Material Design, and Storybook
                for implementation and documentation. To lay a strong
                foundation, we first introduced{' '}
                <span className={`${metropolis.className} font-semibold`}>
                  design tokens
                </span>{' '}
                to ensure consistent styling across the platform. This included:
                <ul className="mt-4 px-8">
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; A refined color palette aligning with brand identity.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Updated typography for improved readability and
                    hierarchy.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Standardized spacing, grid systems, and accessibility
                    enhancements.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; A comprehensive icon set and refreshed UI components.
                  </li>
                </ul>
                Each component was meticulously designed, prototyped, and tested
                before implementation to ensure usability and scalability.
              </span>
            </div>
          </div>
        </section>
        <section className="bg-white flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32">
            <Image
              src="../images/famly/styleguide1.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full animate__animated animate__fadeIn"
            />
            <Image
              src="../images/famly/styleguide2.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full animate__animated animate__fadeIn"
            />
            <Image
              src="../images/famly/styleguide3.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full animate__animated animate__fadeIn"
            />
            <Image
              src="../images/famly/components1.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full animate__animated animate__fadeIn"
            />
            <Image
              src="../images/famly/components2.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full animate__animated animate__fadeIn"
            />
          </div>
        </section>
        <section className="bg-gray-100 py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Part 4: Delivery and Adoption{' '}
            </h1>
            <div className="max-w-screen-lg">
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                <span
                  className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                >
                  Implementation
                </span>
                <p className={`text-lg mb-8 mt-4 ${metropolis.className}`}>
                  Collaborating closely with developers, we systematically
                  replaced outdated UI components with the new standardized
                  elements, ensuring minimal disruption to existing workflows.
                </p>
                <span
                  className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                >
                  Training and Documentation
                </span>
                <p className={`text-lg mb-4 mt-4 ${metropolis.className}`}>
                  To drive adoption, we initiated:
                </p>
                <ul className="mt-4 px-8">
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; Weekly company-wide presentations to introduce new
                    components and updates.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; A centralized design system documentation hub with
                    detailed guidelines, usage examples, and accessibility
                    considerations.
                  </li>
                  <li className={`text-lg mb-4 ${metropolis.className}`}>
                    &rarr; A versioning system to manage updates without
                    disrupting development timelines.
                  </li>
                  <li className={`text-lg mb-8 ${metropolis.className}`}>
                    &rarr; Email newsletters to keep all stakeholders informed
                    about major changes.
                  </li>
                </ul>
              </p>
              <span
                className={`text-lg font-semibold mb-4 ${metropolis.className}`}
              >
                Measuring Impact
              </span>
              <p className={`text-lg mb-4 mt-4 ${metropolis.className}`}>
                To gauge the effectiveness of the design system, we tracked key
                performance indicators (KPIs), including:
              </p>
              <ul className="mt-4 px-8">
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; Development speed&nbsp;
                  </span>
                  - Measured by tracking the reduction in time spent
                  implementing UI components.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; Bug reduction&nbsp;
                  </span>
                  - Fewer design-related inconsistencies reported post-launch.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; Designer-developer collaboration&nbsp;
                  </span>
                  - Measured through qualitative feedback and improved alignment
                  in cross-functional teams.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; User experience&nbsp;
                  </span>
                  - Positive feedback from customers regarding UI improvements.
                </li>
              </ul>
              <div className={`text-lg mb-4 ${metropolis.className}`}>
                To validate our findings and prioritize focus areas, I
                facilitated interviews and workshops with frontend developers,
                product managers, and customer support teams. Key insights
                revealed that{' '}
                <span
                  className={`text-lg font-semibold ${metropolis.className} text-tertiary`}
                >
                  inefficiencies in UI implementation led to extended
                  development cycles
                </span>
                , while the lack of clear design guidelines created{' '}
                <span
                  className={`text-lg font-semibold  ${metropolis.className} text-tertiary`}
                >
                  unnecessary rework
                </span>
                .
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
              {' '}
              Results and Impact{' '}
            </h1>
            <div className="max-w-screen-lg">
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                The implementation of Famly’s design system yielded significant
                improvements:
              </p>
              <ul className="mt-2 p-8 border-l-2 border-l-gray-300 bg-gray-100">
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; 35% reduction in UI-related development times&nbsp;
                  </span>
                  allowing engineers to focus on feature-building instead of
                  fixing inconsistencies.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr; A
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &nbsp;noticeable decrease in support calls&nbsp;
                  </span>
                  and reduced need for user assistance.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  <span
                    className={`text-lg font-semibold mb-4 ${metropolis.className}`}
                  >
                    &rarr; Increased design-to-development alignment&nbsp;
                  </span>
                  leading to smoother handoffs and fewer implementation
                  discrepancies.
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
              Before/After
            </h1>
          </div>
        </section>
        <section className="bg-white flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen lg:px-64">
            <div className="flex flex-wrap justify-center">
              <div
                className="w-full md:w-1/2 lg:w-1/2 max-w-xs mx-auto image-compare"
                id="image-compare"
              >
                <img src="../images/famly/before1.png" alt="" />
                <img src="../images/famly/after1.png" alt="" />
              </div>
              <div
                className="w-full md:w-1/2 lg:w-1/2 max-w-xs mx-auto image-compare"
                id="image-compare"
              >
                <img src="../images/famly/before2.png" alt="" />
                <img src="../images/famly/after2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white flex items-center w-screen justify-center mt-16">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              UI in practice
            </h1>
          </div>
        </section>
        <section className="bg-white flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen lg:px-16">
            <div className="flex flex-wrap justify-center">
              <Image
                src="../images/famly/ui.png"
                alt="cover"
                width={1920}
                height={1080}
                layout="responsive"
                className="w-full mt-12 mb-12 animate__animated animate__fadeIn rounded-2xl"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="bg-gray-100 py-12 flex items-center w-screen justify-center px-8">
        <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
          <h1
            className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
            id="overview"
          >
            Next steps
          </h1>
          <div className="max-w-screen-lg">
            <h3
              className={`font-semibold text-primary text-lg mb-4 ${metropolis.className}`}
            >
              Maintaining and Evolving the System
            </h3>
            <p className={`text-lg mb-4 ${metropolis.className}`}>
              A design system is a living entity, requiring continuous iteration
              and refinement. While we successfully established a strong
              foundation, we recognized the ongoing need to:
            </p>
            <ul className="mt-4 px-8">
              <li className={`text-lg mb-4 ${metropolis.className}`}>
                &rarr; Expand the component library with new elements.
              </li>
              <li className={`text-lg mb-4 ${metropolis.className}`}>
                &rarr; Continuously gather feedback from users and developers to
                optimize usability.
              </li>
              <li className={`text-lg mb-4 ${metropolis.className}`}>
                &rarr; Refine accessibility standards to further enhance
                inclusivity.
              </li>
              <li className={`text-lg mb-4 ${metropolis.className}`}>
                &rarr; Explore automation tools to streamline component updates
                across the platform.
              </li>
            </ul>
            <h3
              className={`font-semibold text-primary text-lg mt-8 mb-4 ${metropolis.className}`}
            >
              Final Thoughts
            </h3>
            <p className={`text-lg mb-4 ${metropolis.className}`}>
              This initiative was more than just a visual refresh—it was a
              strategic shift in how Famly approached design and development. By
              integrating a structured and scalable design system, we
              transformed a fragmented UI into a cohesive, user-friendly
              experience that supports both current operations and future
              innovations.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
