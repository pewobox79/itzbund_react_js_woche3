
import { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
const ConsentFeature = () => {

    const [consent, setConsent] = useState(false)

    function handleConsent() {
        setConsent(!consent)
    }

    useEffect(() => {

        console.log("effect runs")
        if (!consent) return

        //useCase CONSENT PLUGIN
        const h1 = document.createElement("h1")
        h1.setAttribute("id", "consent")
        h1.innerText = "Consent UseCase"
        document.body.append(h1)

        //cleanup function
        return () => {
            const elementToRemove = document.getElementById("consent")
            elementToRemove?.remove()
            console.log("cleanup runs")
        }

    }, [consent])

    console.log("user feature renders")
    console.log("consent value", consent)
    return <section>
        <div>
            <Heading title="Consent Feature" variant="h1" />
            <button onClick={handleConsent}>consent</button>
            <div>
                ...hier kommt dann die liste
            </div>
        </div>
    </section>
}

export default ConsentFeature