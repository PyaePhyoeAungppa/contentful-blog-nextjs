import { motion } from 'framer-motion';

import NavBar from '@src/components/NavBar';
import GetInTouch from '@src/components/sections/GetInTouch';
import HowItWorks from '@src/components/sections/HowItWorks';
import UseCases from '@src/components/sections/UseCases';

const LandingPage = () => {
  return (
    <div className="font-inter min-h-screen bg-blue-50">
      <NavBar />
      <div className="container mx-auto px-4 pt-32">
        <div
          className="relative flex flex-col items-center overflow-hidden md:flex-row"
          style={{ height: '80vh' }}
        >
          <motion.div
            className="z-10 space-y-8 p-8 md:w-2/3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-normal text-indigo-900 md:text-5xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-semibold text-blue-600">Double</span> your writers productivity
              with our advanced <span className="font-semibold text-blue-600">Research</span> and
              <span className="font-semibold text-blue-600">Generation</span> platform
            </motion.h1>

            <motion.p
              className="font-light text-gray-600"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pull in articles and content automatically with our
              <br />
              Scrapers and have our AI rewrite those articles
              <br />
              avoiding plagiarism
            </motion.p>

            <motion.a
              href="https://calendly.com/nigel-swiftwriter"
              target="_blank"
              className="inline-block rounded-xl bg-indigo-900 px-8 py-2 text-lg text-white hover:bg-indigo-800"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              Get Demo
            </motion.a>
          </motion.div>
          <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
            <img src="/images/network-brain.svg" alt="Network" className="h-full object-cover" />
          </div>
        </div>
        <div
          className="my-4 rounded-xl bg-blue-800 bg-cover bg-no-repeat p-4 py-14"
          style={{ backgroundImage: 'url(/images/background-bubbles.svg)', height: 'auto' }}
        >
          <h1 className="text-center text-4xl font-bold text-white">
            Double your creativity and output with
            <br />
            SWIFTWRITER Research and Content generation
          </h1>
        </div>
        <HowItWorks />
        <UseCases />
      </div>
      <GetInTouch />
    </div>
  );
};

export default LandingPage;
