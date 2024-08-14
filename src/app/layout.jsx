import { Navbar } from "@/components/navbar/navbar";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from 'next-themes';
import { Inter as FontSans } from 'next/font/google';
import '../app/globals.css';

const fontSans = FontSans({ 
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: 'Hire Ground - Job Tracker & Career Management App',
    description: 'Hire Ground helps job seekers organize their job applications, track progress, and gain insights with powerful analytics. Keep your career journey on track and never miss an opportunity.',
    openGraph: {
        title: 'Hire Ground - Job Tracker & Career Management App',
        description: 'Track job applications, manage resumes, and gain career insights with Hire Ground. Stay organized and boost your job search success.',
        url: 'https://hireground.app',
        type: 'website',
        images: [
            {
                url: '/images/thumbnail.png',
                width: 1200,
                height: 630,
                alt: 'Hire Ground Thumbnail',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hire Ground - Job Tracker & Career Management App',
        description: 'Boost your job search success with Hire Ground. Organize job applications, track progress, and gain valuable insights.',
        images: ['/images/thumbnail.png'],
    },
    icons: {
        icon: '/favicon_io/favicon.ico',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <ClerkProvider>
                <body suppressHydrationWarning className={cn("min-h-screen font-sans antialiased", fontSans.variable)} style={{ backgroundColor: 'var(--background)' }}>
                    <ThemeProvider attribute="class">
                        <Navbar />
                        <main>{children}</main>
                    </ThemeProvider>
                    <Analytics/>
                </body>
            </ClerkProvider>
            </html>
    );
}