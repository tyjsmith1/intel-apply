"use client"

import { ChevronRight, Menu, X } from 'lucide-react';
import LogoSvg from '../ui/LogoSvg';
import ToggleThemeButton from '../ui/toggleThemeButton';

import useWindowSize from '@/hooks/useWindowSize';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const { width } = useWindowSize();
    const pathname = usePathname();

    useEffect(() => {
        setIsMobile(width <= 768);
    }, [width]);

    const isHomepage = pathname === '/';

    const handleNavigation = () => {
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className='w-full flex items-center justify-between p-2 shadow-md relative' style={{ background: 'var(--background-gradient)' }}>
            <div>
                <a href='/'>
                    <LogoSvg />
                </a>
            </div>
            {isMobile ? (
                <>
                    <button onClick={toggleMenu} className="z-50 p-2 relative" aria-label="Toggle menu">
                        {isOpen ? (
                            <X size={24} className="text-foreground" />
                        ) : (
                            <Menu size={24} className="text-foreground" />
                        )}
                    </button>
                    <div className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        style={{ background: 'var(--background-gradient)' }}>
                        <nav className={`fixed inset-y-0 right-0 w-full flex flex-col p-6 pt-16 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className="flex flex-col space-y-6 items-left">
                                {['Join the Waitlist', 'Features', 'Blog'].map((item, index) => (
                                    <a key={item}
                                        href={item === 'Join the Waitlist' ? '#signup' : item === 'Features' ? '#features' : '/blog'}
                                        onClick={handleNavigation}
                                        className={`text-xl font-semibold flex items-center justify-between p-3 border rounded-md transition-all duration-300 ease-in-out ${
                                            item === 'Join the Waitlist'
                                                ? 'text-2xl font-black gradient-background-color border-primary'
                                                : 'text-foreground hover:text-muted-foreground border-foreground'
                                        }`}
                                        style={{
                                            transitionDelay: `${index * 100}ms`,
                                            opacity: isOpen ? 1 : 0,
                                            transform: isOpen ? 'translateX(0)' : 'translateX(20px)'
                                        }}
                                    >
                                        {item}
                                        <ChevronRight size={20} className={item === 'Join the Waitlist' ? 'gradient-text' : ''} />
                                    </a>
                                ))}
                                <div className="transition-all duration-300 ease-in-out mt-4"
                                    style={{
                                        transitionDelay: '300ms',
                                        opacity: isOpen ? 1 : 0,
                                        transform: isOpen ? 'translateX(0)' : 'translateX(20px)'
                                    }}>
                                    <ToggleThemeButton />
                                </div>
                            </div>
                        </nav>
                    </div>
                </>
            ) : (
                <div className="flex items-center space-x-4">
                    {isHomepage && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
                            <a href="#features" className="hover:text-muted-foreground font-bold">Features</a>
                            <a href="/blog" className="hover:text-muted-foreground font-bold">Blog</a>
                        </div>
                    )}
                    <ToggleThemeButton />
                </div>
            )}
        </div>
    )
}