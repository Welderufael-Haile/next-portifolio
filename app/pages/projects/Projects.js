'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: "Personal portifolio in next js",
            description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB",
            image: "/profile1.png",
            technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Welderufael-Haile/next-portifolio"
        },
        {
            title: "food delivery web app",
            description: "i build online food delivey web with next js  ",
            image: "/food.png",
            technologies: ["next js", "context api", "mySQL", "tailwindcss","clerk"],
            liveLink: "https://project2.com",
            githubLink: "https://github.com/Welderufael-Haile/full-stuck-food-delivery"
        },
       
        {
            title: "Ecommerce web app",
            description: "A modern ecommerce website showcasing products and features",
            image: "/fashion.png",
            technologies: ["Next.js", "Tailwind CSS","express js", "maysql","node js"],
            liveLink: "https://project3.com",
            githubLink: "https://github.com/username/project3"
        },
        {
            title: "hotel Website",
            description: "A modern hotel website showcasing rooms and aminities",
            image: "/hotel.jpg",
            technologies: ["react.js", "Tailwind CSS", "my sql"],
            liveLink: "https://project3.com",
            githubLink: "https://github.com/Welderufael-Haile/react-hotel-website"
        },
        {
            title: "portfolio Website with angular js",
            description: "A modern portfolio website showcasing my work and skills",
            image: "/profile1.png",
            technologies: ["angular.js", "Tailwind CSS", "typescript"],
            liveLink: "https://project3.com",
            githubLink: "https://github.com/Welderufael-Haile/my-portifolio-with-angular"

        },
        {
            title: "School managment system Website",
            description: "A modern SMS web app showcasing students and teachers detail,students registration forms grading system and more ",
            image: "/school.jpg",
            technologies: ["Next.js", "Tailwind CSS", "mySQL",'express js','multer'],
            liveLink: "https://project3.com",
            githubLink: "https://github.com/Welderufael-Haile/full-stuck-food-delivery.git"
        },
        {
            title: "Employee Registration Form",
            description: "A simple and multi steps employee registration form with validation ",
            image: "/registration.jpg",
            technologies: ["Next.js", "Tailwind CSS", "mySQL "],
            liveLink: "https://project3.com",
            githubLink: "https://github.com/Welderufael-Haile/nextjs-registration-form.git"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
