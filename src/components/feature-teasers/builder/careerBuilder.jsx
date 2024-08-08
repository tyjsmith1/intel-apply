import FeatureFeedbackLog from "./featureFeedbackLog";
import FeatureNetworkTracking from "./featureNetworkTracking";

export default function CareerBuilder() {
    return (
        <div className="py-12 text-center min-h-screen">
            <h2 className="text-3xl font-bold mb-6">For the Career Builder</h2>
            <div className="flex flex-col items-center space-y-8">
                <FeatureFeedbackLog />
                <FeatureNetworkTracking />
            </div>
        </div>
    );
}