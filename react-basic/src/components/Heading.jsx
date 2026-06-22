import Paragraph from "./Paragraph"

const Heading = (props) => {
    // => props entspricht immer einem 
    console.log("props in heading", props)
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