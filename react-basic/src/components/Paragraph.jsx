export default function Paragraph(props){
    console.log("paragraph rendered")
    const {text} = props
    return <p>{text}</p>
}