'use client';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Frontend Development": [
            { name: "HTML5", level: 90 },
            { name: "CSS3/SCSS", level: 85 },
            { name: "JavaScript", level: 88 },
            { name: "React.js", level: 85 },
            { name: "Next.js", level: 80 },
            { name: "Angular.js", level: 80 },
            { name: "Tailwind CSS", level: 85 },
        ],
        "Backend Development": [
            { name: "Node.js", level: 75 },
            { name: "Express.js", level: 78 },
            { name: "MongoDB", level: 75 },
            { name: "PostgreSQL", level: 70 },
        ],
        "Tools & Others": [
            { name: "Git", level: 85 },
            { name: "Docker", level: 70 },
            { name: "AWS", level: 65 },
            { name: "Firebase", level: 75 },
        ]
    };

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
                        My Skills
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Here are my technical skills and proficiency levels in various technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                                {category}
                            </h3>
                            <div className="space-y-4">
                                {categorySkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-blue-600 dark:text-blue-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                                className="bg-blue-600 h-2.5 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                        Other Skills
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "TypeScript",
                            "Redux",
                            "REST APIs",
                            "Responsive Design",
                            "UI/UX Design",
                            "Team Collaboration"
                        ].map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
