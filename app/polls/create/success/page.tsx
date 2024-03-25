"use client";
import { FiCopy } from "react-icons/fi";
import { Button } from "@/app/components/Button";
import { ConfettiAnimation } from "@/app/components/ConfettiAnimation";

export default function CreatePollSuccessPage() {

  return (
    <>
      <ConfettiAnimation />
      <main className="mt-16 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center lg:text-4xl lg:px-32">
          Parabéns, você acabou de criar uma nova enquete  👏
        </h1>

        <h2 className="mt-8 text-center font-bold lg:text-2xl">
          Agora basta copiar o link e divulgar para o seu público
        </h2>

        <div
          className="min-w-64 mt-8 py-2 px-4 font-bol border-2 border-solid border-neutral-50 rounded-lg
                     lg:py-4 lg:px-8 lg:text-2xl"
        >
          <p className="text-center font-medium">...</p>
        </div>

        <Button className="mt-16 w-auto">
          Copiar código
          <FiCopy size={24} />
        </Button>
      </main>
    </>

  )
}