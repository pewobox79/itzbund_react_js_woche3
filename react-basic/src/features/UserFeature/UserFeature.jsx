import { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import UserItem from './UserItem'

const GUACAMOLE_URL = 'https://jsonplaceholder.typicode.com/users'
//const VICI_URL = 'http://localhost:5173/api/users'

const UserFeature = () => {

    const [users, setUsers] = useState([])
    const [state, setState] = useState({loading: false, error: false, success: false})
    async function handleAPIAsync() {
        setState({...state, loading: true})
        try {
            const response = await fetch(GUACAMOLE_URL)
            if (!response.ok) {
                setState({...state, error: true})
                return { msg: "fehler bei response" }
            }
            const data = await response.json()
            return data
        } catch (err) {
            console.log("error", err)
            return { msg: "api request catched error" }
        } finally{
            setState({...state, loading: false})
        }
    }

    useEffect(() => {
        console.log("effect runs")
        handleAPIAsync()
            .then(data => setUsers(data))

    }, [])

    console.log("user feature renders")
    console.log("userlist", users)

    // dynamic rendering hier...
    const UserList = users.map((user) => <UserItem key={user.username + user.id} {...user} />)

    return <section>
        <div>
            <Heading title="User List" variant="h1" />
            <div>
                {UserList}
            </div>
        </div>
    </section>
}

export default UserFeature