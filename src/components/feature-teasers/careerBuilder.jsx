import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import MultiWaveSvg from '../ui/multiWaveSvg';
import FeatureFeedbackLogDesktop from "./desktop/builder/featureFeedbackLogDesktop";
import FeatureNetworkTrackingDesktop from "./desktop/builder/featureNetworkTrackingDesktop";
import HeroBuilder from './heroBuilder';
import FeatureFeedbackLogMobile from "./mobile/builder/featureFeedbackLogMobile";
import FeatureNetworkTrackingMobile from "./mobile/builder/featureNetworkTrackingMobile";

export default function CareerBuilder() {
    const [isMobile, setIsMobile] = useState(true);
    const { width } = useWindowSize();

    useEffect(() => {
        setIsMobile(width <= 768);
    }, [width]);

    return (
        <section>
            <div className="wave absolute w-full h-full">
                <MultiWaveSvg />
            </div>
            <div className="relative py-12 text-center mt-10">
                <HeroBuilder />
                <FeatureFeedbackLogMobile />
                <FeatureNetworkTrackingMobile />
                {!isMobile && (
                    <>
                        <FeatureFeedbackLogDesktop />
                        <FeatureNetworkTrackingDesktop />
                    </>
                )}
            </div>
        </section>
    );
}