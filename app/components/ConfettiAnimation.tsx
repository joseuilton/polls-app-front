"use client";

import { useState } from "react";
import Confetti from "react-confetti"

export function ConfettiAnimation() {
  const [party, setParty] = useState(true);

  return (
    <Confetti
      width={innerWidth}
      height={innerHeight}
      style={{ pointerEvents: 'none' }}
      numberOfPieces={party ? 500 : 0}
      recycle={false}
      onConfettiComplete={confetti => {
        setParty(false)
        confetti!.reset()
      }}
    />
  )
}