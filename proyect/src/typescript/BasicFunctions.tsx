import React from 'react'

export const BasicFunctions = () => {

    const increaseBy = (a: number, b: number) => {
        return a + b;
    }

    return (
        <>
            <h3>Funciomes</h3>
            <samp>El Resultado de sumar: {increaseBy(2, 8)}</samp>

        </>

    )
}
