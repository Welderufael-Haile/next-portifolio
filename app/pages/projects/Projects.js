'use client';
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = useCallback((images, index = 0) => {
        setModalImages(images);
        setCurrentIndex(index);
        setModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setModalOpen(false);
        setModalImages([]);
        setCurrentIndex(0);
    }, []);

    const prevImage = useCallback(() => {
        setCurrentIndex((i) => (i - 1 + modalImages.length) % modalImages.length);
    }, [modalImages.length]);

    const nextImage = useCallback(() => {
        setCurrentIndex((i) => (i + 1) % modalImages.length);
    }, [modalImages.length]);

    const projects = [
        {
            title: "School chat app",
            description:
                "Real-time school chat application for students and teachers with private and group channels, presence indicators, and instant messaging. Built with React on the frontend, Express + Socket.IO on the backend, Prisma ORM for database access, and Redux Toolkit for state management. Features include user authentication, message history, typing indicators, and optimized real-time updates for classroom collaboration.",
            images: ["/chat1.png", "/chat2.png", "/chat3.png","/chat dark.png"],
            technologies: ["React.js", "Tailwind CSS", "MySQL", "Express.js", "Prisma ORM", "Socket.IO", "Redux Toolkit"],
           // liveLink: "https://well-profile.vercel.app",
            githubLink: "https://github.com/Welderufael-Haile"
        },
        {
            title: "My portifolio",
            description: "A this my own personal portifolio website built with next.js showcasing my skill, experiance and projects.",
            image: "/profile.png",
            technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
            liveLink: "https://well-profile.vercel.app/",
            githubLink: "https://github.com/Welderufael-Haile/next-portifolio"
        },
        {
            title: "food delivery web app",
            description: "A modern food delivery web app built in Next.js and clerk authentication,  allowing users to order food online.",
            images: ["/food.png","/food1.png"],
            technologies: ["Next.js", "Context API", "MySQL", "Tailwind CSS", "Clerk"],
            liveLink: "https://full-stuck-food-delivery-f5lu.vercel.app/",
            githubLink: "https://github.com/Welderufael-Haile/full-stuck-food-delivery"
        },
        {
            title: "Ecommerce web app",
            description: "A modern ecommerce website showcasing products and features, this project has role based authentication user and admin and admin dashboard includes manage products add,edit and delete products, manage users activity, mange orders from user",
            images: ["/fashion.png","/fashion1.png"],
            technologies: ["Next.js", "Tailwind CSS","Express.js", "MySQL","Node.js"],
            //liveLink: "https://project3.com",
            githubLink: "https://github.com/username/project3"
        },
        {
            title: "hotel Website",
            description: "This is static hotel website biult in react,tailwindcss showcasing rooms, srvices and booking features, and this project is my first project in react",
            image: "/hotel.jpg",
            technologies: ["React.js", "Tailwind CSS", "MySQL"],
            liveLink: "https://react-hotel-website.vercel.app/",
            githubLink: "https://github.com/Welderufael-Haile/react-hotel-website"
        },
        {
            title: "School managment system Website",
            description: "A modern SMS web app helps has three role based authentication 1,admin manage the overall school activity  2,teacher add students mark only his assigned subject. 3,students are also view result securely registration forms grading system and more",
            images: ["/school chart.png","/school.png"],
            technologies: ["Next.js", "Tailwind CSS", "MySQL", "chart.js","Express.js","multer"],
            liveLink: "https://dimondschool.vercel.app",
            githubLink: "https://github.com/Welderufael-Haile/full-stuck-food-delivery.git"
        },
        {
            title: "Digital-Library",
            description: "This is a digital library web app that allows users to register, login, and manage their books to download,open and add to their favoutite page to acces easily and admin can post books and manage users",
            images: ["/digital.png","/users.png","/video managment.png","/bookadmin.png"],
            technologies: ["Next.js", "Tailwind CSS","chart.js","MySQL", "Express.js","multer","prisma ORM"],
            liveLink: "https://bookstore-app-pearl.vercel.app/",
            githubLink: "https://github.com/Welderufael-Haile"
        },
        // Add more projects as needed
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        My Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience in web development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl gap-12">
                    {projects.map((project, index) => {
                        const images = project.images ?? (project.image ? [project.image] : []);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105"
                            >
                                <div className="relative w-full">
                                    {/* main hero image (clickable) */}
                                    {images[0] && (
                                        <div
                                            className="relative h-64 w-full cursor-pointer"
                                            onClick={() => openModal(images, 0)}
                                        >
                                            <Image src={images[0]} alt={project.title} fill className="object-cover" />
                                        </div>
                                    )}

                                    {/* thumbnails */}
                                    {images.length > 1 && (
                                        <div className="flex gap-2 p-3 overflow-x-auto bg-gray-50 dark:bg-gray-900">
                                            {images.map((img, imgIdx) => (
                                                <button
                                                    key={imgIdx}
                                                    onClick={() => openModal(images, imgIdx)}
                                                    className="relative h-20 w-32 flex-shrink-0 rounded-md overflow-hidden border hover:scale-105 transition"
                                                >
                                                    <Image src={img} alt={`${project.title} ${imgIdx + 1}`} fill className="object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Image Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                    <div className="relative max-w-5xl w-full">
                        <button
                            className="absolute top-3 right-3 text-white bg-gray-500 p-2 rounded-full"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <button
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-blue-500 hover:bg-blue-400 p-2 rounded-full"
                            onClick={prevImage}
                            aria-label="Previous"
                        >
                            ‹
                        </button>

                        <div className="w-full h-[60vh] flex items-center justify-center bg-gray-900 rounded">
                            {/* using next/image for modal */}
                            {modalImages[currentIndex] && (
                                <Image
                                    src={modalImages[currentIndex]}
                                    alt={`Image ${currentIndex + 1}`}
                                    width={1200}
                                    height={800}
                                    className="object-contain max-h-[60vh]"
                                />
                            )}
                        </div>

                        <button
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-blue-500 hover:bg-blue-400 p-2 rounded-full"
                            onClick={nextImage}
                            aria-label="Next"
                        >
                            ›
                        </button>

                        {/* small pager */}
                        <div className="mt-3 flex gap-2 justify-center overflow-x-auto">
                            {modalImages.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`relative h-14 w-24 flex-shrink-0 rounded overflow-hidden border ${i === currentIndex ? 'ring-2 ring-blue-500' : ''}`}
                                >
                                    <Image src={img} alt={`thumb ${i}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
