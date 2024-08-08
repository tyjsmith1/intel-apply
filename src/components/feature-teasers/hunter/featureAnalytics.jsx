import { FiCheckCircle } from "react-icons/fi";

export default function FeatureAnalytics() {
    return (
        <div className="relative flex items-center justify-center"
            style={{
                minHeight: '600px',
                minWidth: '1000px'
            }}
        >
            {/* bottom layer */}
            <div className="absolute gradient-background-color-end rounded-3xl shadow-2xl z-10"
                style={{
                    width: '110%',
                    height: '110%',
                    maxWidth: '850px',
                    maxHeight: '550px',
                    opacity: 0.6,
                    backdropFilter: 'blur(50px)',
                    transform: 'rotate(3deg)',
                    left: '23%',
                    top: '3%'
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
                    src="/landingimages/sneakPeakAnalytics.jpg"
                    alt="Sneak Peak Graphs"
                    className="w-full h-auto rounded-lg shadow-2xl"
                    style={{
                        minWidth: '800px',
                        minHeight: '400px',
                    }}
                />
            </div>
            {/* secondary bottom layer */}
            <div className="absolute gradient-background-color-start rounded-3xl shadow-2xl z-30"
                style={{
                    width: '100%',
                    height: '55%',
                    maxWidth: '500px',
                    maxHeight: '450px',
                    opacity: 0.4,
                    backdropFilter: 'blur(50px)',
                    transform: 'rotate(3deg)',
                    left: '-5%',
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
                    left: '-30%',
                    transform: 'rotate(-1deg)',
                }}>
                <div className="text-left">
                    <h3 className="text-2xl font-bold mb-4"><span className="text-2xl">📈</span> Insights & Analytics</h3>
                    <p className="text-lg mb-4">
                        Gain insights into your job search with analytics. Understand your application trends and success rates.
                    </p>
                    <ul className="space-y-2">
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
        </div>
    )
}