import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const UseCases: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="rounded-lg bg-blue-50 p-8" id="use-cases" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center md:flex-row">
          <motion.div
            className="md:w-1/2 md:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h1 variants={itemVariants} className="mb-4 text-3xl font-bold text-blue-900">
              Transform the way you Produce Content.
            </motion.h1>
            <motion.p variants={itemVariants} className="mb-6 text-blue-700">
              Free up staff time in today&apos;s fast paced world.
            </motion.p>
            <div className="space-y-6">
              {[
                {
                  icon: '📄',
                  title: 'Efficiency',
                  description:
                    'Produce a vast volume of content with minimal resources. Our AI reduces the need for a large team, saving you time and money.',
                },
                {
                  icon: '🔍',
                  title: 'Boost SEO',
                  description:
                    "Stay on top of keyword trends and competitors' content effortlessly. Our SEO-optimized articles, complete with AI-generated images, tags, excerpts, and slugs, will elevate your site's visibility and ranking.",
                },
                {
                  icon: '📈',
                  title: 'Scalability',
                  description:
                    "Whether you're a small startup or a large corporation, our platform is designed to scale with your needs, providing the flexibility and adaptability you require.",
                },
                {
                  icon: '✍️',
                  title: "Writer's Assistant",
                  description:
                    "Ideal for medium to large news sites, position our platform as a writer's assistant, enabling your team to generate ideas and output a higher volume of top-notch content.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="rounded-lg bg-blue-100 p-2">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                    <p className="text-blue-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="mb-8 md:mb-0 md:w-1/2">
            <img src="/images/network-brain.svg" alt="Network Brain" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
