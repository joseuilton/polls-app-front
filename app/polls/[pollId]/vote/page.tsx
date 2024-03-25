import { Button } from "@/app/components/Button";
import { PollOption } from "./components/PollOption";

export default function PollVotePage() {
  return (
    <main className="mt-16">
      <h1 className="font-bold">Qual é melhor framework backend Javascript?</h1>

      <form className="mt-6">
        <ul
          className="bg-neutral-800 px-2 py-4 rounded-2xl flex flex-col
                     gap-y-8"
        >
          <li>
            <PollOption />
          </li>
        </ul>

        <Button type="submit" className="mt-16">
          Votar
        </Button>
      </form>
    </main>
  )
}