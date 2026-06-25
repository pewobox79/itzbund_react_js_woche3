import { useContext, useState } from 'react'
import Heading from '../../components/Heading'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { ThemeContext } from '../../context/themeContext'

const INIT_VALUES = { username: "", password: "" }

const LoginFeature = () => {
    console.log("loginfeature renders")
    const theme = useContext(ThemeContext)
    console.log("theme value", theme)
    const { setLocalStorage, removeLocalStorage } = useLocalStorage("itzb_user")
    const [login, setLogin] = useState(INIT_VALUES)
    const [status, setStatus] = useState({ loading: false, success: false, error: false })

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
        const updatedValues = {
            ...login,
            loggedIn: true,
            role: "employee"
        }
        setLocalStorage(updatedValues)
        setStatus({ ...status, loading: false })

    }

    function handleLogout() {
        removeLocalStorage()
    }
    console.log("login values", login)
    return <div>
        <Heading title="login feature" variant="h1" />
        {status.loading && <h1>daten werden geladen...</h1>}
        {status.success && <h2>daten wurden erfolgreich übermittelt</h2>}
        {status.error && <h2>etwas ist schief gelaufen</h2>}
        <form>
            <label htmlFor="username" className={`label-${theme.themeStyle}`}>Username</label>
            <br />
            <input
                type="text"
                name="username"
                value={login.username}
                id="username"
                placeholder="username"
                onChange={handleChange} />
            <br />
            <label htmlFor='password' className={`label-${theme.themeStyle}`}>Password</label>
            <br />
            <input
                type="text"
                name="password"
                value={login.password}
                id="password"
                onChange={handleChange} />
            <br />
            <button onClick={handleSubmit} className={`label-${theme.themeStyle}`}>Submit</button>
        </form>
        <button onClick={handleLogout} className={`label-${theme.themeStyle}`}>logout</button>
    </div>
}

export default LoginFeature