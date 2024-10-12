import { useState } from 'react'

interface Options {
    initialValue?: number;

}

const useCounter = ({ initialValue }: Options) => {
    const [counter, setCounter] = useState(initialValue);
    const increaseBy = (value: number) => {
        setCounter(counter + value)
    }

    const increaseBy2 = (value: number) => {
        setCounter(counter - value)
    }
    return {

        counter,
        increaseBy,
        increaseBy2
    }

}

export default useCounter