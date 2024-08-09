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
    <div className="h-auto flex flex-col justify-center items-center mb-4">
      <div className="text-4xl xs:text-4xl xs:text-purple-700 sm:text-green-700 md:text-5xl md:text-yellow-500 lg:text-red-700 lg:text-7xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <div>
          Get <span className="inline-block text-neutral-800 dark:text-white"><FlipWords words={words} /></span>
        </div>
        <div>
          with <span className="gradient-text font-extrabold">Hire Ground</span>
        </div>
      </div>
    </div>
  );
}
