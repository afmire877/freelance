import { useState } from "react";
import useQuizStore from "~/store/quizStore";
import { type Checklist } from "~/utils/types";

interface Props {
  checklist: Checklist[];
  prompt: string;
}

export default function ChecklistQuestion({ checklist, prompt }: Props) {
  const updateQuestionValue = useQuizStore((s) => s.updateQuestionValue);
  const currentIndex = useQuizStore((s) => s.currentIndex);

  const [value, setValue] = useState<boolean[]>(
    Array(checklist.length).fill(false),
  );

  return (
    <div className="flex flex-col items-start">
      <h1>{prompt}</h1>
      {checklist?.map(({ content }, idx) => {
        return (
          <div key={idx} className="flex max-w-3xl items-center justify-center">
            <input
              type="checkbox"
              id={`checklist-${idx}`}
              className="block  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              onChange={(e) => {
                const newValue = value.map((choice, index) => {
                  if (idx === index) {
                    return !choice;
                  }
                  return choice;
                });

                setValue(newValue);

                updateQuestionValue({
                  index: currentIndex,
                  type: "checklist",
                  value: newValue,
                });
              }}
            />
            <label
              htmlFor={`checklist-${idx}`}
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              {content}
            </label>
          </div>
        );
      })}
    </div>
  );
}
