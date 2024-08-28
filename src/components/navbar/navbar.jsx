"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Menu, X } from 'lucide-react';
import ButtonWaitlist from '../cta-btns/buttonWaitlist';
import LogoSvg from '../ui/LogoSvg';
import ToggleThemeButton from '../ui/toggleThemeButton';

import useWindowSize from '@/hooks/useWindowSize';
import { useEffect, useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const { width } = useWindowSize();

    useEffect(() => {
        setIsMobile(width <= 768);
    }, [width]);

    return (
        <div className='w-full flex items-center justify-between p-2 shadow-md relative' style={{ background: 'var(--background-gradient)' }}>
            <div>
                <a href='/'>
                    <LogoSvg />
                </a>
            </div>
            {isMobile ? (
                <>
                    <button onClick={() => setIsOpen(!isOpen)} className="z-50">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    {isOpen && (
                        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40">
                            <nav className="fixed inset-y-0 right-0 w-3/4 bg-background shadow-xl z-50 flex flex-col p-6">
                                <NavigationMenu>
                                    <NavigationMenuList className="flex flex-col space-y-4">
                                        <NavigationMenuItem>
                                            <ButtonWaitlist />
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink href="#features" className="hover:text-gray-500 font-bold">Features</NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink href="/blog" className="hover:text-gray-500 font-bold">Blog</NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                <div className="mt-auto">
                                    <ToggleThemeButton />
                                </div>
                            </nav>
                        </div>
                    )}
                </>
            ) : (
                <NavigationMenu className="absolute left-1/2 transform -translate-x-1/2">
                    <NavigationMenuList className="flex space-x-6">
                        <NavigationMenuItem>
                            <div className='hidden sm:block'>
                                <ButtonWaitlist />
                            </div>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#features" className="hover:text-gray-500 font-bold">Features</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/blog" className="hover:text-gray-500 font-bold">Blog</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            )}
            {!isMobile && <ToggleThemeButton />}
        </div>
    )
}