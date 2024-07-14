// components/sections/GetInTouch.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GetInTouch = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={sectionRef}
      className="mb-4 flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: 'url("images/background-shapes.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.h1
        className="mb-6 mt-6 text-4xl font-semibold text-white sm:text-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Create Your Own Writing Styles
      </motion.h1>
      <div className="flex w-full flex-wrap justify-center p-8 md:w-3/4 lg:w-2/3">
        <motion.div
          className="flex w-full flex-col flex-wrap content-center items-center justify-center p-4 md:w-1/2"
          initial={{ scale: 0 }}
          animate={sectionInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/icons/tools.svg" className="mb-2 w-12" alt="Tools" />
          <h2 className="text-center text-xl font-semibold text-white">Step One: Customize</h2>
          <p className="text-center font-normal text-white">
            Create your own writing styles by
            <br /> giving our AI some example
            <br /> pieces of text.
          </p>
        </motion.div>

        <motion.div
          className="flex w-full flex-col flex-wrap content-center items-center justify-center p-4 md:w-1/2"
          initial={{ scale: 0 }}
          animate={sectionInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src="/icons/pen.svg" className="mb-2 w-12" alt="Pen" />
          <h2 className="text-center text-xl font-semibold text-white">Step Two: Re-Write</h2>
          <p className="text-center font-normal text-white">
            Select your created style to generate your new articles with.
            <br />
            <br />
          </p>
        </motion.div>
      </div>
      <div className="mx-auto max-w-6xl p-4">
        <motion.h1
          className="mb-4 text-3xl font-semibold text-white sm:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          More than just Chat GPT for Writers, with our AI newsroom all your content is in one
          place, heavily automated with state of the art AI research and writing agents working 24/7
        </motion.h1>
        <motion.p
          className="text-center font-light text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Chat with us today and learn more about how we can help you save valuable resources, free
          up employee time, and get ahead of your competitors in implementing AI.
        </motion.p>
        <br />
        <motion.a
          href="mailto:nigel@swiftwriter.co"
          className="inline-block rounded-xl bg-indigo-900 px-8 py-2 text-white hover:bg-indigo-800"
          style={{
            border: '3px solid #FFF',
            background: 'rgba(0, 31, 96, 0.20)',
            backdropFilter: 'blur(25px)',
          }}
          initial={{ scale: 0 }}
          animate={sectionInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Get in Touch
        </motion.a>
        <br />
        <br />
      </div>
    </div>
  );
};

export default GetInTouch;
