import {useState} from "react"

function calculateInterest(capital: number, interestAnualPercentage: number, months: number) {
        return capital * (interestAnualPercentage / 100) * (months / 12)
}

export default function Home() {
        const [capital, setCapital] = useState(0)
        const [interest, setInterest] = useState(0)
        const [time, setTime] = useState(0)


        return (
                <>
                        <h1>Interes stuff</h1>

                        <p>Cesar presta <input onInput={(event) => setCapital(event.target.value)} type="number" />
                                a Eliaz al <input onInput={(event) => setInterest(event.target.value)} type="number" />%
                                anual por <input onInput={(event) => setTime(event.target.value)} type="number" /> meses.
                                Cual es el interes simple que genera dicho prestamo?</p>

                        <p>Capital: {capital} </p>
                        <p>Interes: {interest} </p>
                        <p>Tiempo: {time} </p>

                        <p>El interes simple es {calculateInterest(capital, interest, time)}</p>

                        <p>im fucking busy thanks to preparing for uni, i miss coding a way to much lol</p>
                </>

        )
}
