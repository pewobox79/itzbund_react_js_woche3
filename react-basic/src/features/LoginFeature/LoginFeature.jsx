import { useState } from 'react'
import Heading from '../../components/Heading'

const INIT_VALUES = { username: "", password: "" }

const LoginFeature = () => {

    const [login, setLogin] = useState(INIT_VALUES)

    function handleChange(){
        console.log("input changed")
    }

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
            <input type="text" name="password" value={login.password} id="password" />
            <br />
        </form>
    </div>
}

export default LoginFeature