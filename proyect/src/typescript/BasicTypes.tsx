

export const BasicTypes = () => {
    const name: string = "Rodolfo";
    const age: number = 30;
    const isAdmin: boolean = true;
    const power: string[] = ['react', 'react native', 'Angular', 'vue'];

    return (
        <>
            <h3>Tipos Basicos</h3>
            {name} {age} {isAdmin ? 'true' : 'false'}
            <br />
            {power.join(', ')}
        </>


    )
}
