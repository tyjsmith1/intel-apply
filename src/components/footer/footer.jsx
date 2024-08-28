import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full h-24 py-6 mt-12" style={{ background: 'var(--background-gradient)' }}>
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center h-full">
            <div className="mb-4 md:mb-0">
                <Link href="/" className="text-2xl font-bold gradient-text">
                Hire Ground
                </Link>
                <p className="text-sm mt-2">© {new Date().getFullYear()} Hire Ground. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
                <Link href="/about" className="hover:text-gray-500 mb-2 md:mb-0">About</Link>
                <Link href="/blog" className="hover:text-gray-500 mb-2 md:mb-0">Blog</Link>
                <Link href="#features" className="hover:text-gray-500 mb-2 md:mb-0">Features</Link>
                <Link href="/privacy" className="hover:text-gray-500 mb-2 md:mb-0">Privacy Policy</Link>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://github.com/tyjsmith1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <FaGithub size={24} />
                </a>
                <a href="https://x.com/tsmiffff" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <FaTwitter size={24} />
                </a>
                <a href="https://www.linkedin.com/in/tyler-smith-pm-se/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <FaLinkedin size={24} />
                </a>
            </div>
            </div>
        </div>
        </footer>
    );
}