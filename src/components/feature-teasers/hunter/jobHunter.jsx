// import WaveSvg from "@/components/ui/waveSvg";
import MultiWaveSvg from "@/components/ui/multiWaveSvg";
import FeatureAnalytics from "./featureAnalytics";
import FeatureAppTracker from "./featureAppTracker";
import HeroHunter from "./heroHunter";

export default function JobHunter() {
    return (
        <section>
            <div className="wave">
                <MultiWaveSvg />
            </div>
            <div className="relative py-12 text-center mt-10">
                <HeroHunter />
                <div className="flex flex-col items-center space-y-8">
                    <FeatureAppTracker />
                    <FeatureAnalytics />
                </div>
            </div>
        </section>
    );
}