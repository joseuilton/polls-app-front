export default function PollResutsPage() {
  return (
    <main className="mt-16 lg:w-1/2 lg:mx-auto">
      <h1 className="font-bold text-xl lg:text-3xl lg:text-center">
        Resultados da enquete em tempo real
      </h1>
      <h2 className="mt-8 font-medium lg:text-xl">Qual é o melhor framework backend Javascript?</h2>

      <div className="mt-8 flex flex-col gap-y-8">
        <div>
          <div className="flex justify-between items-center lg:text-xl">
            <div className="flex items-center gap-4">
              <h3>Express</h3>
            </div>
            <span className="text-neutral-300">27 votos - 30%</span>
          </div>

          <div className="mt-6 w-full h-8 rounded-lg bg-neutral-200 lg:h-6">
            <div className="h-full w-[70%] bg-primary-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    </main>
  )
}