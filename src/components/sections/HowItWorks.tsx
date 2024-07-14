import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const HowItWorks: React.FC = () => {
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
    <div className="bg-blue-50 p-8" id="how-it-works" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <img src="/images/network-brain.svg" alt="Network Brain" className="h-auto w-full" />
          </div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h2 variants={itemVariants} className="mb-4 text-3xl font-bold text-blue-900">
              How It Works
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-6 text-blue-700">
              Whether you&apos;re a small startup or an established player in the industry, our
              platform empowers you to produce high-quality content at scale, giving you the
              competitive edge you need to succeed.
            </motion.p>
            <div className="space-y-6">
              {[
                {
                  icon: '📄',
                  title: 'Google Article Scraper',
                  description:
                    'Instantly generate new content by scraping articles on Google using specific keywords. Inspiration is just a click away.',
                },
                {
                  icon: '📊',
                  title: 'Competitor Monitoring',
                  description:
                    'Pulls in articles from any website you set on a regular basis. Monitor your competitors sites and make sure your on top of the latest content.',
                },
                {
                  icon: '🚀',
                  title: 'AI Research Agent',
                  description:
                    'Give the agent a topic and let it output a fully fledged researched article SEO optimised.',
                },
                {
                  icon: '🔧',
                  title: 'Paste Article or Social Post',
                  description:
                    'Find some content you like? Just paste in the link, we will automatically pull in the content and generate a new article from it.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="rounded-lg bg-white p-2 shadow">
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
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
