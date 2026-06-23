import { useEffect } from 'react'
import Heading from '../../components/Heading'
const UserFeature = () => {


    useEffect(() => {

        console.log("effect runs")

        //useCase CONSENT PLUGIN
        const h1 = document.createElement("h1")
        h1.innerText = "Consent UseCase"
        document.body.append(h1)




    }, [])

    console.log("user feature renders")
    return <section>
        <div>
            <Heading title="User List" variant="h1" />

            <div>
                ...hier kommt dann die liste
            </div>
        </div>
    </section>
}

export default UserFeature