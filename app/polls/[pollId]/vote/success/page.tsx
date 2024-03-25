import { ConfettiAnimation } from "@/app/components/ConfettiAnimation";
import { FiCheck } from "react-icons/fi";

export default function PollVoteSuccessPage() {
  return (
    <main className="mt-16 flex flex-col items-center">
      <ConfettiAnimation />

      <h1 className="font-bold text-center text-neutral-50 text-4xl lg:text-5xl">
        Parabéns, você acabou de votar 👏
      </h1>

      <div
        className="mt-16 w-24 h-24 flex justify-center items-center rounded-full bg-primary-500
                   text-neutral-950 lg:w-32 lg:h-32"
      >
        <FiCheck className="lg:w-24 lg:h-24" size={64} />
      </div>
    </main>
  )
}