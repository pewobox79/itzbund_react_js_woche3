import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter'


describe("Erhöht den Count bei Klick", ()=>{

    test("Erhöht den Counter um 1", async ()=>{

        render(<Counter/>)
        expect(screen.getByText("Count: 0")).toBeInTheDocument()
        await userEvent.click(screen.getByRole("button", {name: "Erhöhen"}))
        expect(screen.getByText("Count: 1")).toBeInTheDocument()

    })

    test("Erhöht den Counter um 3", async () => {

        render(<Counter />)
        expect(screen.getByText("Count: 0")).toBeInTheDocument()
        await userEvent.click(screen.getByRole("button", { name: "Erhöhen" }))
        await userEvent.click(screen.getByRole("button", { name: "Erhöhen" }))
        await userEvent.click(screen.getByRole("button", { name: "Erhöhen" }))
        expect(screen.getByText("Count: 3")).toBeInTheDocument()

    })




})


describe("Reduziert counter bei klick", ()=>{

    test("Reduziert den Counter um 1", async () => {

        render(<Counter />)
        expect(screen.getByText("Count: 0")).toBeInTheDocument()

        await userEvent.click(screen.getByRole("button", { name: "Erhöhen" }))
        await userEvent.click(screen.getByRole("button", { name: "Erhöhen" }))
        expect(screen.getByText("Count: 2")).toBeInTheDocument()

        await userEvent.click(screen.getByRole("button", { name: "Reduzieren" }))
        await userEvent.click(screen.getByRole("button", { name: "Reduzieren" }))
        await userEvent.click(screen.getByRole("button", { name: "Reduzieren" }))
        expect(screen.getByText("Count: 0")).toBeInTheDocument()

    })



})