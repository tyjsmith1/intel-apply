import FeatureAnalytics from "./featureAnalytics";
import FeatureAppTracker from "./featureAppTracker";

export default function JobHunter() {
    return (
        <div className="py-12 text-center min-h-screen">
            <h2 className="text-3xl font-bold mb-6">For the Job Hunter</h2>
            <div className="flex flex-col items-center space-y-8">
                <FeatureAppTracker />
                <FeatureAnalytics />
            </div>
        </div>
    );
}