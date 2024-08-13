import ButtonWaitlist from '../cta-btns/buttonWaitlist';
// import Logo from '../ui/logo';
import LogoSvg from '../ui/LogoSvg';

import {
    NavigationMenu,
    NavigationMenuList
} from "@/components/ui/navigation-menu";

export function Navbar() {
    return (
        <div className='w-full flex items-center justify-between p-2 bg-white shadow-md'>
            <div>
                {/* <a href="/" className="flex items-center flex-row text-2xl font-bold gradient-text">
                    <Logo /> Hire Ground
                </a> */}
                <a href='/'>
                    <LogoSvg />
                </a>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-6">
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
            <ButtonWaitlist />
            {/* <SignInOut /> */}
        </div>
    )
}