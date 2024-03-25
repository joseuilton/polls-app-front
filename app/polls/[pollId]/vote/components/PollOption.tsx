interface PollOptionProps {
  option: {
    id: string;
    title: string;
  }
  onRequestChangeSelectedOption: (id: string) => void;
}

export function PollOption({ option, onRequestChangeSelectedOption }: PollOptionProps) {
  return (
    <div>
      <label
        htmlFor={option.id}
        className="relative block w-full bg-neutral-900 text-neutral-50 py-2 px-4 rounded-lg"
      >
        <input
          type="radio"
          name="options"
          id={option.id}
          value={option.id}
          className="hidden peer"
          onChange={(e) => e.target.checked && onRequestChangeSelectedOption(option.id)}
        />

        <span className="relative z-20 peer-checked:text-neutral-950">
          {option.title}
        </span>
        <div
          className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-primary-500 to-primary-700
                     z-10 rounded-lg transition-all duration-700 peer-checked:w-full"
        ></div>
      </label>
    </div>
  )
}