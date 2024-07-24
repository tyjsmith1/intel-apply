import { FlipWords } from "./flip-words";

export function FlipWordsDemo() {
  const words = [
    "hired",
    "strategic",
    "noticed",
    "recognized",
    "ahead",
    "prepared",
    "valued",
    "discovered",
    "insightful"
  ];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <div>
          Get <span className="inline-block"><FlipWords words={words} /></span>
        </div>
        <div>
          with <span className="gradient-text">Hire Ground</span>
        </div>
      </div>
    </div>
  );
}
