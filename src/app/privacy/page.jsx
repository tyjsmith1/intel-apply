'use client'

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Privacy() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl relative">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-4xl font-bold mb-6 text-center relative z-10 ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}
            >
                Privacy Policy
            </motion.h1>
            <div className="max-w-none relative z-10 prose dark:prose-invert">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className={`font-bold mb-6 mt-20 inline-block relative ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                    1. Introduction
                </h2>
                <p>
                    Welcome to Hire Ground ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.hireground.com] and use our services.
                </p>

                <h2 className={`font-bold mb-6 mt-20 inline-block relative ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                    2. Information We Collect
                </h2>
                <p>We collect personal information that you provide to us, such as:</p>
                <ul>
                    <li>Name and contact information</li>
                    <li>Account credentials</li>
                    <li>Professional information (e.g., resume details, job applications)</li>
                    <li>Communication data between you and Hire Ground</li>
                </ul>
                <p>We also automatically collect certain information when you visit our website, including:</p>
                <ul>
                    <li>Usage data (e.g., pages visited, time spent on pages)</li>
                    <li>Device information (e.g., IP address, browser type)</li>
                    <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2 className={`font-bold mb-6 mt-20 inline-block relative ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                    3. How We Use Your Information
                </h2>
                <p>We use your personal information to:</p>
                <ul>
                    <li>Provide and maintain our services</li>
                    <li>Improve and personalize user experience</li>
                    <li>Communicate with you about our services</li>
                    <li>Analyze usage patterns and trends</li>
                    <li>Protect against fraudulent or illegal activity</li>
                </ul>

                <h2 className={`font-bold mb-6 mt-20 inline-block relative ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                    4. Sharing Your Information
                </h2>
                <p>We may share your information with:</p>
                <ul>
                    <li>Service providers and business partners who help us deliver our services</li>
                    <li>Legal and regulatory authorities, when required by law</li>
                    <li>Potential buyers in the event of a business sale or merger</li>
                </ul>
                <p>We do not sell your personal information to third parties.</p>

                <h2 className={`font-bold mb-6 mt-20 inline-block relative ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                    5. Data Security
                </h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                <h2 className={`font-bold mb-6 mt-20 inline-block relative ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                    6. Your Rights and Choices
                </h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul>
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information</li>
                    <li>Objection to or restriction of certain processing activities</li>
                    <li>Data portability</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>

                <h2 className={`font-bold mb-6 mt-20 inline-block relative ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                    7. Children's Privacy
                </h2>
                <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we may have collected information about a child, please contact us immediately.</p>

                <h2 className={`font-bold mb-6 mt-20 inline-block relative ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                    8. Changes to This Privacy Policy
                </h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

                <h2 className={`font-bold mb-6 mt-20 inline-block relative ${theme === 'dark' ? 'gradient-text-bright' : 'gradient-text'}`}>
                    9. Contact Us
                </h2>
                <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                <p>
                    {/* Hire Ground<br />
                    [Your Address]<br /> */}
                    Email: privacy@hireground.com<br />
                    {/* Phone: [Your Phone Number] */}
                </p>
            </div>
        </div>
    );
}
