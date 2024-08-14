import { Navbar } from "@/components/navbar/navbar";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from 'next-themes';
import { Inter as FontSans } from 'next/font/google';
import Head from "next/head";
import '../app/globals.css';

const fontSans = FontSans({ 
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
                <html lang="en" suppressHydrationWarning>
                    <Head>
                        <title>Hire Ground - Job Tracker & Career Management App</title>
                        <meta name="description" content="Hire Ground helps job seekers organize their job applications, track progress, and gain insights with powerful analytics. Keep your career journey on track and never miss an opportunity." />
                        <meta property="og:title" content="Hire Ground - Job Tracker & Career Management App" />
                        <meta property="og:description" content="Track job applications, manage resumes, and gain career insights with Hire Ground. Stay organized and boost your job search success." />
                        <meta property="og:image" content="/thumbnail.png" />
                        <meta property="og:url" content="https://hireground.app" />
                        <meta property="og:type" content="website" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Hire Ground - Job Tracker & Career Management App" />
                        <meta name="twitter:description" content="Boost your job search success with Hire Ground. Organize job applications, track progress, and gain valuable insights." />
                        <meta name="twitter:image" content="/thumbnail.png" />
                        <meta name="twitter:url" content="https://hireground.app" />
                        <link rel="icon" href="/favicon.png" type="image/png" />
                    </Head>
                    <body suppressHydrationWarning className={cn("min-h-screen font-sans antialiased", fontSans.variable)} style={{ backgroundColor: 'var(--background)' }}>
                        <ThemeProvider attribute="class">
                            <Navbar />
                            <main>{children}</main>
                        </ThemeProvider>
                        <Analytics/>
                    </body>
                </html>
        </ClerkProvider>
    );
}
