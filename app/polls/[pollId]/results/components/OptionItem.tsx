"use client";
import { useMemo } from "react";

interface OptionItemProps {
  totalVotes: number;
  option: {
    id: string;
    title: string;
    votes: number;
  }
}

export function OptionItem({ totalVotes, option }: OptionItemProps) {
  const percentage = useMemo(() => {
    if (totalVotes === 0) return 0;
    return parseInt(`${option.votes / totalVotes * 100}`);
  }, [totalVotes, option.votes]);

  return (
    <div>
      <div className="flex justify-between items-center lg:text-xl">
        <div className="flex items-center gap-4">
          <h3>{option.title}</h3>
        </div>
        <span className="text-neutral-300">
          {option.votes} - {percentage}%
        </span>
      </div>

      <div className="mt-6 w-full h-8 rounded-lg bg-neutral-200 lg:h-6">
        <div
          style={{ width: `${percentage}%` }}
          className={`h-full bg-primary-500 rounded-lg`}
        ></div>
      </div>
    </div>
  )
}