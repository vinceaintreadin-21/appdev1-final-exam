import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    const redirectLogin = () => {
        navigate('/login')
    }
    return (
        <div>
            <h1>Welcome to Todos App</h1>
            <button onClick={redirectLogin}>Go to Login</button>
        </div>
    )
}