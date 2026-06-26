import { useState } from "react"

const LoginForm = () => {

    const [email, setEmail] = useState("")
    function handleChange(e) {
        setEmail(e.target.value)
    }
    return <form>
        <label htmlFor="email">E-Mail</label>
        <input type="text" id="email" value={email} onChange={handleChange} />

        <p>Eingabe: {email}</p>
    </form>
}

export default LoginForm