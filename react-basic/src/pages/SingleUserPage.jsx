import { useParams } from 'react-router'
const SingleUserPage = () => {
    const {id} = useParams()
    
    return <h1>Single user info von user Id {id}</h1>

}

export default SingleUserPage