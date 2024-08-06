import { FiCheckCircle } from "react-icons/fi";

export default function FeatureAnalytics() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative mt-8">
            <div className="relative w-full h-auto">
                <img
                    src="/landingimages/strategic.jpg"
                    alt="Sneak Peak Graphs"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="text-left p-6">
                <h3 className="text-2xl font-bold mb-4"><span className="text-2xl">📈</span> Insights & Analytics</h3>
                <p className="text-lg mb-4">
                    Gain insights into your job search with analytics. Understand your application trends and success rates.
                </p>
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
            </div>
        </div>
    )
}