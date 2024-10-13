import axios from "axios"
import { useEffect, useState } from "react"
import type { ReqResUserListResponse } from "../interfaces"


const loadUsers = async (): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users');
        return data.data;
    }
    catch (error) {
        console.log(error);
        return [];

    }
}

const UsersPAge = () => {

    useEffect(() => {

        loadUsers().then(users => setUsuarios(users))

    }, [])

    const [usuarios, setUsuarios] = useState<User[]>([]);

    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(user => (
                        <UserRow key={user.id} user={user} />
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default UsersPAge



interface Props {
    user: User;
}


export const UserRow = ({ user }: Props) => {
    const { id, avatar, first_name, email } = user;
    return (
        <>
            <tr >
                <td> <img style={{ width: '50px' }} src={avatar} alt="User Avatar" /> </td>
                <td>{first_name}</td>
                <td>{email}</td>
            </tr>
        </>
    )
}
