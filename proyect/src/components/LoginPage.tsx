import { useEffect } from "react"
import { useAuthStore } from "../sotre/auth.store"


const LoginPage = () => {
    const authStatus = useAuthStore(state => state.status)
    const user = useAuthStore(state => state.user)
    const login = useAuthStore(state => state.login)
    const logout = useAuthStore(state => state.logout)

    useEffect(() => {
        setTimeout(() => {
            logout()
        }, 2000);
    }, [])


    if (authStatus === 'checking') {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <div>LoginPage</div>
            {
                authStatus === 'authenticated'
                    ? <div>Autenticado como: {JSON.stringify(user, null, 2)}</div>
                    : <div>No autenticado</div>
            }

            {
                (authStatus === 'authenticated')
                    ? (
                        <button onClick={logout}>Logout</button>
                    ) :
                    (
                        <button onClick={() => login('rqm@outlook.es', '123')}>Login</button>
                    )
            }
        </>
    )
}

export default LoginPage