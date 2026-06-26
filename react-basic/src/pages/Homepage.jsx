import Counter from "../components/Counter"
import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import ConsentFeature from "../features/ConsentFeature/ConsentFeature"
import LoginFeature from "../features/LoginFeature/LoginFeature"
import UserFeature from "../features/UserFeature/UserFeature"

const Homepage = () => {

    return <>
        <div>
            <Counter/>
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
        <UserFeature/>
        <ConsentFeature/>
        <LoginFeature/>
    </>
}


export default Homepage