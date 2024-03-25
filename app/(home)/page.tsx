"use client";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import Link from "next/link";

export default function Home() {
  const [polls, setPolls] = useState([]);

  return (
    <main className="mt-16 flex flex-col justify-center items-center">
      <h1 className="px-4 text-3xl font-bold text-center lg:text-4xl">
        Bem-vindo ao Polls App 🤩
      </h1>

      <ul className="mt-8 bg-neutral-800 py-4 px-2 rounded-2xl lg:w-1/2 lg:p-6">
        <h2 className="font-bold mb-4">Suas enquetes</h2>

        <div className="flex flex-col gap-y-8">
          <li>
            <Link href="" className="block bg-neutral-900 rounded-lg px-4 py-2">
              Qual é o melhor framework backend Javascript?
            </Link>
          </li>
        </div>

      </ul>

      <h2 className="px-4 mt-8 text-lg text-center font-bold">
        Vamos criar uma nova enquete?
      </h2>

      <Button className="mt-8 lg:w-auto" asChild>
        <Link href="/polls/create">
          Criar nova enquete
        </Link>
      </Button>
    </main>
  );
}
