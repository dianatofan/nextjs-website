'use client';

import React from 'react';
import Image from 'next/image';

import '@/styles/about.scss';
import '@/styles/styles.scss';
import Layout from '@/components/Layout';
import { metropolis } from '@/app/utils/local-font';
import { Carousel } from 'nuka-carousel';
import 'animate.css';

export default function Page() {
  return (
    <Layout isProjectPage>
      <Image
        src="../images/sustainability/cover.png"
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
              Sustainable E-Commerce
            </h1>
            <h3 className={`text-lg text-gray-500 ${metropolis.className}`}>
              Reimagining the checkout flow to reduce packaging waste in online
              orders{' '}
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
                Online shopping has boomed in the pandemic, leading to an
                increased demand for single-use packaging.
              </h1>
              <p className={`text-lg mb-4 mt-8 ${metropolis.className}`}>
                The COVID-19 pandemic promoted an uprecedented change in
                consumption habits due to lockdowns, causing a steep rise in the
                e-commerce sector. As convenient as it may sound for the regular
                consumer, the overuse of e-commerce services is one of the major
                contributors to plastic pollution due to excess packaging being
                thrown away in huge landfills instead of being repurposed.
              </p>
              <h3
                className={`font-semibold uppercase text-gray-400 text-sm mt-16 mb-4 ${metropolis.className}`}
              >
                Goal
              </h3>
              <h1
                className={`text-4xl antialiased tracking-tighter lg:leading-tight md:text-5xl text-primary font-semibold ${metropolis.className}`}
              >
                Design a better checkout experience focused on minimizing waste.
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
              How can we make buyers adopt a more sustainable mindset?
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
                User survey
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                I started the design process by collecting information from
                people around me regarding their online shopping habits. In
                order to collect as many answers as possible, I used an online
                survey with various questions on the topic of online shopping,
                to identify how informed they are with regards to sustainability
                and the negative impact over-shopping can have on the
                environment. 25 persons completed the the survey.
              </p>
              <div className="w-full p-8 lg:px-64 lg:py-16">
                <Image
                  src="../images/sustainability/surveyResults.png"
                  alt="cover"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="w-full mt-12 animate__animated animate__fadeIn"
                />
              </div>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                Key mentions in the user survey:
              </p>
              <ul className="mt-4 px-8">
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr; People have acknowledged they started{' '}
                  <b>ordering more items online</b> and admitted to{' '}
                  <b>throwing away most of the boxes.</b>
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr; <b>Overpacking</b> is also a common issue among many
                  shoppers as they often get sent packages that are too big for
                  what they ordered.
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr; Most of the e-commerce websites have{' '}
                  <b>not taken the appropriate measures</b> to reduce single-use
                  packaging yet, even though customers would be open to the
                  idea.
                </li>
              </ul>
              <p
                className={`text-2xl mb-4 font-semibold ${metropolis.className}`}
              >
                One of the greatest concerns regarding single-use packaging and
                its harmful effects on the environment is people's lack of
                knowledge on the topic.{' '}
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                Most subjects have stated that even though they are aware online
                shopping is bad for the environment, they are unaware{' '}
                <i>how bad</i> it actually is and where does packaging waste end
                up.
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
              Personas
            </h1>
            <div className="max-w-screen-lg">
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                Defining online buyers
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                After researching, I created two personas that best shape the
                potential users of this app, along with their needs and
                frustrations. I concentrated on two types of users: online order
                consumers and e-commerce business owners.
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                Throughout the rest of the design process, I focused on solving
                their problems and come up with an improved checkout concept
                when shopping online for an item, that would benefit both user
                segments.
              </p>
              <Carousel enableKeyboardControls showArrows showDots>
                <img
                  src="../images/sustainability/persona1.png"
                  alt="persona1"
                />
                <img
                  src="../images/sustainability/persona2.png"
                  alt="persona2"
                />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              User flow
            </h1>
            <div className="max-w-screen-lg">
              <p
                className={`text-lg mb-4 font-semibold ${metropolis.className}`}
              >
                How does a checkout flow look like?
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                I continued by researching the structure of a typical checkout
                experience on mobile when purchasing items online. Most
                e-commerce apps have 6 checkout screens, as depicted in the
                following image (courtesy of{' '}
                <a
                  href="https://bsscommerce.com/blog/one-step-checkout-facts-statistics/"
                  target="_blank"
                  className={`text-lg mb-4 ${metropolis.className} underline hover:text-tertiary`}
                >
                  BSS Commerce
                </a>
                )
              </p>
              <div className="w-full">
                <Image
                  src="../images/sustainability/checkoutFlow.png"
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
        <section className="bg-white py-12 flex flex-col  juitems-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32 lg:py-16 flex flex-col items-center justify-center">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Ideation & wireframing
            </h1>
            <p className={`text-lg mt-4 mb-4 ${metropolis.className}`}>
              I had an idea in mind on how to design the checkout flow, which I
              sketched on paper. <br />
              My main goal was to create a customizable experience for the users
              where they decide
              <br />
              what options suit them best in terms of delivery and packaging,
              while making them aware
              <br />
              of their environmental footprint.
            </p>
            <Image
              src="../images/sustainability/sketches.jpeg"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="max-w-lg mt-12 animate__animated animate__fadeIn"
            />
          </div>
        </section>
        <section className="bg-white py-12 flex items-center w-screen justify-center px-8">
          <div className="xl:flex items-center justify-between w-screen max-w-screen-xl gap-6">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Strategy
            </h1>
            <div className="max-w-screen-lg">
              <p
                className={`text-3xl font-semibold mb-4 ${metropolis.className}`}
              >
                A little goes a long way.
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                That's the principle upon which I redesigned the e-commerce
                checkout experience for improving sustainability. I tried making
                customers <i>aware</i> of environmental risks associated to
                their shopping choices by{' '}
                <b>embedding small snippets of information</b> associated to
                ecological waste. Besides educating online shoppers on
                sustainability, I also came up with a <b>reward system</b> that
                grants customers discounts if they choose the greener options
                for their delivery.
              </p>
              <p
                className={`text-3xl font-semibold mb-4 mt-8 ${metropolis.className}`}
              >
                Informational rewards satiate a user's curiosity.
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                The reward system I came up with consists of "eco points" that
                the buyer receives whenever he opts for a planet-friendly option
                for delivery or packaging. As advertised in the banner (first
                screen - bottom), eco points can be used to get discounts in the
                next order.
              </p>
              <p className={`text-lg mb-4 mt-16 ${metropolis.className}`}>
                The checkout experience consists of 6 screens, namely:
              </p>
              <ul className="mt-4 px-8">
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Product page
                  </span>{' '}
                  - where the user has the option to read more details about a
                  certain item and add it to cart
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Cart page
                  </span>{' '}
                  - displaying all the items that were added to cart and the
                  subtotal price (excluding the shipping fee)
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Checkout screen I: Shipping
                  </span>{' '}
                  - here the user adds the home address and picks a delivery
                  option (either expedited or standard, being informed by the
                  app that standard delivery is more sustainable); if ground
                  shipping is selected, the user gets eco points
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Checkout screen II: Packaging
                  </span>{' '}
                  - here the user can opt for sustainable packaging or zero
                  packaging, being rewarded with eco points accordingly
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Checkout screen III: Payment
                  </span>{' '}
                  - here the user can add payment information and confirm
                  payment for the order
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr;{' '}
                  <span
                    className={`text-lg italic mb-4 ${metropolis.className}`}
                  >
                    {' '}
                    Checkout screen IV: Confirmation
                  </span>{' '}
                  - screen notifying the user that the order was successfully
                  submitted
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
              src="../images/sustainability/wireframes.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              priority
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
          </div>
        </section>
        <section className="bg-emerald-950 py-12 flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32 lg:py-16">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-white font-semibold ${metropolis.className}`}
              id="overview"
            >
              High-fidelity prototype
            </h1>
            <Image
              src="../images/sustainability/highFidelity.png"
              alt="cover"
              width={1920}
              height={1080}
              layout="responsive"
              className="w-full mt-12 animate__animated animate__fadeIn"
            />
          </div>
        </section>
        <section className="bg-white py-12 flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32 lg:py-16">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Design system
            </h1>
            <Image
              src="../images/sustainability/designSystem.png"
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
                Validating assumptions
              </p>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                After creating the high-fidelity prototpe, I conducted usability
                testing with five participants (face to face). My main goal was
                to detect whether the participants found the eco-points
                rewarding system powerful and if they learnt new things about
                sustainable shopping while navigating through the checkout
                screens. There were no tasks prepared and during the interviews
                I payed close attention to the participants' reactions when they
                interacted with the checkout screens. The participants were
                asked to think out loud. On the whole, the prototype met its
                purpose, but it also generated a few concerns, as detailed in
                the feedback grid below.
              </p>
            </div>
          </div>
        </section>
        <div className="w-screen">
          <Image
            src="../images/sustainability/feedback.png"
            alt="cover"
            width={1920}
            height={1080}
            layout="responsive"
            className="w-full animate__animated animate__fadeIn"
          />
        </div>
        <section className="bg-gray-100 py-12 flex flex-col items-center w-screen justify-center px-8">
          <div className="w-screen p-8 lg:px-32 lg:py-16">
            <h1
              className={`max-w-screen-xl text-lg antialiased tracking-tighter lg:leading-headers mb-8 xl:mb-0 md:text-2xl text-gray-400 font-semibold ${metropolis.className}`}
              id="overview"
            >
              Revision
            </h1>
            <Image
              src="../images/sustainability/revision.png"
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
                This project allowed me to learn more about UX design in
                e-commerce. Even though the presented solution is a specific
                case that cannot be applied to all online stores due to
                differences in logistics, the central idea stays the same -
                users should be informed of the environmental impact associated
                to their online purchases and rewarded with small bonuses where
                possible.
              </p>
              <h3
                className={`font-semibold text-primary text-lg mb-4 ${metropolis.className}`}
              >
                Future iterations
              </h3>
              <p className={`text-lg mb-4 ${metropolis.className}`}>
                If I were to continue expanding the checkout screens, I would:
              </p>
              <ul className="mt-4 px-8">
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr; add numerical statistics or illustrations instead of
                  textual facts to increase awareness
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr; find a way to reduce the number of checkout screens
                </li>
                <li className={`text-lg mb-4 ${metropolis.className}`}>
                  &rarr; replace the tooltips with fullscreen modals to include
                  more facts
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="iframe-container">
        <iframe
          style={{
            border: 0,
          }}
          width="1400"
          height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Flu0VBSCpiFcH1fJCLtOk5l%2FUntitled%3Fnode-id%3D1333%253A1216%26scaling%3Dscale-down%26page-id%3D1257%253A1084%26starting-point-node-id%3D1333%253A1216%26show-proto-sidebar%3D1%26hide-ui%3D1"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  );
}
