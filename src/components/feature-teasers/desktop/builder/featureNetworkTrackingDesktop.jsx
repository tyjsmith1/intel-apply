import { FiCheckCircle } from "react-icons/fi";

export default function FeatureNetworkTrackingDesktop() {
    return (
        <div className="flex flex-col items-center space-y-8">
            <div className="relative flex items-center justify-center"
                style={{
                    minHeight: '600px',
                    minWidth: '1000px'
                }}
                >
                    {/* bottom layer */}
                    <div className="absolute rounded-3xl shadow-2xl z-10"
                        style={{
                            width: '100%',
                            height: '100%',
                            maxWidth: '800px',
                            maxHeight: '550px',
                            opacity: 0.8,
                            backdropFilter: 'blur(50px)',
                            transform: 'rotate(3deg)',
                            left: '25%',
                            top: '0',
                            background: 'var(--feature-div-bg-color-secondary)'
                        }}>    
                    </div>
                    {/* primary bottom layer */}
                    <div className="absolute w-full max-w-3xl z-20"
                        style={{
                            transform: 'rotate(-2deg)',
                            minWidth: '600px',
                            minHeight: '400px',
                            left: '25%',
                            top: '3%'
                        }}>
                        <img
                            src="/landingimages/sneakPeakNetwork.jpg"
                            alt="Feedback Log feature"
                            className="w-full h-auto rounded-lg shadow-2xl"
                            style={{
                                minWidth: '800px',
                                minHeight: '400px',
                            }}
                        />
                    </div>
                    {/* secondary bottom layer */}
                    <div className="absolute rounded-3xl shadow-2xl z-30"
                        style={{
                            width: '100%',
                            height: '55%',
                            maxWidth: '500px',
                            maxHeight: '300px',
                            opacity: 0.8,
                            backdropFilter: 'blur(50px)',
                            transform: 'rotate(3deg)',
                            left: '5%',
                            top: '27%',
                            background: 'var(--feature-div-bg-color-primary)'
                        }}>
                    </div>
                    {/* top layer */}
                    <div className="relative p-6 rounded-xl shadow-2xl z-40"
                        style={{
                            maxWidth: '450px',
                            marginTop: '20px',
                            minWidth: '300px',
                            minHeight: '200px',
                            left: '-20%',
                            transform: 'rotate(-1deg)',
                            background: 'var(--card)'
                        }}>
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-4"><span className="text-4xl">🤝</span> Network Like a Pro</h3>
                        <p className="text-lg mb-4">
                            Track outreach and follow-ups to boost networking and job opportunities.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                Manage networking activity
                            </li>
                            <li className="flex items-center">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                Keep records of communications
                            </li>
                            <li className="flex items-center">
                                <FiCheckCircle className="text-green-500 mr-2" />
                                Find job opportunities through connections
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}