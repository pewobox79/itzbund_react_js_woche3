import { memo } from "react"

function Footer () {
    
    console.log("Footer rendered")
    return <footer>
        <h3>das ist der Footer</h3>
    </footer>
}

export default memo(Footer)