"use client"
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';

function LandingPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        setMessage('Thank you for signing up!');
    };

    return (
        <div className="landing-page">
            <Card>
                <CardHeader>
                    <h1>Welcome to Intel Apply</h1>
                    <p>Your one-stop solution for job applications and tracking.</p>
                </CardHeader>
                <CardContent>
                    <section className="preview">
                        <h2>What You Can Expect</h2>
                        <ul>
                            <li>Track your job applications</li>
                            <li>Get insights on your application status</li>
                            <li>Manage your job search efficiently</li>
                        </ul>
                    </section>
                </CardContent>
                <CardFooter>
                    <section className="waitlist">
                        <h2>Join Our Waitlist</h2>
                        <form onSubmit={handleSubmit}>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button type="submit">Sign Up</Button>
                        </form>
                        {message && <p>{message}</p>}
                    </section>
                </CardFooter>
            </Card>
        </div>
    );
}

export default LandingPage;