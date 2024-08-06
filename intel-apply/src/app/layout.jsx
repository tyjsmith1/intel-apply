import { Navbar } from "@/components/navbar/navbar";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs';
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
                <body className={cn("min-h-screen bg-background font-sans antialiased bg-gray-100", fontSans.variable)}>
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
