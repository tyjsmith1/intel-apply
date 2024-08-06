import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FiCheckCircle } from "react-icons/fi";

export default function JobHunterSection() {
    return (
        <div className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-6">For the Job Hunter</h2>
            <div className="flex flex-wrap justify-center gap-8">
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle>Track Your Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Stay organized and keep track of all your job applications in one place. Never miss a deadline again.
                        </CardDescription>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                Organize by status and date
                            </li>
                            <li className="flex items-center">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                Get reminders for follow-ups
                            </li>
                            <li className="flex items-center">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                Manage multiple resumes
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle>Insights & Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Gain insights into your job search with analytics. Understand your application trends and success rates.
                        </CardDescription>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                View success rates
                            </li>
                            <li className="flex items-center">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                Analyze your job search activity
                            </li>
                            <li className="flex items-center">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                Get personalized tips
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}