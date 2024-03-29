import { useState, ChangeEvent } from "react";

import { calculateInterest } from "@/core";

export function Box() {
  const [capital, setCapital] = useState(0);
  const [interest, setInterest] = useState(0);
  const [time, setTime] = useState(0);

  const capitalHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setCapital(+event.target.value);
  const interestHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setInterest(+event.target.value);
  const timeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setTime(+event.target.value);

  return (
    <div className="bg-blue-600 m-2 p-5 rounded-xl text-xl flex flex-col items-center justify-center">
      <p>
        Se presta{" "}
        <input
          min="1"
          className="w-20 h-5 mb-2"
          onInput={capitalHandler}
          type="number"
        />{" "}
        soles a Eliaz al{" "}
        <input
          min="1"
          className="w-12 h-5 mb-2"
          onInput={interestHandler}
          type="number"
        />{" "}
        % anual por{" "}
        <input
          min="1"
          className="w-12 h-5 mb-2"
          onInput={timeHandler}
          type="number"
        />{" "}
        meses.{" "}
        <span className="font-bold">
          ¿Cual es el interes simple que genera dicho prestamo? ¿Y el monto?
        </span>
      </p>

      <p className="m-2 p-1 bg-blue-500 w-6/12 rounded-xl">
        El interes simple y el monto son respectivamente{" "}
        {calculateInterest(capital, interest, time) === 0
          ? "..."
          : `${calculateInterest(capital, interest, time).toFixed(3)} y ${(
              calculateInterest(capital, interest, time) + capital
            ).toFixed(3)} soles.`}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-green-500">
      <div className="text-center object-fill flex-1">
        <header className="p-3 bg-green-400">
          <h1 className="text-4xl m-3">Problemas de Interes</h1>
        </header>

        <section className="grid-flow-col gap-3 p-6">
          <Box />
        </section>
      </div>

      <p className="text-2xl p-4 bg-yellow-200">Eliaz Bobadilla</p>
    </div>
  );
}
