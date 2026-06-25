import { useState } from 'react'
import Heading from '../../components/Heading'

const INIT_VALUES = { username: "", password: "" }

const LoginFeature = () => {

    const [login, setLogin] = useState(INIT_VALUES)
    const [status, setStatus] = useState({loading: false, success: false, error: false})

    function handleChange(event) {
        const { name, value } = event.target
        console.log("inputfeldname: ", name, "inputfeld value: ", value)
        setLogin({ ...login, [name]: value })
        //=> neuer wert von Login Object ist erst nach dem neuen Rendering verfügbar.
        console.log("nach dem setLogin", login)
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log("submitted Data", login)
        setStatus({...status, loading: true})

        setTimeout(() => {

            // https request 
            fetch('https://jsonplaceholder..com/user')
                .then(res => {

                    console.log("res", res)
                    if(!res.ok){
                        
                        setStatus({...status, loading: false, error: true})
                        return Error("fehler")
                    }

                    return res.json()

                })
                .then(data => {
                    console.log("data sind da", data)
                    setStatus({...status, loading: false, success: true})
                    setLogin(INIT_VALUES)
                })
                .catch(err => {
                    console.log("error", err)
                    setStatus({ ...status, loading: false, error: true })
                })

        }, 3000)

    }

    console.log("login values", login)
    return <div>
        <Heading title="login feature" variant="h1" />
        {status.loading && <h1>daten werden geladen...</h1>}
        {status.success && <h2>daten wurden erfolgreich übermittelt</h2>}
        {status.error && <h2>etwas ist schief gelaufen</h2>}
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