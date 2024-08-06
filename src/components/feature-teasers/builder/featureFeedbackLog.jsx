import { FiCheckCircle } from "react-icons/fi";

export default function FeatureFeedbackLog() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative mt-8">
            <div className="relative w-full h-auto">
                <img
                    src="/landingimages/sneakPeakLogging.jpg"
                    alt="Feedback Log feature"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="text-left p-6">
                <h3 className="text-2xl font-bold mb-4"><span className="text-2xl">🏆</span> Log Your Achievements</h3>
                <p className="text-lg mb-4">
                    Easily keep a record of successes in your current roles, such as annual reviews, raises, and promotions. Hire Ground will auto-update resume copies based on these achievements.
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Record achievements as they happen
                    </li>
                    <li className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Auto-update resume copies
                    </li>
                    <li className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Prepare for annual reviews
                    </li>
                </ul>
            </div>
        </div>
    )
}