import {useState, ChangeEvent} from "react"

function calculateInterest(capital: number, interestAnualPercentage: number, months: number) {
        return capital * (interestAnualPercentage / 100) * (months / 12)
}



export function Box() {
        const [capital, setCapital] = useState(0)
        const [interest, setInterest] = useState(0)
        const [time, setTime] = useState(0)


        return (
                <div className="bg-blue-600 m-2 p-5 rounded-xl text-xl flex flex-col items-center justify-center">
                        <p>Se presta <input min="1" className="w-20 h-5 mb-2" onInput={(event: ChangeEvent<HTMLInputElement>) => setCapital(+event.target.value)} type="number" />
                                {" "} a Eliaz al <input min="1" className="w-12 h-5 mb-2" onInput={(event) => setInterest(event.target.value)} type="number" /> %
                                anual por <input min="1" className="w-12 h-5 mb-2" onInput={(event) => setTime(event.target.value)} type="number" /> meses.
                                ¿Cual es el interes simple que genera dicho prestamo?</p>

                        <p className="m-2 p-1 bg-blue-500 w-6/12 rounded-xl">El interes simple es {calculateInterest(capital, interest, time) === 0 ? "..." : calculateInterest(capital, interest, time)}</p>

                </div>

        )
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
        )
}
