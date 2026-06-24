import Heading from '../components/Heading'
import { Link } from 'react-router'
const Errorpage = () => {

    return <div>
        <Heading title="404 - Error Page" variant="h1" />
        <Link to="/">Back to Homepage</Link>
    </div>
}

export default Errorpage