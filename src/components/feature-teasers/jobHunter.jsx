import MultiWaveSvg from "@/components/ui/multiWaveSvg";
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import FeatureAnalyticsDesktop from "./desktop/hunter/featureAnalyticsDesktop";
import FeatureAppTrackerDesktop from "./desktop/hunter/featureAppTrackerDesktop";
import HeroHunter from "./heroHunter";
import FeatureAnalyticsMobile from "./mobile/hunter/featureAnalyticsMobile";
import FeatureAppTrackerMobile from "./mobile/hunter/featureAppTrackerMobile";

export default function JobHunter() {
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
                <HeroHunter />
                <FeatureAppTrackerMobile />
                <FeatureAnalyticsMobile />
                {!isMobile && (
                    <>
                        <FeatureAppTrackerDesktop />
                        <FeatureAnalyticsDesktop />
                    </>
                )}
            </div>
        </section>
    );
}