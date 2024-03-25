"use client";
import { Button } from "@/app/components/Button";
import { PollOption } from "./components/PollOption";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { ImSpinner8 } from "react-icons/im";
import { SuccessView } from "./SuccessView";

type Option = {
  id: string;
  title: string;
}

type Poll = {
  id: string;
  title: string;
  options: Option[];
}

interface PollVotePageProps {
  params: {
    pollId: string;
  }
}

export default function PollVotePage({ params }: PollVotePageProps) {
  const [poll, setPoll] = useState<Poll | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/polls/${params.pollId}`);

        if (response.status === 200) {
          setPoll(response.data.poll);
        }
      } catch (err) {
        toast.error("Algo deu errado, por favor tente mais tarde!");
        router.push("/");
      }
    }

    fetchData();
  }, []);

  function handleChangeSelectedOption(id: string) {
    setSelectedOption(id);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!selectedOption) return toast.error("Selecione uma opção!");

    setIsSubmitLoading(true);

    try {
      const response = await api.post(`/polls/${params.pollId}/votes`, {
        pollOptionId: selectedOption
      });

      if (response.status === 201) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.log(err);
      toast.error("Você já votou nessa opção!");
    } finally {
      setIsSubmitLoading(false);
    }
  }

  return (
    <main className="mt-16 lg:w-1/2 lg:mx-auto">
      {
        !isSuccess
          ? (
            <>
              <h1 className="font-bold lg:text-2xl">
                {poll?.title}
              </h1>

              <form className="mt-6 lg:mt-8" onSubmit={handleSubmit}>
                <ul
                  className="bg-neutral-800 px-2 py-4 rounded-2xl flex flex-col
                     gap-y-8 lg:p-6 lg:gap-y-6"
                >
                  {poll?.options.map((option) => (
                    <li key={option.id}>
                      <PollOption
                        option={option}
                        onRequestChangeSelectedOption={handleChangeSelectedOption}
                      />
                    </li>
                  ))}
                </ul>

                <Button type="submit" className="mt-16 lg:max-w-[250px] lg:mx-auto" disabled={isSubmitLoading}>
                  {isSubmitLoading && <ImSpinner8 className="animate-spin" size={24} />}
                  Votar
                </Button>
              </form>
            </>
          )
        : (
          <SuccessView />
        )
      }

    </main>
  )
}