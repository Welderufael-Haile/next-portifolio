'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20 w-full bg-gray-50 dark:bg-gray-900 rounded shadow-xl border-b">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-5">
                        Get to know more about me and my journey in web development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[400px] lg:w-[400px] transition duration-300 transform hover:scale-105 animate-bolb rounded-full overflow-hidden">
                            <Image
                                src="/well.jpg"
                                alt="About Me"
                                fill
                                className="object-cover mx-auto max-w-5xl"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 max-w-4xl mx-auto"
                    >
                        <h1 className="text-black dark:text-white font-bold text-lg text-center pt-2 mb-4">
                            I am Welderufael Haile
                        </h1>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-5">
                            Full Stack Web Developer
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300">
                            Dynamic and results-driven Full Stack Web Developer with hands-on experience in 
                            building scalable and user-friendly web applications. I enjoy combining creativity 
                            with technical solutions to deliver impactful projects.
                        </p>

                        <p className="text-gray-600 dark:text-gray-300">
                            Skilled in React.js, Next.js, Angular.js, Node.js, Express.js, MySQL, PostgreSQL, 
                            MongoDB (Mongoose), and PrismaORM. I also have experience with Redux, Tailwind CSS, 
                            TypeScript, Git/GitHub, and Figma for UI/UX design.
                        </p>

                        <p className="text-gray-600 dark:text-gray-300">
                            At <b>Byte Pulse</b>, I built a School Management System and a Digital Library 
                            system. I also developed my own portfolio website with Next.js and a Food Delivery 
                            App as a training project. In parallel, I work as an <b>IT & Web Development Teacher</b> 
                            at AI School of Computer, where I mentor students in programming and project building.
                        </p>

                        {/* Education & Experience */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                    Education
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    BSc in Software Engineering <br />
                                    Micro Link Information Technology & Business College <br />
                                    Certified: Programming Fundamentals (Udacity), 
                                    Full Stack Development (Byte Pulse)
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                    Experience
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Frontend & Fullstack Developer – 2+ Years <br />
                                    Projects in React, Next.js, Angular, Express.js, MySQL, PrismaORM
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                            <div className="text-center">
                                <h5 className="text-3xl font-bold text-blue-600">6+</h5>
                                <p className="text-gray-600 dark:text-gray-300">Projects</p>
                            </div>
                            <div className="text-center">
                                <h5 className="text-3xl font-bold text-blue-600">2+</h5>
                                <p className="text-gray-600 dark:text-gray-300">Clients</p>
                            </div>
                            <div className="text-center">
                                <h5 className="text-3xl font-bold text-blue-600">2+</h5>
                                <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                            </div>
                        </div>

                        {/* Download CV Button */}
                        <div className="pt-6 text-center">
                            <a
                                href="/Welderufael_Haile_CV.pdf"
                                download
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition duration-300 mr-4"
                            >
                                Download CV
                            </a>
                            <a
                                href="/Welderufael_Haile_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-transparent border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300"
                            >
                                View My CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
