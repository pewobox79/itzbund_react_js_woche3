import { Link, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { GUACAMOLE_URL } from '../utils/constantValues'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import { useLocalStorage } from '../hooks/useLocalStorage'

const SingleUserPage = () => {
    const { id } = useParams()

    const {value} = useLocalStorage("itzb_user")
    console.log("value", value)
    const [selectedUser, setSelectedUser] = useState({})
    const [status, setStatus] = useState({ loading: true, error: false, success: false })
    const url = `${GUACAMOLE_URL}/${id}`


    useEffect(() => {

        async function fetchSingleUser() {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    setStatus({ ...status, error: true })
                }

                const data = await response.json()
                setSelectedUser(data)
            } catch (err) {
                console.log("error", err)
                setStatus({ ...status, error: true })
            } finally {
                setStatus({ ...status, loading: false })
            }
        }
        fetchSingleUser()
    }, [id])


    if (status.loading) return <h1>user daten werden geladen</h1>

    if (Object.values(selectedUser).length == 0) return <div>
        <Heading title="No user Available" variant="h1" />
        <Link to="/users">Back to UserOverview</Link>
    </div>

    return <div>
        <Heading title={selectedUser.username} variant="h1" />
        <Paragraph text={selectedUser.email} />
        {value.role === "teamleiter" && <div>
            <p>Tel: {selectedUser.phone}</p>
            <p>ZipCode: {selectedUser.address.zipcode}</p>
        </div>}
    </div>

}

export default SingleUserPage