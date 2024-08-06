import FeatureFeedbackLog from "./featureFeedbackLog";
import FeatureNetworkTracking from "./featureNetworkTracking";

export default function CareerBuilder() {
    return (
        <div  className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-6">For the Career Builder</h2>
            <FeatureFeedbackLog />
            <FeatureNetworkTracking />
        </div>
    );
}