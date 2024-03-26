"use client";
import { Button } from "@/app/components/Button";
import { FormEvent, useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import _uniqueId from "lodash/uniqueId";
import { toast } from "react-toastify";
import { api } from "@/app/lib/api";
import { ImSpinner8 } from "react-icons/im";
import { SuccessView } from "./SuccessView";

type Option = {
  id: string;
  title: string;
}

export default function CreatePollPage() {
  const [pollTitle, setPollTitle] = useState("");
  const [pollOptions, setPollOptions] = useState<Option[]>([]);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");

  function handleAddOption() {
    const newOption = {
      id: _uniqueId("option-"),
      title: ""
    };

    setPollOptions((prevState) => [...prevState, newOption]);
  }

  function handleChangeTitlePollOption(id: string, title: string) {
    setPollOptions((prevState) => {
      const newState = [...prevState];
      const index = findIndexById(newState, id);
      newState[index].title = title;
      return newState;
    })
  }

  function handleDeletePollOption(id: string) {
    setPollOptions((prevState) => {
      const index = findIndexById(prevState, id);
      const newState = prevState.toSpliced(index, 1);
      return newState;
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!pollTitle) return toast.error("A enquete deve ter um nome!");
    if (pollOptions.length < 2) return toast.error("A enquete deve ter pelo menos 2 opções!");

    setIsSubmitLoading(true);
    const optionsTitle = pollOptions.map((option) => option.title);

    try {
      const response = await api.post("/polls", {
        title: pollTitle,
        options: optionsTitle
      });

      if (response.status === 201) {
        const { pollId } = response.data;
        const link = `
          ${window.location.protocol}//${window.location.hostname}/polls/${pollId}/vote
        `.trim();


        if (typeof window !== "undefined") {
          let myPolls = [];

          if (localStorage.getItem("@App:polls")) {
            myPolls = JSON.parse(localStorage.getItem("@App:polls")!);
          }

          myPolls.push({ id: pollId, title: pollTitle });

          localStorage.setItem("@App:polls", JSON.stringify(myPolls));
        }

        setGeneratedLink(link);
      }
    } catch (err) {
      toast.error("Algo deu errado, por favor tente novamente mais tarde!");
    } finally {
      setIsSubmitLoading(false);
    }
  }

  return (
    <main className="mt-16 lg:w-1/2 lg:mx-auto">
      {!generatedLink
        ? (
          <form onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold lg:text-3xl">Nova enquete</h1>

            <div className="mt-8">
              <label htmlFor="poll-title" className="font-medium lg:text-xl">
                Título da enquete:
              </label>
              <input
                type="text"
                id="poll-title"
                name="poll-title"
                placeholder="Digite a sua pergunta..."
                className="w-full mt-6 block py-2 px-4 rounded-lg bg-neutral-800 focus:outline-none
                     placeholder:text-neutral-300 lg:py-3 lg:px-6"
                value={pollTitle}
                onChange={(e) => setPollTitle(e.target.value)}
              />
            </div>

            <div className="mt-8 pt-4 px-2 pb-6 bg-neutral-800 rounded-2xl lg:py-6 lg:px-12">
              <div className="flex items-center flex-col gap-y-8 lg:gap-y-6">
                {pollOptions.map((pollOption) => (
                  <div
                    className="w-full flex justify-between items-center gap-4 py-2 px-4 bg-neutral-900 rounded-lg"
                    key={pollOption.id}
                  >
                    <input
                      type="text"
                      placeholder="Digite o nome da opção"
                      className="w-full block focus:outline-none bg-transparent"
                      value={pollOption.title}
                      onChange={(e) => handleChangeTitlePollOption(pollOption.id, e.target.value)}
                    />
                    <Button
                      type="button"
                      className="w-fit bg-transparent hover:bg-transparent text-danger-300 
                         hover:text-danger-700"
                      size="icon"
                      onClick={() => handleDeletePollOption(pollOption.id)}
                    >
                      <FiTrash size={24} />
                    </Button>
                  </div>
                ))}


                <Button type="button" className="w-[40px] h-[40px]" size="icon" onClick={handleAddOption}>
                  <FiPlus size={24} />
                </Button>
              </div>
            </div>

            <Button className="mt-16" type="submit" disabled={isSubmitLoading}>
              {isSubmitLoading && <ImSpinner8 className="animate-spin" size={24} />}
              Criar enquete
            </Button>
          </form>
        )
        : (
          <SuccessView generatedLink={generatedLink} />
        )}

    </main>
  )
}

function findIndexById(pollOptions: Option[], id: string) {
  return pollOptions.findIndex((option) => option.id === id);
}