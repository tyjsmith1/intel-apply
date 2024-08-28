import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import LogoSvg from '../ui/LogoSvg';

export default function Footer() {
    return (
        <footer className="w-full py-6 mt-12" style={{ background: 'var(--background-gradient)' }}>
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
                <Link href="/" className="inline-block">
                    <LogoSvg />
                </Link>
                <p className="text-sm mt-2">© {new Date().getFullYear()} Hire Ground. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="hover:text-gray-500">About</Link>
                <Link href="/blog" className="hover:text-gray-500">Blog</Link>
                {/* <Link href="#features" className="hover:text-gray-500">Features</Link> */}
                <Link href="/privacy" className="hover:text-gray-500">Privacy Policy</Link>
            </div>
            <div className="flex space-x-6">
                <a href="https://github.com/tyjsmith1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <FaGithub size={24} />
                </a>
                <a href="https://x.com/tsmiffff" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <FaXTwitter size={24} />
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