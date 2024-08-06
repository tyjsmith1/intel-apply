import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../../components/ui/card';
import { Input } from '../../components/ui/input';

export default function TempCard() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the email to your backend
        setMessage('Thank you for signing up!');
    };

    return (
        <Card className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-blue-500 text-white p-6">
                <h1 className='text-3xl font-bold'>Welcome to Hire Ground</h1>
                <p className='mt-2'>Your one-stop solution for job applications and tracking.</p>
            </CardHeader>
            <CardContent className="p-6">
                <section className="preview mb-6">
                    <h2 className='text-2xl font-semibold mb-4'>What You Can Expect</h2>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>Track your job applications</li>
                        <li>Get insights on your application status</li>
                        <li>Manage your job search efficiently</li>
                    </ul>
                </section>
                <section className="testimonials mb-6">
                    <h2 className="text-2xl font-semibold mb-4">What Our Users Say</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>"This platform has revolutionized my job search!" - Jane Doe</li>
                        <li>"I love the insights and tracking features." - John Smith</li>
                        <li>"A must-have tool for job seekers." - Emily Johnson</li>
                    </ul>
                </section>
            </CardContent>
            <CardFooter className="bg-gray-50 p-6">
                <section className="waitlist w-full">
                    <h2 className="text-2xl font-semibold mb-4">Join Our Waitlist</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <Button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                            Sign Up
                        </Button>
                    </form>
                    {message && <p className="mt-4 text-green-500">{message}</p>}
                </section>
            </CardFooter>
        </Card>
    )
}