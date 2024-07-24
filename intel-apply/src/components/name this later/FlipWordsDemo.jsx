import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["hired", "strategic", "noticed", "recognized", "ahead", "prepared", "valued", "discovered", "insightful"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Get
        <FlipWords words={words} /> <br />
        with Hire Ground
      </div>
    </div>
  );
}
