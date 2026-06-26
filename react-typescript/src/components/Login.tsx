import { useState, type ReactHTMLElement } from "react"
import Button from './Button';

const INIT_VALUE={username:"", email: ""}
const Login = () => {

    // => wenn INIT_VALUE gesetzt, dann automatisch types definiert!
    const [login, setLogin] = useState<{username?: string | undefined, email?: string}>(INIT_VALUE)
    
    function handleChange(e:{target: {name: string, value: string}} ) {
        console.log("event", e.target.name, e.target.value)
        setLogin({...login, [e.target.name]:e.target.value})
    }

    function handleSubmit(e: React.SyntheticEvent){
        console.log("event submit", e)
        e.preventDefault()
        console.log("submit data")

    }
    return <div>
        <form>
            <input name="username" onChange={handleChange} value={login.username} />
            <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
}

export default Login