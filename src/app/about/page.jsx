"use client"

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

export default function About() {
    const { theme } = useTheme();

    const timelineEvents = [
        { date: "Spring 2024", description: "Founded out of frustration with managing multiple job applications across various platforms." },
        { date: "Summer 2024", description: "Landing Page launched and steadily gaining signups for beta launch" },
        { date: "Fall 2024", description: "Product launch!! 🚀" },
        // { date: "Today", description: "Continuously evolving to meet the needs of job seekers and career builders worldwide." },
    ];

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl relative">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="gradient-text text-4xl font-bold mb-6 text-center relative z-10 dark:text-white"
            >
                About Hire Ground
            </motion.h1>
            <div className="max-w-none relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="dark:text-gray-300 text-xl italic mb-12"
                >
                    Hire Ground is a comprehensive job application and career management platform designed to <span className="font-bold" style={{color: '#3479b6'}}>empower job seekers</span> and <span className="font-bold" style={{color: '#41bea5'}}>career builders</span>. Our mission is to simplify the job search process and help individuals track their professional growth.
                </motion.p>
                <motion.div 
                    className="my-12 p-6 gradient-background-color-reverse text-white rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold mb-4 !text-white flex items-center">
                        <GoGoal className="mr-3 text-4xl bg-white text-blue-500 rounded-full p-1 shadow-lg" />
                        <span>Our Mission</span>
                    </h2>
                    <p className="text-lg">
                        At Hire Ground, we believe that every job seeker deserves the tools and insights to navigate the job market confidently. Our mission is to simplify the job application process and empower professionals to take control of their career paths with data-driven insights and personalized guidance.
                    </p>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-bold mb-6 mt-20 inline-block relative"
                >
                    <span className={`relative z-10 text-6xl ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                        Meet The Team
                    </span>
                    <span className={`absolute bottom-0 left-0 w-full h-6 ${theme === 'dark' ? 'background-overlay-muted' : 'background-overlay'} -z-10 rounded-md`}></span>
                </motion.h2>
                <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
                    <motion.div 
                        className="flex-1 flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="relative group">
                            <Image
                                src="/images/tyler.png"
                                alt="Tyler Smith"
                                width={200}
                                height={200}
                                className="rounded-full mb-4 object-cover w-48 h-48 shadow-lg transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute bottom-0 right-0 text-4xl transition-transform duration-300 group-hover:rotate-12">🧙‍♂️</span>
                        </div>
                        <h3 className="font-bold mb-2 gradient-text-blue-teal !text-4xl name-shadow">Tyler Smith</h3>
                        <p className="text-center text-sm font-bold mb-4 px-4 py-1 rounded-full" style={{backgroundColor: '#1976D2', color: 'white'}}>Founder & Code Wizard</p>
                        <p className="mt-2 text-center">
                            Tyler conjures elegant solutions with his keyboard wand, transforming complex problems into user-friendly magic. His mission: to make job hunting less of a quest and more of an adventure!
                        </p>
                    </motion.div>
                    <motion.div 
                        className="flex-1 flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="relative group">
                            <Image
                                src="/images/dutch.png"
                                alt="Dutch"
                                width={200}
                                height={200}
                                className="rounded-full mb-4 object-cover w-48 h-48 shadow-lg transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute bottom-0 right-0 text-4xl transition-transform duration-300 group-hover:rotate-12">🐾</span>
                        </div>
                        <h3 className="font-bold mb-2 gradient-text-blue-teal !text-4xl name-shadow">Dutch</h3>
                        <p className="text-center text-sm font-bold mb-4 px-4 py-1 rounded-full" style={{backgroundColor: '#1976D2', color: 'white'}}>Chief Pawsitivity Officer</p>
                        <p className="mt-2 text-center">
                            Dutch's tail-wagging algorithm boosts team morale to 110%! This furry debugger sniffs out stress and dispenses cuddles faster than you can say "treat". With Dutch around, every code review is a walk in the park!
                        </p>
                    </motion.div>
                </div>
                <h2 className="font-bold mb-10 mt-20 inline-block relative">
                    <span className={`relative z-10 text-6xl ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>Our Story</span>
                    <span className={`absolute bottom-0 left-0 w-full h-6 ${theme === 'dark' ? 'background-overlay-muted' : 'background-overlay'} -z-10 rounded-md`}></span>
                </h2>
                <div className="p-6 rounded-lg shadow-inner mb-10" style={{backgroundColor: 'rgba(118, 200, 254, 0.1)'}}>
                    <FaQuoteLeft className="text-3xl mb-2" style={{color: '#3479b6'}} />
                    <p className="italic text-gray-700 dark:text-gray-300">
                        Hire Ground was born out of a need for a more efficient and insightful approach to job hunting. Frustrated with the lack of tools that combined job tracking with deep analytics, our founder, Tyler Smith, set out to create a solution that would do more than just store information.
                    </p>
                </div>
                <p className='mb-6'>After months of development and countless iterations, Hire Ground emerged as a <span className="font-bold" style={{color: '#41bea5'}}>powerful tool</span> designed for job seekers by someone who has been in their shoes. We understand the challenges of navigating the job market and are dedicated to making the process as smooth and effective as possible.</p>
                <div className="relative pl-8 mb-14">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="mb-6 flex relative">
                            {index !== timelineEvents.length - 1 && (
                                <div className="absolute left-[-5.75px] top-[0.8rem] h-[calc(100%+1.25rem)] border-l-4 border-blue-500 z-0"></div>
                            )}
                            <div className="w-5 h-5 bg-white border-4 border-blue-500 rounded-full absolute left-[-14px] top-[0.2rem] z-10"></div>
                            <p className="ml-4">
                                <strong className="text-blue-700">{event.date}:</strong> {event.description}
                            </p>
                        </div>
                    ))}
                </div>
                <h2 className="font-bold mb-10 mt-20 inline-block relative">
                    <span className={`relative z-10 text-6xl ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>What We Offer</span>
                    <span className={`absolute bottom-0 left-0 w-full h-6 ${theme === 'dark' ? 'background-overlay-muted' : 'background-overlay'} -z-10 rounded-md`}></span>
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pr-6 mb-10">
                    {[
                        { text: "Better job application tracking", color: '#1976D2' },
                        { text: "Career achievement logging", color: '#388E3C' },
                        { text: "Networking tools", color: '#7B1FA2' },
                        { text: "Insightful analytics", color: '#303F9F' },
                        { text: "Resume Management", color: '#00796B' }
                    ].map((item, index) => (
                        <motion.li 
                            key={item.text}
                            className="flex items-center justify-center sm:justify-start p-3 rounded-lg shadow"
                            style={{
                                backgroundColor: `${item.color}20`,
                                color: item.color,
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            <span className="mr-2 font-bold text-white bg-opacity-90 rounded-full w-6 h-6 flex items-center justify-center" style={{backgroundColor: item.color}}>✓</span>
                            <span className="font-medium">{item.text}</span>
                        </motion.li>
                    ))}
                </ul>
                <h2 className="font-bold mb-6 mt-20 inline-block relative">
                    <span className={`relative z-10 text-6xl ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>Our Vision</span>
                    <span className={`absolute bottom-0 left-0 w-full h-6 ${theme === 'dark' ? 'background-overlay-muted' : 'background-overlay'} -z-10 rounded-md`}></span>
                </h2>
                <p className='mb-10'>
                    At Hire Ground, we envision a world where <span className="font-bold underline">every professional</span> has the tools they need to navigate their career journey confidently. We're committed to <span className="italic" style={{color: '#3479b6'}}>continuous innovation</span> and <span className="italic" style={{color: '#41bea5'}}>improvement</span> to meet the evolving needs of job seekers and career builders.
                </p>
                <h2 className="font-bold mb-6 mt-20 inline-block relative">
                    <span className={`relative z-10 text-6xl ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>Join Us</span>
                    <span className={`absolute bottom-0 left-0 w-full h-6 ${theme === 'dark' ? 'background-overlay-muted' : 'background-overlay'} -z-10 rounded-md`}></span>
                </h2>
                <p className="text-lg">
                    Whether you're <span className="font-bold" style={{color: '#3479b6'}}>actively job hunting</span> or <span className="font-bold" style={{color: '#3c8b7b'}}>focusing on career growth</span>, Hire Ground is here to support your journey. Join our waitlist today and be among the first to experience the future of career management.
                </p>
            </div>
        </div>
    );
}