'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px] bg-[-1px]">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px] bg-[-1px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Animated Welcome Text */}
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 relative"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                Welcome to My Portfolio
                <div className="absolute -bottom-2 left-0 w-3/4 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
              </h1>
              <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                <TypeAnimation
                  sequence={[
                    'Building Digital Experiences',
                    2000,
                    'Creating Innovative Solutions',
                    2000,
                    'Transforming Ideas into Reality',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            {/* Animated Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Creative', icon: '🎨', delay: 0.4 },
                { title: 'Innovative', icon: '💡', delay: 0.6 },
                { title: 'Professional', icon: '🚀', delay: 0.8 },
                { title: 'Responsive', icon: '📱', delay: 1.0 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/pages/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </Link>
              <Link href="/pages/contact"
                className="border-2 border-gray-600 dark:border-white dark:hover:bg-white dark:hover:text-gray-900 hover:bg-white hover:text-gray-900 text-gray-800 dark:text-white px-8 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/download2.jpg" // Make sure to add your developer image
                alt="Developer"
                fill
                className="object-cover"
                priority
              />
              {/* Animated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />

              {/* Floating Code Elements */}
              <div className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-lg rounded-lg p-4 animate-float">
                <code className="text-sm text-blue-400">&lt;code/&gt;</code>
              </div>
              <div className="absolute -left-4 bottom-1/4 bg-white/10 backdrop-blur-lg rounded-lg p-4 animate-float-delay">
                <code className="text-sm text-purple-400">{`{dev}`}</code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

export default HomePage;
