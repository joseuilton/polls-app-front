import { Button } from "@/app/components/Button";
import { PollOption } from "./components/PollOption";

export default function PollVotePage() {
  return (
    <main className="mt-16 lg:w-1/2 lg:mx-auto">
      <h1 className="font-bold lg:text-2xl">Qual é melhor framework backend Javascript?</h1>

      <form className="mt-6 lg:mt-8">
        <ul
          className="bg-neutral-800 px-2 py-4 rounded-2xl flex flex-col
                     gap-y-8 lg:p-6 lg:gap-y-6"
        >
          <li>
            <PollOption />
          </li>
          <li>
            <PollOption />
          </li>
        </ul>

        <Button type="submit" className="mt-16 lg:max-w-[250px] lg:mx-auto">
          Votar
        </Button>
      </form>
    </main>
  )
}