// filepath: d:\my website\v5\fig-web-genesis\src\pages\LandingPage.tsx
import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Layout from '../components/Layout'; // Keep the existing layout with the navbar and menu

const LandingPage: React.FC = () => {
  const resumeDriveLink = 'https://drive.google.com/file/d/1u9gfN7yfbW6SgBfaOnR0NlfXpOjnxZEB/view?usp=sharinghttps://drive.google.com/';
  const landingMediaSources = [
    '/images_for_website/Frame14.png',
    '/images_for_website/myimg2.jpeg',
  ];
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const lastMediaSwapAtRef = useRef(0);

  const maybeSwapLandingMedia = (event: React.MouseEvent<HTMLDivElement>) => {
    // Avoid accidental rapid switching and ignore minimal pointer movement.
    const now = Date.now();
    if (now - lastMediaSwapAtRef.current < 1800) {
      return;
    }

    const movement = Math.abs(event.movementX) + Math.abs(event.movementY);
    if (movement < 3) {
      return;
    }

    // Swap occasionally so the animation feels intentional instead of noisy.
    if (Math.random() > 0.25) {
      return;
    }

    lastMediaSwapAtRef.current = now;
    setActiveMediaIndex((currentIndex) => {
      let nextIndex = currentIndex;
      while (nextIndex === currentIndex) {
        nextIndex = Math.floor(Math.random() * landingMediaSources.length);
      }
      return nextIndex;
    });
  };

  return (
    <>
      <Navbar /> {/* Place the Navbar outside the Layout */}
      <Layout>
        <div className="landing-phone-safe bg-background text-foreground">
          <div className="border-b border-border/80 mb-3 sm:mb-5 md:mb-8" />

          {/* Intro screen: only this block is visible on first landing viewport */}
          <section className="min-h-fit flex items-start py-4 sm:py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 w-full max-w-7xl mx-auto lg:px-2">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-aldrich text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                  <span className="block text-foreground/90 lowercase">hi I&apos;m</span>
                  <span className="block mt-1">Abhyuday Rai</span>
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-snug max-w-xl">
                I'm currently pursuing my bachelor's in Electronics and Telecommunication Engineering. I enjoy designing and building hardware, especially in areas like power electronics, analog devices, and IC design. Beyond core electronics, I'm also interested in 3D printing and automobiles, which is why I'm actively working with my college's FSAE team. I like getting hands-on with projects, figuring things out as I go, and turning ideas into something real.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-snug max-w-xl">
                  BTW did you know I like cooking, I mean cooking circuits.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-snug max-w-xl">
                  This portfolio highlights my works, projects and experiments.
                </p>
              </div>

              <div
                className="relative w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[360px] rounded-md overflow-hidden bg-background"
                onMouseMove={maybeSwapLandingMedia}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={landingMediaSources[activeMediaIndex]}
                    src={landingMediaSources[activeMediaIndex]}
                    alt="Landing visual"
                    className="w-full h-full object-cover opacity-95"
                    style={{
                      WebkitMaskImage: 'radial-gradient(88% 88% at 50% 50%, black 72%, transparent 100%)',
                      maskImage: 'radial-gradient(88% 88% at 50% 50%, black 72%, transparent 100%)',
                    }}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                  />
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/25" />
              </div>
            </div>
          </section>

          {/* Scroll section: appears after user scrolls down */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-28 space-y-8 sm:space-y-10 pb-12 sm:pb-14 md:pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-y-4 sm:gap-x-[5%] max-w-6xl mx-auto">
              <a
                href={resumeDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-between rounded-xl bg-zinc-100 text-zinc-900 px-4 py-3 sm:px-6 sm:py-4"
              >
                <span className="absolute inset-0 bg-purple-500 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 text-xl sm:text-3xl font-semibold transition-colors duration-300 group-hover:text-white">Resume</span>
                <ArrowUpRight className="relative z-10 h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
              </a>

              <Link
                to="/work"
                className="group relative overflow-hidden flex items-center justify-between rounded-xl bg-zinc-100 text-zinc-900 px-4 py-3 sm:px-6 sm:py-4"
              >
                <span className="absolute inset-0 bg-purple-500 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 text-xl sm:text-3xl font-semibold uppercase transition-colors duration-300 group-hover:text-white">Projects</span>
                <ArrowUpRight className="relative z-10 h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
              </Link>

              <Link
                to="/social"
                className="group relative overflow-hidden flex items-center justify-between rounded-xl bg-zinc-100 text-zinc-900 px-4 py-3 sm:px-6 sm:py-4"
              >
                <span className="absolute inset-0 bg-purple-500 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <div className="relative z-10 leading-tight transition-colors duration-300 group-hover:text-white">
                  <span className="block text-xl sm:text-3xl font-semibold uppercase">Contact</span>
                  <span className="block text-[10px] sm:text-xs tracking-wide uppercase text-zinc-700 mt-0.5 transition-colors duration-300 group-hover:text-zinc-200">abhyudayrai2006@gmail.com</span>
                </div>
                <ArrowUpRight className="relative z-10 h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
              </Link>
            </div>

            <p className="text-center text-lg sm:text-2xl md:text-3xl text-muted-foreground">
              &ldquo;rest everything is in the menu&rdquo;
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default LandingPage;