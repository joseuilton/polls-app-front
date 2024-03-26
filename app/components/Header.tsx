import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">
        <h3 className="text-neutral-50 text-xl font-bold">🗣️ Polls App</h3>
      </Link>
    </header>
  )
}