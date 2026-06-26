import Heading from '../../components/Heading'
import UserItem from './UserItem'
import { GUACAMOLE_URL } from '../../utils/constantValues'
import { useFetch } from '../../hooks/useFetch'


const UserFeature = () => {

    //custom useFetch hook
    const { data, isLoading, error } = useFetch(GUACAMOLE_URL)
    if(error) return <h1>error ist passiert</h1>
    if (isLoading) return <h1>daten werden geladen....</h1>
    // dynamic rendering hier...
    const UserList = data.map((user) => <UserItem key={user.username + user.id} {...user} />)

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