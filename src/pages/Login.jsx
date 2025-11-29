import { useEffect, useState } from "react";

function Login () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])

    const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=2')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    function handleLogin() {
        const user = users.find(user => user.username === username)
        console.log(user)

        if (!user) {
            alert("username not found")
            return
        }

        if (password !== SECRET) {
            alert('incorrect password')
            return 
        }
       
        localStorage.setItem("loggedInUser", JSON.stringify(user))
        window.location.href = "/todos"

    }

    return (
        <div>
            <h2>Login</h2>

            <input type="text" placeholder="Enter username " value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )

}

export default Login