import { cn } from "@/lib/utils";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs';
import { Inter as FontSans } from 'next/font/google';
import '../app/globals.css';

const fontSans = FontSans({ 
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
