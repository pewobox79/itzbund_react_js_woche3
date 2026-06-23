import Heading from "../../components/Heading"
import Paragraph from "../../components/Paragraph"

const UserItem =({username, email})=>{

    return <div className="userItem">
        <Heading title={username} variant="h2"/>
        <Paragraph text={email}/>
    </div>
}

export default UserItem