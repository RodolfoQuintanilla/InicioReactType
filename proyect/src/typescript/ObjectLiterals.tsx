interface Person {
    name: string;
    age: number;
    occupation: string
    address: {
        contry: string;
        houseNo: number;
    }
}

export const ObjectLiterals = () => {
    const person: Person = {
        name: 'John',
        age: 30,
        occupation: 'Developer',
        address: {
            contry: 'Mexico',
            houseNo: 20
        }
    }
    return (
        <>
            {JSON.stringify(person, null, 2)}
        </>
    )
}
