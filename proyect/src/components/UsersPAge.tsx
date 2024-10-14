import axios from "axios"
import { useEffect, useRef, useState } from "react"
import type { ReqResUserListResponse } from "../interfaces"


const loadUsers = async (page = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        });
        return data.data;
    }
    catch (error) {
        console.log(error);
        return [];

    }
}

const UsersPAge = () => {
    const currentPageRef = useRef(1);
    useEffect(() => {

        loadUsers(currentPageRef).then(users => setUsuarios(users))

    }, [])

    const [usuarios, setUsuarios] = useState<User[]>([]);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsuarios(users);
        } else {
            currentPageRef.current--;
        }

        const prevpage = async () => {
            if (currentPageRef.current < 1) return;


            currentPageRef.current--;
            const users = await loadUsers(currentPageRef.current)
            setUsuarios(users);
        }


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
                <div>
                    <button onClick={() => prevpage()}>Prev</button>
                    <button onClick={() => nextPage()}>Next</button>
                </div>
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
