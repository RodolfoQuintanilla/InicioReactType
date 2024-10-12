import { useState } from "react";


export const Counter = () => {
    const [counter, setCounter] = useState(10);
    const increaseBy = (value: number) => {
        setCounter(counter + value)
    }

    const increaseBy2 = (value: number) => {
        setCounter(counter - value)
    }

    return (
        <>
            <h3>Contador: <small>{counter}</small></h3>

            <div>
                <button onClick={() => increaseBy(1)}>+1</button>
                <br />
                <button onClick={() => increaseBy2(1)}>-1</button>
            </div>
        </>
    )
}
