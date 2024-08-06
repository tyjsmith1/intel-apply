import { FiCheckCircle } from "react-icons/fi";

export default function FeatureNetworkTracking() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative mt-8">
            <div className="relative w-full h-auto">
                <img
                    src="/landingimages/sneakPeakNetwork.jpg"
                    alt="Feedback Log feature"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="text-left p-6">
                <h3 className="text-2xl font-bold mb-4"><span className="text-4xl">🤝</span> Network Like a Pro</h3>
                <p className="text-lg mb-4">
                    Effectively track your outreach and follow-ups with industry contacts, improving your networking efforts and increasing your chances of finding job opportunities through connections.
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Track and manage networking efforts, including outreach to contacts, follow-ups, and networking events.
                    </li>
                    <li className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Maintain a record of communication history with potential employers and industry contacts.
                    </li>
                    <li className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Increase chances of finding job opportunities through connections.
                    </li>
                </ul>
            </div>
        </div>
    )
}