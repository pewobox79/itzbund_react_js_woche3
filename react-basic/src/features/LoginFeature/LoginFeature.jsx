import { useState } from 'react'
import Heading from '../../components/Heading'

const INIT_VALUES = { username: "", password: "" }

const LoginFeature = () => {

    const [login, setLogin] = useState(INIT_VALUES)

    function handleChange(event) {
        const { name, value } = event.target
        console.log("inputfeldname: ", name, "inputfeld value: ", value)
        setLogin({...login, [name]: value })
        //=> neuer wert von Login Object ist erst nach dem neuen Rendering verfügbar.
        console.log("nach dem setLogin", login)
    }

    function handleSubmit(e){
        e.preventDefault()
        
        console.log("submitted Data", login)
    }

    console.log("login values", login)
    return <div>
        <Heading title="login feature" variant="h1" />

        <form>
            <label htmlFor="username">Username</label>
            <br />
            <input
                type="text"
                name="username"
                value={login.username}
                id="username"
                placeholder="username"
                onChange={handleChange} />
            <br />
            <label htmlFor='password'>Password</label>
            <br />
            <input
                type="text"
                name="password"
                value={login.password}
                id="password"
                onChange={handleChange} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
}

export default LoginFeature