import { FiCheckCircle } from "react-icons/fi";

export default function FeatureAppTrackerMobile() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg m-4">
            <div className="text-center">
                <h3 className="text-xl font-bold mb-3 flex justify-center items-center">
                    <span className="text-2xl mr-2">📈</span>
                    <span>Insights & Analytics</span>
                </h3>
                <img
                        src="/landingimages/sneakPeakAnalytics.jpg"
                        alt="Sneak Peak Analytics"
                        className="w-full h-auto rounded-lg shadow-2xl"
                />
                <p className="text-base my-4 text-gray-700">
                Gain insights into your job search with analytics. Understand your application trends and success rates.
                </p>
                <ul className="space-y-3 flex flex-col items-center">
                    <li className="flex items-center text-sm text-gray-800">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        View success rates
                    </li>
                    <li className="flex items-center text-sm text-gray-800">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Analyze your job search activity
                    </li>
                    <li className="flex items-center text-sm text-gray-800">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Get personalized tips
                    </li>
                </ul>
            </div>
        </div>
    )
}