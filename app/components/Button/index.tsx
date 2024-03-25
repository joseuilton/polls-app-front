import { twMerge } from "tailwind-merge";
import { Slot, type AsChildProps } from "./Slot"

type ButtonProps = AsChildProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  style?: React.CSSProperties;
  className?: string;
  size?: "large" | "regular" | "icon";
}


type SizeMapKeys = "large" | "regular" | "icon";
const buttonSizeMap = new Map<SizeMapKeys, string>([
  ["large", "text-xl"],
  ["regular", "text-base"],
  ["icon", "p-2 rounded-lg"]
])

export function Button(
    { 
      asChild, 
      size = "regular", 
      className,
      ...props 
    }: ButtonProps
  ) {
  const buttonClassName = twMerge(
    "w-full flex justify-center items-center gap-4 py-4 px-8 rounded-2xl disabled:cursos-not-allowed bg-primary-500 text-neutral-950 font-bold hover:bg-primary-700 transition-all",
    buttonSizeMap.get(size),
    className
  )

  return (asChild ? (
    <Slot className={buttonClassName} {...props} />
  ) : (
    <>
      <button
        className={buttonClassName}
        {...props}
      />
    </>
  ))
}