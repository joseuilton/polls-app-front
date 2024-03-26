"use client";
import { api } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify";
import { OptionItem } from "./components/OptionItem";
import useWebSocket from "react-use-websocket";

type Poll = {
  id: string;
  title: string;
  options: {
    id: string;
    title: string;
    votes: number;
  }[];
  totalVotes: number;
}

interface PollResultsPageProps {
  params: {
    pollId: string;
  }
}

export default function PollResultsPage({ params }: PollResultsPageProps) {
  const [poll, setPoll] = useState<Poll | null>(null);
  const { lastJsonMessage } = useWebSocket(
    `${process.env.NEXT_PUBLIC_WEBSOCKET_BASE_URL!}/polls/${params.pollId}/results`
  );
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/polls/${params.pollId}`);

        if (response.status === 200) {
          const fetchedPoll = response.data.poll as Poll;
          fetchedPoll.options.sort((a, b) => b.votes - a.votes);

          const totalVotes = fetchedPoll.options.reduce((total, value) => total + value.votes, 0);
          fetchedPoll.totalVotes = totalVotes;
          setPoll(fetchedPoll);
          return;
        }
      } catch (err) {
        toast.error("Algo deu errado, por favor tente novamente mais tarde!");
        router.push("/");
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setPoll((prevState) => {
      if (!prevState) return null;

      const newState = JSON.parse(JSON.stringify(prevState)) as Poll;
      const { pollOptionId, votes } = lastJsonMessage as any;
      const index = newState.options.findIndex((option) => option.id === pollOptionId);
      newState.options[index].votes = votes;

      newState.options.sort((a, b) => b.votes - a.votes);

      const totalVotes = newState.options.reduce((total, value) => total + value.votes, 0);
      newState.totalVotes = totalVotes;

      return newState;
    })
  }, [lastJsonMessage]);

  return (
    <main className="mt-16 lg:w-1/2 lg:mx-auto">
      <h1 className="font-bold text-xl lg:text-3xl lg:text-center">
        Resultados da enquete em tempo real
      </h1>

      {poll && (
        <>
          <h2 className="mt-8 font-medium lg:text-xl">
            {poll.title}
          </h2>

          <div className="mt-8 flex flex-col gap-y-8">
            {poll.options.map((option) => (
              <OptionItem
                key={option.id}
                totalVotes={poll.totalVotes}
                option={option}
              />
            ))}

          </div>
        </>
      )}

    </main>
  )
}