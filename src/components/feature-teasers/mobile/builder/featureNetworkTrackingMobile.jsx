import { FiCheckCircle } from "react-icons/fi";

export default function FeatureAppTrackerMobile() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg m-4">
            <div className="text-center">
                <h3 className="text-xl font-bold mb-3 flex justify-center items-center">
                    <span className="text-2xl mr-2">🤝</span>
                    <span>Network Like a Pro</span>
                </h3>
                <img
                        src="/landingimages/sneakPeakNetwork.jpg"
                        alt="Sneak Peak Network"
                        className="w-full h-auto rounded-lg shadow-2xl"
                />
                <p className="text-base my-4 text-gray-700">
                Track outreach and follow-ups to boost networking and job opportunities.
                </p>
                <ul className="space-y-3 flex flex-col items-center">
                    <li className="flex items-center text-sm text-gray-800">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Manage networking activity
                    </li>
                    <li className="flex items-center text-sm text-gray-800">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Keep records of communications
                    </li>
                    <li className="flex items-center text-sm text-gray-800">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Find job opportunities through connections
                    </li>
                </ul>
            </div>
        </div>
    )
}