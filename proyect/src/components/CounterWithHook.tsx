import useCounter from "../hooks/useCounter"


export const CounterWithHook = () => {
    const { counter, increaseBy, increaseBy2 } = useCounter({initialValue:0});
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
