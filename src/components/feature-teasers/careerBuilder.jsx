import useWindowSize from '../../hooks/useWindowSize';
import MultiWaveSvg from '../ui/multiWaveSvg';
import FeatureFeedbackLogDesktop from "./desktop/builder/featureFeedbackLogDesktop";
import FeatureNetworkTrackingDesktop from "./desktop/builder/featureNetworkTrackingDesktop";
import HeroBuilder from './heroBuilder';
import FeatureFeedbackLogMobile from "./mobile/builder/featureFeedbackLogMobile";
import FeatureNetworkTrackingMobile from "./mobile/builder/FeatureNetworkTrackingMobile";

export default function CareerBuilder() {
    const { width } = useWindowSize()
    const isMobile = width <= 768

    return (
        <section>
            <div className="wave">
                <MultiWaveSvg />
            </div>
            <div className="relative py-12 text-center mt-10">
                <HeroBuilder />
                {isMobile ? (
                    <>
                        <FeatureFeedbackLogMobile />
                        <FeatureNetworkTrackingMobile />
                    </>
                ) : (
                    <>
                        <FeatureFeedbackLogDesktop />
                        <FeatureNetworkTrackingDesktop />
                    </>
                )}
            </div>
        </section>
    );
}