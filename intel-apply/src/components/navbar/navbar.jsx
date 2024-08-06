import ButtonWaitlist from '../cta-btns/buttonWaitlist';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";

export function Navbar() {
    return (
        <div className='w-full flex items-center justify-between p-2 bg-white shadow-md'>
            <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-gradient-to-r from-gradientStart to-gradientEnd">Hire Ground</a>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-6">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#features" className="hover:text-gray-500">Features</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#blog" className="hover:text-gray-500">Blog</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#about" className="hover:text-gray-500">About</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <ButtonWaitlist />
            {/* <SignInOut /> */}
        </div>
    )
}