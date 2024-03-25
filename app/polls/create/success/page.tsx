"use client";
import { FiCopy } from "react-icons/fi";
import { Button } from "@/app/components/Button";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { ConfettiAnimation } from "@/app/components/ConfettiAnimation";

export default function CreatePollSuccessPage() {

  return (
    <>
      <ConfettiAnimation />
      <main className="mt-16 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">
          Parabéns, você acabou de criar uma nova enquete  👏
        </h1>

        <h2 className="mt-8 text-center font-bold">
          Agora basta copiar o link e divulgar para o seu público
        </h2>

        <div
          className="min-w-64 mt-8 py-2 px-4 border-2 border-solid border-neutral-50 rounded-lg"
        >
          <p className="text-center font-medium">...</p>
        </div>

        <Button className="mt-16">
          Copiar código
          <FiCopy size={24} />
        </Button>
      </main>
    </>

  )
}