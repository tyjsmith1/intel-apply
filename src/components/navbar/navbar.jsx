import ButtonWaitlist from '../cta-btns/buttonWaitlist';
import LogoSvg from '../ui/LogoSvg';
import ToggleThemeButton from '../ui/toggleThemeButton';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "@/components/ui/navigation-menu";

export function Navbar() {
    return (
        <div className='w-full flex items-center justify-between p-2 shadow-md' style={{ background: 'var(--background-gradient)' }}>
            <div>
                <a href='/'>
                    <LogoSvg />
                </a>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-6">
                    <NavigationMenuItem>
                        <ToggleThemeButton />
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem>
                        <NavigationMenuLink href="#features" className="hover:text-gray-500">Features</NavigationMenuLink>
                    </NavigationMenuItem> */}
                    {/* <NavigationMenuItem>
                        <NavigationMenuLink href="/blog" className="hover:text-gray-500">Blog</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/about" className="hover:text-gray-500">About</NavigationMenuLink>
                    </NavigationMenuItem> */}
                </NavigationMenuList>
            </NavigationMenu>
            <div className='hidden sm:block'>
                <ButtonWaitlist />
            </div>
            {/* <SignInOut /> */}
        </div>
    )
}