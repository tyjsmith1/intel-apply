import { FiCheckCircle } from "react-icons/fi";

export default function FeatureFeedbackLogMobile() {
    return (
        <div className="p-4 rounded-lg shadow-lg m-4" style={{ background: 'var(--card-gradient-bg)'}}>
            <div className="text-center">
                <h3 className="text-xl font-bold mb-3 flex justify-center items-center">
                    <span className="text-2xl mr-2">🏆</span>
                    <span>Log Your Achievements</span>
                </h3>
                <img
                        src="/landingimages/sneakPeakLogging.jpg"
                        alt="Sneak Peak Logging"
                        className="w-full h-auto rounded-lg shadow-2xl"
                />
                <p className="text-base my-4">
                Easily keep a record of successes in your current roles, such as annual reviews, raises, and promotions. Hire Ground will auto-update resume copies based on these achievements.
                </p>
                <ul className="space-y-3 flex flex-col items-center">
                    <li className="flex items-center text-sm">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Record achievements as they happen
                    </li>
                    <li className="flex items-center text-sm">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Auto-update resume copies
                    </li>
                    <li className="flex items-center text-sm">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        Prepare for annual reviews
                    </li>
                </ul>
            </div>
        </div>
    )
}