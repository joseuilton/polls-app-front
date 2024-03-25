import { Button } from "../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-16 flex flex-col justify-center items-center">
      <h1 className="p-4 text-3xl font-bold text-center">
        Bem-vindo ao Polls App 🤩
      </h1>
      <h2 className="p-4 mt-8 text-lg text-center font-bold">
        Vamos criar uma nova enquete?
      </h2>

      <Button className="mt-16" asChild>
        <Link href="/polls/create">
          Criar nova enquete
        </Link>
      </Button>
    </main>
  );
}
