import { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import UserItem from './UserItem'

const GUACAMOLE_URL = 'https://jsonplaceholder.typicode.com/users'
//const VICI_URL = 'http://localhost:5173/api/users'

const UserFeature = () => {

    const [users, setUsers] = useState([])


    useEffect(() => {
        console.log("effect runs")
        fetch(GUACAMOLE_URL)
            .then(res => res.json())
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