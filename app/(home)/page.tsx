"use client";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../components/Button";
import Link from "next/link";

type Poll = {
  id: string;
  title: string;
}

export default function Home() {
  const polls = useMemo<Poll[]>(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("@App:polls")) {
        return JSON.parse(localStorage.getItem("@App:polls")!);
      }
    }


    return null;
  }, []);

  return (
    <main className="mt-16 flex flex-col justify-center items-center">
      <h1 className="px-4 text-3xl font-bold text-center lg:text-4xl">
        Bem-vindo ao Polls App 🤩
      </h1>

      {polls && (
        <ul className="mt-8 bg-neutral-800 py-4 px-2 rounded-2xl lg:w-1/2 lg:p-6">
          <h2 className="font-bold mb-4">Suas enquetes</h2>

          <div className="flex flex-col gap-y-8">
            {polls.map((poll) => (
              <li key={poll.id}>
                <Link
                  href={`/polls/${poll.id}/results`}
                  className="block bg-neutral-900 rounded-lg px-4 py-2"
                >
                  {poll.title}
                </Link>
              </li>
            ))}

          </div>

        </ul>
      )}


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
