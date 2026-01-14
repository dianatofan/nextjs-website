'use client';
import Image from 'next/image';
import ProtectedRoute from '@/components/ProtectedRoute';
import 'animate.css';
import React, { useState } from 'react';
import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';
import { metropolis, nauryz } from '@/app/utils/local-font';
import { BackgroundBlock } from '@/app/project/game-setup/background-block';
import ObservabilityGapBlock from '@/app/project/game-setup/observability-gap-block';
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
  const [loaded, setLoaded] = useState(false);

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
                    only the essentials, such as game name, icon, and core
                    identifiers, while more advanced configuration is
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
                ownership - the minimum information required to create a new
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
                Services are shown as toggleable cards in a single overview and
                behave like a dependency graph rather than a checklist. Each
                service communicates its state, such as scheduled, available,
                requiring configuration, partially configured, or failed.
              </p>
              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                Configuration is intentionally modular. Teams can enable and
                configure services independently, allowing setup to progress
                incrementally.
              </p>
              <p
                className={`mt-6 max-w-2xl md:text-lg leading-relaxed  border-l-2 px-4 border-gray-500 text-gray-400  ${metropolis.className}`}
              >
                Some services, including the LiveOps Dashboard API and Game
                Server, are provisioned automatically and remain expanded so
                teams can copy credentials. Other services are configured
                manually.
              </p>
            </div>
          </section>
          <div className="w-full">
            <video
              src="/images/canvas/step2-services.mp4"
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
                Step 3: Configuration & permissions
              </h2>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                Access is managed through clear, game-level roles such as{' '}
                <span className="font-medium">Viewer</span>,{' '}
                <span className="font-medium">Editor</span>, and{' '}
                <span className="font-medium">Publisher</span>, shown in a list
                of users assigned to the game. Teams can add users directly from
                this view, assign roles, and immediately see who has access and
                at what level.
              </p>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                Platform-level roles are inherited automatically, while
                guardrails prevent unsafe actions such as removing yourself from
                a game. Missing permissions disable related features early
                instead of failing later during provisioning.
              </p>
            </div>
          </section>
          <div className="w-full">
            <video
              src="/images/canvas/step3-permissions.mp4"
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
                Step 4: Integration credentials
              </h2>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                Some configuration depends on external services and cannot be
                fully automated.{' '}
              </p>
              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                In this step, teams provide identifiers such as{' '}
                <span className="font-medium">package names</span> and{' '}
                <span className="font-medium">certificate fingerprints</span>{' '}
                required by SDKs and authentication providers. These values are
                strictly validated and protected by guardrails, since incorrect
                changes can break live integrations.
              </p>

              <p
                className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-300 ${metropolis.className}`}
              >
                By separating this step from earlier setup, the flow keeps
                initial game creation fast while ensuring external integrations
                are configured deliberately and safely.
              </p>
            </div>
          </section>
          <div className="w-full">
            <video
              src="/images/canvas/step4-credentials.mp4"
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
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
                  Provisioning and system behavior
                </h2>

                <p
                  className={`mt-6 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                >
                  Creating a game triggers asynchronous setup across multiple
                  modules. Core modules like the Game Server and LiveOps
                  Dashboard API are provisioned automatically by the backend,
                  while the remaining modules require manual configuration.
                </p>

                <p
                  className={`mt-4 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                >
                  Each module exposes its current state, such as scheduled, in
                  progress, not configured, available, or failed.
                </p>
                <p
                  className={`mt-4 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                >
                  Modules that are not configured surface a{' '}
                  <span className="font-medium uppercase">Configure</span>{' '}
                  action, while failed modules expose a{' '}
                  <span className="font-medium uppercase">Retry</span> action,
                  allowing teams to move forward with partial setup while the
                  system continues provisioning in the background.
                </p>
              </div>
            </div>
          </section>
          {/* Full-width image */}
          <div className="w-screen bg-gray-50 py-20 flex justify-center">
            <div className="relative w-full max-w-8xl h-[40vh]">
              <Image
                src="/images/canvas/provisioning.png"
                alt="How provisioning works"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <section
            id="sidebar-persistent-signals"
            className="bg-white py-20 flex justify-center w-screen px-6 md:px-8"
          >
            <div className="w-full max-w-screen-xl">
              <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1.9fr] gap-12 items-start">
                {/* Left column: Title + text */}
                <div className="max-w-xl">
                  <h2
                    className={`text-xl md:text-3xl font-semibold tracking-tight text-primary ${metropolis.className}`}
                  >
                    Post-setup ownership
                  </h2>

                  <p
                    className={`mt-6 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                  >
                    After setup, games transition into a persistent overview
                    that teams return to for day-to-day management. The
                    dashboard surfaces configuration health, ownership, and
                    system status in one place, making it easy to see what is
                    ready and what still needs attention.
                  </p>

                  <p
                    className={`mt-4 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
                  >
                    Teams can revisit configuration, resolve incomplete modules,
                    and manage access without restarting the setup flow.
                    Ownership remains explicit and roles stay editable as teams
                    and responsibilities evolve.
                  </p>
                </div>

                {/* Right column: Video */}
                <div className="relative overflow-hidden rounded-xl">
                  <video
                    src="/images/canvas/post-setup.mp4"
                    className="w-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <figcaption className="mt-3 text-xs md:text-sm text-gray-500">
                    Switching between overview, permissions, and integration
                    settings for a partially configured game.
                  </figcaption>
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
