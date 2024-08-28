import MultiWaveSvg from "@/components/ui/multiWaveSvg";
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import FeatureAnalyticsDesktop from "./desktop/hunter/featureAnalyticsDesktop";
import FeatureAppTrackerDesktop from "./desktop/hunter/featureAppTrackerDesktop";
import HeroHunter from "./heroHunter";
import FeatureAnalyticsMobile from "./mobile/hunter/featureAnalyticsMobile";
import FeatureAppTrackerMobile from "./mobile/hunter/featureAppTrackerMobile";

export default function JobHunter() {
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
                <HeroHunter />
                {!isMounted ? (
                    <>
                        <FeatureAppTrackerMobile />
                        <FeatureAnalyticsMobile />
                    </>
                ) : (
                    isMobile ? (
                        <>
                            <FeatureAppTrackerMobile />
                            <FeatureAnalyticsMobile />
                        </>
                    ) : (
                        <>
                            <FeatureAppTrackerDesktop />
                            <FeatureAnalyticsDesktop />
                        </>
                    )
                )}
            </div>
        </section>
    );
}