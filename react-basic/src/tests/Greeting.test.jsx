import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Greeting from '../components/Greeting'


test("zeigt namen an", ()=>{

    render(<Greeting name="Peter"/>)
    expect(screen.getByText("Hello Peter")).toBeInTheDocument()

})