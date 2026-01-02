'use client';
import Image from 'next/image';
import ProtectedRoute from '@/components/ProtectedRoute';
import 'animate.css';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';
import { metropolis, nauryz } from '@/app/utils/local-font';
import { BackgroundBlock } from '@/app/project/game-setup/background-block';
import React from 'react';
import ObservabilityGapBlock from '@/app/project/game-setup/observability-gap-block';
import AlternatingVideos from '@/app/project/game-setup/alternating-videos';
import { TradeoffsBlock } from '@/app/project/game-setup/tradeoffs-block';
import { ImpactBlock } from '@/app/project/game-setup/impact-cards';
import { PrinciplesGrid } from '@/app/project/game-setup/principles-grid';

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem statement' },
  { id: 'research', label: 'What we knew' },
  { id: 'current-ux', label: "Today's experience" },
  { id: 'goal', label: 'Goal' },
  { id: 'persona', label: 'Meet Naomi' },
  { id: 'journey', label: "Naomi's journey" },
  { id: 'get-inspired', label: 'I. Get Inspired' },
  { id: 'alternatives', label: 'II. Alternatives' },
  { id: 'rediscover', label: 'III. Rediscover' },
  { id: 'conclusion', label: 'Conclusion' },
];

export default function Page() {
  return (
    <ProtectedRoute>
      <Layout isProjectPage>
        {/*<ScrollProgressTOC items={tocItems} />*/}

        <div className="relative w-full h-[100vh]">
          <Image
            src="/images/canvas/game-canvas-cover.png"
            alt="cover"
            priority
            fill
            className="object-cover w-full h-full animate__animated animate__fadeIn"
          />
        </div>
        <div className="w-screen mt-8 items-center align-center animate__animated animate__fadeIn">
          <section className="w-screen max-w-screen-xl px-8 lg:px-0">
            <div className="flex flex-col w-full py-8 lg:py-12">
              {/* Title + subtitle */}
              <div className="max-w-4xl">
                <h1
                  className={`text-4xl md:text-5xl font-semibold tracking-tight text-primary ${metropolis.className}`}
                >
                  Game Setup Canvas Tool
                </h1>

                <p
                  className={`mt-3 text-base md:text-lg leading-relaxed text-gray-500 ${metropolis.className}`}
                >
                  Automating game setup to enable team independence and scale
                  releases
                </p>
              </div>

              {/* Divider */}
              <div className="mt-8 h-px w-full bg-gray-200" />

              {/* Meta info */}
              <div className="mt-8 flex flex-col gap-6 md:flex-row md:gap-14">
                <div className="flex-1">
                  <div
                    className={`text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 ${metropolis.className}`}
                  >
                    Role
                  </div>
                  <div
                    className={`mt-2 text-sm md:text-base text-gray-500 ${metropolis.className}`}
                  >
                    Lead Product Designer
                  </div>
                </div>

                <div className="flex-1">
                  <div
                    className={`text-xs font-semibold uppercase  tracking-[0.2em] text-gray-400 ${metropolis.className}`}
                  >
                    Team
                  </div>
                  <div
                    className={`mt-2 text-sm md:text-base  text-gray-500 ${metropolis.className}`}
                  >
                    Product Manager, Tech Lead (Core Team), 2 Backend Engineers,
                    1 Frontend Engineer
                  </div>
                </div>

                <div className="flex-1">
                  <div
                    className={`text-xs font-semibold uppercase  tracking-[0.2em] text-gray-400 ${metropolis.className}`}
                  >
                    Company
                  </div>
                  <div
                    className={`mt-2 text-sm md:text-base text-gray-500 ${metropolis.className}`}
                  >
                    Tactile Games
                  </div>
                </div>

                <div className="flex-1">
                  <div
                    className={`text-xs font-semibold uppercase  tracking-[0.2em] text-gray-400 ${metropolis.className}`}
                  >
                    Duration
                  </div>
                  <div
                    className={`mt-2 text-sm md:text-base text-gray-500 ${metropolis.className}`}
                  >
                    3 months
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="context"
            className="w-screen bg-gray-50 py-20 flex justify-center px-8"
          >
            <div className="w-full max-w-screen-xl">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-start">
                {/* Left rail label */}
                <div className="xl:col-span-3">
                  <h1
                    className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                  >
                    Context
                  </h1>
                </div>
                {/* Main content */}
                <BackgroundBlock metropolis={metropolis} />
              </div>
            </div>
          </section>
          <section className="bg-black text-white py-44 md:py-60 text-center  w-lg xl:flex flex-col items-center justify-center w-screen px-8 gap-3">
            <p
              className={`text-6xl antialiased tracking-tighter lg:leading-tight md:text-7xl text-white font-medium max-w-6xl mx-auto ${nauryz.className}`}
            >
              Goal
            </p>
            <p
              className={`text-5xl antialiased tracking-tighter lg:leading-tighter md:text-6xl text-white font-semibold max-w-5xl mx-auto ${metropolis.className}`}
            >
              Enable teams to{' '}
              <span className="text-tertiary">
                launch more games per quarter
              </span>{' '}
              through fast, safe, self-serve game setup.
            </p>
          </section>
          {/* What we know Section */}
          <section
            id="research"
            className="bg-white py-12 mt-4 flex flex-col items-center w-screen justify-center px-8"
          >
            <div className="w-full max-w-screen-xl">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-start">
                {/* Left rail label */}
                <div className="xl:col-span-3">
                  <h1
                    className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                  >
                    Discovery
                  </h1>
                </div>
                {/* Main content */}
                <ObservabilityGapBlock metropolis={metropolis} />
              </div>
            </div>
          </section>
          <section
            id="research"
            className="bg-gray-50 py-12 flex flex-col items-center w-screen justify-center px-8"
          >
            <div className="w-full max-w-screen-xl">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-start">
                {/* Left rail label */}
                <div className="xl:col-span-3">
                  <h1
                    className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                  >
                    Constraints
                  </h1>
                </div>
                {/* Main content */}
                <div className="xl:col-span-9">
                  <p
                    className={`max-w-3xl text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                  >
                    These constraints were defined and agreed on during the
                    workshop:
                  </p>
                  <PrinciplesGrid metropolis={metropolis} />
                </div>
              </div>
            </div>
          </section>
          <section
            id="research"
            className="bg-white py-12 flex flex-col items-center w-screen justify-center px-8"
          >
            <div className="w-full max-w-screen-xl">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-start">
                {/* Left rail label */}
                <div className="xl:col-span-3">
                  <h1
                    className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                  >
                    Solution
                  </h1>
                </div>
                {/* Main content */}
                <div className="xl:col-span-9">
                  <p
                    className={`max-w-3xl text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                  >
                    We created a{' '}
                    <span className="font-semibold">
                      wizard-like game setup tool
                    </span>
                    , inspired by platforms like Firebase, using{' '}
                    <span className="font-semibold">
                      progressive disclosure
                    </span>{' '}
                    to keep setup fast and safe. In the first step, teams define
                    only the essentials — such as game name, icon, and core
                    identifiers — while more advanced configuration is
                    intentionally deferred to later stages, reducing cognitive
                    load and preventing early misconfiguration.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="homepage-early-visibility"
            className="bg-black py-20 flex justify-center w-screen px-6 md:px-8"
          >
            <div className="w-full max-w-screen-xl">
              <h2
                className={`text-xl md:text-3xl font-semibold tracking-tight text-white ${metropolis.className}`}
              >
                Step 1: Define the essentials
              </h2>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                We start the setup flow by establishing the game’s identity and
                ownership — the minimum information required to create a new
                game.
              </p>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                Input fields are shown on the left, while a contextual helper
                panel on the right explains what each field is used for and
                which formats are valid as teams move through the form.
                Together, this creates a clear foundation for all downstream
                configuration and provisioning.
              </p>
              {/*<p*/}
              {/*  className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed  border-l-2 px-4 border-gray-500 text-gray-400  ${metropolis.className}`}*/}
              {/*>*/}
              {/*  Some fields are intentionally immutable because they map*/}
              {/*  directly to infrastructure namespaces and CI pipelines. This is*/}
              {/*  made explicit in the UI to set expectations early and prevent*/}
              {/*  unsafe changes later in the setup process.*/}
              {/*</p>*/}
            </div>
          </section>
          <div className="w-full">
            <video
              src="/images/canvas/step1-demo.mp4"
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <section
            id="homepage-early-visibility"
            className="bg-black py-20 flex justify-center w-screen px-6 md:px-8"
          >
            <div className="w-full max-w-screen-xl">
              <h2
                className={`text-xl md:text-3xl font-semibold tracking-tight text-white ${metropolis.className}`}
              >
                Step 2: Configure services
              </h2>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                Once the game’s identity is established, teams configure the
                services the game depends on.
              </p>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                The setup shifts from data entry to a service overview, grouping
                internal and external systems into a single, scannable view.
                Each service clearly communicates its current state — available,
                scheduled, or not yet configured — so teams understand what’s
                ready and what still requires action.
              </p>
              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                Configuration is intentionally modular. Teams can enable and
                configure services independently, allowing setup to progress
                incrementally without blocking on every dependency upfront.
              </p>
            </div>
          </section>
          <section
            id="sidebar-persistent-signals"
            className="bg-white py-20 flex justify-center w-screen px-6 md:px-8"
          >
            <div className="w-full max-w-screen-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left column: Title + text */}
                <div className="max-w-xl">
                  <h2
                    className={`text-xl md:text-3xl font-semibold tracking-tight text-primary ${metropolis.className}`}
                  >
                    Automation model
                  </h2>

                  <p
                    className={`mt-6 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                  >
                    Services follow one of two paths: some are provisioned
                    automatically by the backend, while others require manual
                    configuration due to external dependencies or
                    platform-specific credentials.
                  </p>

                  <p
                    className={`mt-4 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                  >
                    The overview makes this distinction explicit, so teams know
                    what will happen without intervention and where action is
                    required.
                  </p>
                </div>

                {/* Right column: Image */}
                <div className="flex justify-start md:justify-end">
                  <Image
                    src="/images/notifications/sidebar-badges.png"
                    alt="Sidebar showing persistent issue indicators"
                    width={320}
                    height={560}
                    className="w-full max-w-xs h-auto animate__animated animate__fadeIn"
                  />
                </div>
              </div>
            </div>
          </section>
          <AlternatingVideos
            video1="/images/notifications/avatar-sidebar.mp4"
            video2="/images/notifications/game-sidebar.mp4"
            caption1="Avatar-level signal"
            caption2="Game-level signals"
          />
          <section
            id="homepage-early-visibility"
            className="bg-black py-20 flex justify-center w-screen px-6 md:px-8"
          >
            <div className="w-full max-w-screen-xl">
              <h2
                className={`text-xl md:text-3xl font-semibold tracking-tight text-white ${metropolis.className}`}
              >
                List Views: From Awareness to Action
              </h2>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                Clicking into the Critical Issues or Latest Updates views
                reveals structured lists with clear context.
              </p>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed  border-l-2 px-4 border-gray-500 text-gray-400 ${metropolis.className}`}
              >
                For critical issues, users can see what is broken, where it
                occurs, which resources are affected, and how the issue was
                detected. Issues can be resolved or reopened, and deeper links
                provide access to backend or monitoring sources when needed.
              </p>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed  border-l-2 px-4 border-gray-500  text-gray-400 ${metropolis.className}`}
              >
                Updates provide visibility into relevant changes without
                requiring action, supporting awareness without noise.
              </p>
            </div>
          </section>
          <div className="w-full">
            <video
              src="/images/notifications/list-views1.mp4"
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>{' '}
          <section
            id="sidebar-persistent-signals"
            className="bg-white py-20 flex justify-center w-screen px-6 md:px-8"
          >
            <div className="w-full max-w-screen-xl">
              {/* Left column: Title + text */}
              <div className="max-w-2xl">
                <h2
                  className={`text-xl md:text-3xl font-semibold tracking-tight text-primary ${metropolis.className}`}
                >
                  Ownership and Watchers
                </h2>

                <p
                  className={`mt-6 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                >
                  Alerting only works if responsibility is clear.
                </p>

                <p
                  className={`mt-4 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                >
                  I introduced ownership as a first-class concept across LiveOps
                  resources. The creator becomes the default owner, ownership
                  can be transferred, and owners are automatically subscribed to
                  critical issues affecting their resources. Owners cannot
                  unsubscribe from these issues.
                </p>

                <p
                  className={`mt-4 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                >
                  In addition, users can act as watchers of specific resources,
                  resource types, or entire games, allowing teams to stay
                  informed without centralising responsibility on a single role.
                </p>
              </div>
            </div>
          </section>
          <AlternatingVideos
            video1="/images/notifications/transfer-ownership.mp4"
            video2="/images/notifications/adding-watcher.mp4"
            caption1="Transfering ownership of a resource"
            caption2="Adding watcher to a resource"
          />
          <section
            id="homepage-early-visibility"
            className="bg-black py-20 flex justify-center w-screen px-6 md:px-8"
          >
            <div className="w-full max-w-screen-xl">
              <div className="max-w-2xl">
                <h2
                  className={`text-xl md:text-3xl font-semibold tracking-tight text-white ${metropolis.className}`}
                >
                  Notification Settings
                </h2>

                <p
                  className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
                >
                  To balance signal and noise, I designed a subscription-based
                  notification model.
                </p>

                <p
                  className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed  text-gray-300 ${metropolis.className}`}
                >
                  Users can manage which games and resource types they follow,
                  and whether they receive critical issues, updates, or both.
                  Defaults are intentionally opinionated: owners and producers
                  always receive critical issues, while view-only roles can
                  subscribe without taking action.
                </p>

                <p
                  className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed  text-gray-300 ${metropolis.className}`}
                >
                  Notification preferences live in the user profile, making them
                  explicit and adjustable over time.
                </p>
              </div>
            </div>
          </section>
          <div className="w-full">
            <video
              src="/images/notifications/notifications-settings.mp4"
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <section
            id="context"
            className="w-screen bg-gray-50 py-20 flex justify-center px-8"
          >
            <div className="w-full max-w-screen-xl">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-start">
                {/* Left rail label */}
                <div className="xl:col-span-3">
                  <h1
                    className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                  >
                    Key tradeoffs
                  </h1>
                </div>
                {/* Main content */}
                <TradeoffsBlock metropolis={metropolis} />
              </div>
            </div>
          </section>
          <section
            id="context"
            className="w-screen bg-white py-20 flex justify-center px-8"
          >
            <div className="w-full max-w-screen-xl">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-start">
                {/* Left rail label */}
                <div className="xl:col-span-3">
                  <h1
                    className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
                  >
                    Impact
                  </h1>
                </div>
                {/* Main content */}
                <ImpactBlock metropolis={metropolis} />
              </div>
            </div>
          </section>{' '}
          {/*<ProjectNavigation*/}
          {/*  previousProject={{*/}
          {/*    title: 'Supplier Management Dashboard',*/}
          {/*    href: '/project/previous-project',*/}
          {/*  }}*/}
          {/*  nextProject={{*/}
          {/*    title: 'E-commerce Redesign',*/}
          {/*    href: '/project/next-project',*/}
          {/*  }}*/}
          {/*/>*/}
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
