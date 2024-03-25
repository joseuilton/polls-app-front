import { Button } from "@/app/components/Button";
import { FiPlus, FiTrash } from "react-icons/fi";

export default function CreatePollPage() {
  return (
    <main className="mt-16 lg:w-1/2 lg:mx-auto">
      <form>
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
          />
        </div>

        <div className="mt-8 pt-4 px-2 pb-6 bg-neutral-800 rounded-2xl lg:py-6 lg:px-12">
          <div className="flex items-center flex-col gap-y-8 lg:gap-y-6">
            <div
              className="w-full flex justify-between items-center gap-4 py-2 px-4 bg-neutral-900 rounded-lg"
            >
              <input
                type="text"
                placeholder="Digite o nome da opção"
                className="w-full block focus:outline-none bg-transparent"
              />
              <Button
                type="button"
                className="w-fit bg-transparent hover:bg-transparent text-danger-300 
                         hover:text-danger-700"
                size="icon"
              >
                <FiTrash size={24} />
              </Button>
            </div>

            <Button type="button" className="w-[40px] h-[40px]" size="icon">
              <FiPlus size={24} />
            </Button>
          </div>
        </div>

        <Button className="mt-16" type="submit">
          Criar enquete
        </Button>
      </form>
    </main>
  )
}