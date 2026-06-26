import type { CSSProperties, ReactElement } from "react"

interface ButtonProps {
    label: string | number,
    customStyle: CSSProperties
    children?: ReactElement | ReactElement[]
    isBigBtn?: boolean
    buttons: {label: string}[]
    action: (num1:number, num2:number)=>number
}

type StyleTypes = "primary" | "secondary"
interface NewButtonProps extends ButtonProps {
    style?: StyleTypes
}



const Button = ({ label, customStyle, style= "secondary", children, buttons }: NewButtonProps) => {

    return <>
    {buttons.map((btn)=>(
        <button
            style={customStyle}
        >
            {children || btn.label} {style}
        </button>
    ))}</>
}
export default Button