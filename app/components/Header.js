'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '../context/ThemeProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg z-50">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                        WellSolution
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">

                        <Link href="/pages/about" className="hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-lg transition duration-300">
                            About
                        </Link>
                        <Link href="/pages/skills" className="hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-lg transition duration-300">
                            Skills
                        </Link>
                        <Link href="/pages/projects" className="hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-lg transition duration-300">
                            Projects
                        </Link>
                        <Link href="/pages/contact" className="hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-lg transition duration-300">
                            Contact
                        </Link>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full  hover:bg-gray-200 z-10 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Theme Toggle (visible on small screens) */}
                    <button
                        onClick={toggleTheme}
                        className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black dark:text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4 text-center">
                        {/* <Link href="/"
                            className="block hover:text-blue-400 transition duration-300"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link> */}
                        <Link href="/pages/about"
                            className="block hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-lg transition duration-300"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                        <Link href="/pages/skills"
                            className="block hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-lg transition duration-300"
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                        <Link href="/pages/projects"
                            className="block hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-lg transition duration-300"
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                        <Link href="/pages/contact"
                            className="block hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-lg transition duration-300"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>

                        {/* Theme toggle inside mobile menu */}
                        <div className="pt-2">
                            <button
                                onClick={() => { toggleTheme(); toggleMenu(); }}
                                className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? (
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                    </svg>
                                )}
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Toggle Theme</span>
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
