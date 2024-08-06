import FeatureAnalytics from "./featureAnalytics";
import FeatureAppTracker from "./featureAppTracker";

export default function JobHunter() {
    return (
        <div className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-6">For the Job Hunter</h2>
            <FeatureAppTracker />
            <FeatureAnalytics />
        </div>
    );
}