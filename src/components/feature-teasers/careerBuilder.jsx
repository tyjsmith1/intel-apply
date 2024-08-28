import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import MultiWaveSvg from '../ui/multiWaveSvg';
import FeatureFeedbackLogDesktop from "./desktop/builder/featureFeedbackLogDesktop";
import FeatureNetworkTrackingDesktop from "./desktop/builder/featureNetworkTrackingDesktop";
import HeroBuilder from './heroBuilder';
import FeatureFeedbackLogMobile from "./mobile/builder/featureFeedbackLogMobile";
import FeatureNetworkTrackingMobile from "./mobile/builder/featureNetworkTrackingMobile";

export default function CareerBuilder() {
    const [isMounted, setIsMounted] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width <= 768;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section>
            <div className="wave absolute w-full h-full">
                <MultiWaveSvg />
            </div>
            <div className="relative py-12 text-center mt-10">
                <HeroBuilder />
                {!isMounted ? (
                    <>
                        <FeatureFeedbackLogMobile />
                        <FeatureNetworkTrackingMobile />
                    </>
                ) : (
                    isMobile ? (
                        <>
                            <FeatureFeedbackLogMobile />
                            <FeatureNetworkTrackingMobile />
                        </>
                    ) : (
                        <>
                            <FeatureFeedbackLogDesktop />
                            <FeatureNetworkTrackingDesktop />
                        </>
                    )
                )}
            </div>
        </section>
    );
}