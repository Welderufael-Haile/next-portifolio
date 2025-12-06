// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });

//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState({ status: '', message: '' });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Simulate form submission
//         try {
//             // Replace this with your actual form submission logic
//             await new Promise(resolve => setTimeout(resolve, 1500));

//             setSubmitStatus({
//                 status: 'success',
//                 message: 'Thank you! Your message has been sent successfully.'
//             });
//             setFormData({ name: '', email: '', subject: '', message: '' });
//         } catch (error) {
//             console.error("Error during form submission:", error); // Logs the error
//             setSubmitStatus({
//                 status: 'error',
//                 message: 'Oops! Something went wrong. Please try again later.'
//             });
//         }

//         finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <section className="py-20 bg-gray-50 dark:bg-gray-900">
//             <div className="container mx-auto px-4">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center mb-12"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
//                         Get In Touch
//                     </h2>
//                     <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                         Have a question or want to work together? Feel free to contact me!
//                     </p>
//                 </motion.div>

//                 <div className="max-w-4xl mx-auto">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {/* Contact Information */}
//                         <motion.div
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.5 }}
//                             className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
//                         >
//                             <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
//                                 Contact Information
//                             </h3>
//                             <div className="space-y-6">
//                                 <div className="flex items-start space-x-4">
//                                     <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>
//                                     <div>
//                                         <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h4>
//                                         <p className="text-gray-600 dark:text-gray-300">rufaelhaile14@gmail.com</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-4">
//                                     <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                     </svg>
//                                     <div>
//                                         <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h4>
//                                         <p className="text-gray-600 dark:text-gray-300">+251 984999493</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-4">
//                                     <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     </svg>
//                                     <div>
//                                         <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h4>
//                                         <p className="text-gray-600 dark:text-gray-300">Meklle Tigray, Ethiopia</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>

//                         {/* Contact Form */}
//                         <motion.div
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.5 }}
//                             className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
//                         >
//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 <div>
//                                     <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
//                                     <input
//                                         type="text"
//                                         id="subject"
//                                         name="subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="message" className="block  dark:text-gray-300 mb-2">Message</label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         required
//                                         rows="4"
//                                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                                     ></textarea>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className={`w-full py-3 px-6 rounded-lg text-white transition duration-300 ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
//                                         }`}
//                                 >
//                                     {isSubmitting ? 'Sending...' : 'Send Message'}
//                                 </button>
//                                 {submitStatus.message && (
//                                     <p className={`text-center ${submitStatus.status === 'success' ? 'text-green-600' : 'text-red-600'
//                                         }`}>
//                                         {submitStatus.message}
//                                     </p>
//                                 )}
//                             </form>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ 
        type: '', // 'success' or 'error'
        message: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        
        // Clear any previous messages when user starts typing
        if (submitStatus.message) {
            setSubmitStatus({ type: '', message: '' });
        }
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            return 'Name is required';
        }
        if (!formData.email.trim()) {
            return 'Email is required';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            return 'Please enter a valid email address';
        }
        if (!formData.message.trim()) {
            return 'Message is required';
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form
        const validationError = validateForm();
        if (validationError) {
            setSubmitStatus({
                type: 'error',
                message: validationError
            });
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setSubmitStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
            });
            
            // Reset form
            setFormData({ 
                name: '', 
                email: '', 
                subject: '', 
                message: '' 
            });
            
            // Clear success message after 6 seconds
            setTimeout(() => {
                setSubmitStatus({ type: '', message: '' });
            }, 6000);
            
        } catch (error) {
            console.error("Error during form submission:", error);
            
            // User-friendly error messages
            let errorMessage = 'Oops! Something went wrong. Please try again later.';
            
            if (error.message.includes('Failed to fetch')) {
                errorMessage = 'Network error. Please check your connection and try again.';
            } else if (error.message.includes('Rate limit')) {
                errorMessage = 'Too many attempts. Please wait a moment before trying again.';
            } else if (error.message) {
                errorMessage = error.message;
            }
            
            setSubmitStatus({
                type: 'error',
                message: errorMessage
            });
            
            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({ type: '', message: '' });
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        Have a project in mind? Feel free to reach out. I&apos;m always open to discussing new opportunities!
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                                    Contact Information
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                                            <a 
                                                href="mailto:rufaelhaile14@gmail.com" 
                                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            >
                                                rufaelhaile14@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Phone</h4>
                                            <a 
                                                href="tel:+251984999493" 
                                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            >
                                                +251 984 999 493
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Location</h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Mekelle, Tigray, Ethiopia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Social Links */}
                                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect with me</h4>
                                    <div className="flex space-x-4">
                                        {[
                                            { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                                            { name: 'GitHub', href: 'https://github.com/yourprofile', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                                            { name: 'Twitter', href: 'https://twitter.com/yourprofile', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                                        ].map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 hover:scale-110 transition-all duration-300"
                                                aria-label={social.name}
                                            >
                                                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d={social.icon} />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                                    Send me a message
                                </h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                                Your Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                                            placeholder="Hello, I'd like to discuss a project..."
                                        ></textarea>
                                    </div>
                                    
                                    <div className="flex items-center justify-between pt-4">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            * Required fields
                                        </p>
                                        
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                                                isSubmitting 
                                                    ? 'bg-gray-400 cursor-not-allowed' 
                                                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                                            }`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </div>
                                    
                                    {submitStatus.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded-xl ${
                                                submitStatus.type === 'success' 
                                                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                                                    : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                                            }`}
                                        >
                                            <div className="flex items-start">
                                                <div className={`flex-shrink-0 w-5 h-5 mt-0.5 ${
                                                    submitStatus.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                                                }`}>
                                                    {submitStatus.type === 'success' ? (
                                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : (
                                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div className="ml-3">
                                                    <p className={`text-sm font-medium ${
                                                        submitStatus.type === 'success' 
                                                            ? 'text-green-800 dark:text-green-300' 
                                                            : 'text-red-800 dark:text-red-300'
                                                    }`}>
                                                        {submitStatus.message}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;