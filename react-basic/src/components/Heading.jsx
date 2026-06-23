import Paragraph from "./Paragraph"

const Heading = (props) => {
    console.log("heading rendered")
    // => props entspricht immer einem 
    // => falls props {} dann auf Keys prüfen und länge abfragen == early return 
    if (Object.keys(props).length === 0) return

    const { title, variant, text, children } = props
    const Tag = variant
    return <>
        <Tag>{title}</Tag>
        <Paragraph text={text} />
        {children}
    </>
}

export default Heading