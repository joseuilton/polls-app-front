import { Button } from "@/app/components/Button";
import { ConfettiAnimation } from "@/app/components/ConfettiAnimation";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";

export function SuccessView({ generatedLink }: { generatedLink: string }) {

  function handleCopy() {
    navigator.clipboard.writeText(generatedLink);
    toast.success("Link copiado para sua área de trasferência!");
  }

  return (
    <div>
      <ConfettiAnimation />
      <h1 className="text-3xl font-bold text-center lg:text-4xl">
        Parabéns, você acabou de criar uma nova enquete  👏
      </h1>

      <h2 className="mt-8 text-center font-bold lg:text-2xl">
        Agora basta copiar o link e divulgar para o seu público
      </h2>

      <div
        className="min-w-64 mt-8 py-2 px-4 font-bol border-2 border-solid border-neutral-50 rounded-lg
                     lg:py-4 lg:px-8"
      >
        <p className="text-center font-medium">
          {generatedLink}
        </p>
      </div>

      <Button className="mt-16 lg:w-auto lg:mx-auto" onClick={handleCopy}>
        Copiar código
        <FiCopy size={24} />
      </Button>
    </div>
  )
}