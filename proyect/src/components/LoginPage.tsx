import { useAuthStore } from "../sotre/auth.store"


const LoginPage = () => {
    const authStatus = useAuthStore(state => state.status)

    return (
        <>
            <div>LoginPage</div>
            {authStatus}
        </>
    )
}

export default LoginPage