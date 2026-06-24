import Heading from "../../components/Heading"
import Paragraph from "../../components/Paragraph"
import {Link} from 'react-router'

const UserItem =({id, username, email})=>{

    return <div className="userItem">
        <Heading title={username} variant="h2"/>
        <Paragraph text={email}/>
        <Link to={`/users/${id}`}>Details</Link>
    </div>
}

export default UserItem