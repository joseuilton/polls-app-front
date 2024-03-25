export default function PollResutsPage() {
  return (
    <main className="mt-16">
      <h1 className="font-bold text-xl">Resultados da enquete em tempo real</h1>
      <h2 className="mt-8 font-medium">Qual é o melhor framework backend Javascript?</h2>

      <div className="mt-8">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h3>Express</h3>
            </div>
            <span className="text-neutral-300">27 votos - 30%</span>
          </div>

          <div className="mt-6 w-full h-8 rounded-lg bg-neutral-200">
            <div className="h-full w-[70%] bg-primary-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    </main>
  )
}