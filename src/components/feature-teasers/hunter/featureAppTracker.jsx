import { FiCheckCircle } from "react-icons/fi";

export default function FeatureAppTracker() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
            <div className="relative w-full h-auto">
                <img
                    src="/landingimages/sneakPeakTable.png"
                    alt="Sneak Peak Table"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="text-left p-6">
                <h3 className="text-2xl font-bold mb-4"><span className="text-2xl">🧮</span> Track Applications</h3>
                <p className="text-lg mb-4">
                    Stay organized and keep track of all your job applications in one place. Never miss a deadline again.
                </p>
                <ul className="space-y-2">
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
            </div>
        </div>
    )
}
