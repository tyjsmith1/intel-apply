import { FiCheckCircle } from "react-icons/fi";

export default function FeatureFeedbackLogDesktop() {
    return (
        <div className="flex flex-col items-center space-y-8">
            <div className="relative flex items-center justify-center"
            style={{
                minHeight: '600px',
                minWidth: '1000px'
            }}
            >
                {/* bottom layer */}
                <div className="absolute gradient-background-color-start rounded-3xl shadow-2xl z-10"
                    style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '700px',
                        maxHeight: '550px',
                        opacity: 0.6,
                        backdropFilter: 'blur(50px)',
                        transform: 'rotate(3deg)',
                        left: '-3%',
                        top: '0'
                    }}>    
                </div>
                {/* primary bottom layer */}
                <div className="absolute w-full max-w-xl z-20"
                    style={{
                        transform: 'rotate(-2deg)',
                        minWidth: '700px',
                        minHeight: '500px',
                        left: '-3%',
                        top: '3%'
                    }}>
                    <img
                        src="/landingimages/sneakPeakLogging.jpg"
                        alt="Feedback Log feature"
                        className="w-full h-auto rounded-lg shadow-2xl"
                        style={{
                            minWidth: '700px',
                            minHeight: '500px',
                        }}
                    />
                </div>
                {/* secondary bottom layer */}
                <div className="absolute gradient-background-color-end rounded-3xl shadow-2xl z-30"
                    style={{
                        width: '100%',
                        height: '55%',
                        maxWidth: '500px',
                        maxHeight: '450px',
                        opacity: 0.4,
                        backdropFilter: 'blur(50px)',
                        transform: 'rotate(3deg)',
                        left: '55%',
                        top: '25%',
                    }}>
                </div>
                {/* top layer */}
                <div className="relative bg-slate-200 p-6 rounded-xl shadow-2xl z-40"
                    style={{
                        maxWidth: '450px',
                        marginTop: '20px',
                        minWidth: '300px',
                        minHeight: '200px',
                        left: '30%',
                        transform: 'rotate(-1deg)',
                    }}>
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-4"><span className="text-2xl">🏆</span>Log Your Achievements</h3>
                        <p className="text-lg mb-4">
                            Easily keep a record of successes in your current roles, such as annual reviews, raises, and promotions. Hire Ground will auto-update resume copies based on these achievements.
                        </p>
                        <ul className="space-y-2">
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
            </div>
        </div>
    )
}