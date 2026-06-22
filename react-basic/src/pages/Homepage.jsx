import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"

const Homepage = () => {
    return <>
        <div>
            <Heading
                title="das ist mein heading als prop"
                variant="h1"
            />
        </div>
        <div>
            <Heading
                title="das ist mein zweites div element"
                variant="h2"
                text="das ist mein paragraphen text"
            >
                <h4>das ist ein child element</h4>

            </Heading>
        </div>
        <Paragraph
            text="das ist mein paragraph prop"
        />
    </>
}


export default Homepage