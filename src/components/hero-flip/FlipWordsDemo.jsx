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
      <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 mx-auto xs:text-4xl md:text-5xl lg:text-7xl">
                  {/*xs:text-purple-700
          sm:text-green-700 
          md:text-yellow-500
          lg:text-red-700 
          */}
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
