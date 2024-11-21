'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20 md:w-full bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Get to know more about me and my journey in web development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative h-[500px] w-[500px] transition duration-300 transform hover:scale-105 animate-bolb rounded-full ml-16 overflow-hidden">
                            <Image
                                src="/well.jpg"
                                alt="About Me"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            Web Developer
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300">
                            I am a passionate web developer with over 5 years of experience in creating
                            beautiful and functional websites. My journey in web development started
                            when I discovered my love for combining creativity with technical solutions.
                        </p>

                        <p className="text-gray-600 dark:text-gray-300">
                            I specialize in building responsive web applications using modern technologies
                            like React, Next.js, and angular js. My approach to development focuses on
                            creating user-centric designs that not only look great but also provide
                            an excellent user experience.
                        </p>

                        {/* Personal Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                    Education
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    I have  BSc in Software Engineering
                                    <br />
                                    In Micro Link Information Techinology Collage
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                    Experience
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    2+ Years
                                    <br />
                                    Frontend Development In Angular and Fullstack In Next.js
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                            <div className="text-center">
                                <h5 className="text-3xl font-bold text-blue-600">5+</h5>
                                <p className="text-gray-600 dark:text-gray-300">Projects</p>
                            </div>
                            <div className="text-center">
                                <h5 className="text-3xl font-bold text-blue-600">10+</h5>
                                <p className="text-gray-600 dark:text-gray-300">Clients</p>
                            </div>
                            <div className="text-center">
                                <h5 className="text-3xl font-bold text-blue-600">2+</h5>
                                <p className="text-gray-600 dark:text-gray-300">Years</p>
                            </div>
                            <div className="text-center">
                                <h5 className="text-3xl font-bold text-blue-600">1+</h5>
                                <p className="text-gray-600 dark:text-gray-300">Awards</p>
                            </div>
                        </div>

                        {/* Download CV Button */}
                        <div className="pt-6">
                            <a
                                href="/well cv.docx"
                                download
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
