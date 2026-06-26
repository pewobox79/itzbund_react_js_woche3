import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import LoginForm from '../components/LoginForm'


test("aktualisiert email wert", async ()=>{

    render(<LoginForm/>)
    const input = screen.getByLabelText("E-Mail")
    const inputValue = "Peter@wolf.de"
    await userEvent.type(input, inputValue)
    expect(screen.getByText(`Eingabe: ${inputValue}`)).toBeInTheDocument()

})