import { FiCheckCircle } from "react-icons/fi";

export default function FeatureAppTrackerMobile() {
    return (
        <div className="p-4 rounded-lg shadow-lg mx-4" style={{ background: 'var(--card-gradient-bg)'}}>
            <div className="text-center">
                <h3 className="text-xl font-bold mb-3 flex justify-center items-center">
                    <span className="text-2xl mr-2">🧮</span>
                    <span>Track Applications</span>
                </h3>
                <img
                        src="/landingimages/sneakPeakTable.png"
                        alt="Sneak Peak Table"
                        className="w-full h-auto rounded-lg shadow-2xl"
                />
                <p className="text-base my-4">
                    Stay organized and keep track of all your job applications in one place. Never miss a deadline again.
                </p>
                <ul className="space-y-3 flex flex-col items-center">
                    <li className="flex items-center text-sm">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Organize by status and date
                    </li>
                    <li className="flex items-center text-sm">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Get reminders for follow-ups
                    </li>
                    <li className="flex items-center text-sm">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Manage multiple resumes
                    </li>
                </ul>
            </div>
        </div>
    )
}