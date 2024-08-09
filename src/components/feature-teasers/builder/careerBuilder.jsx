import MultiWaveSvg from '../../ui/multiWaveSvg';
import HeroBuilder from '../builder/heroBuilder';
import FeatureFeedbackLog from "./featureFeedbackLog";
import FeatureNetworkTracking from "./featureNetworkTracking";

export default function CareerBuilder() {
    return (
        <section>
            <div className="wave">
                <MultiWaveSvg />
            </div>
            <div className="relative py-12 text-center mt-10">
                <HeroBuilder />
                <div className="flex flex-col items-center space-y-8">
                    <FeatureFeedbackLog />
                    <FeatureNetworkTracking />
                </div>
            </div>
        </section>
    );
}