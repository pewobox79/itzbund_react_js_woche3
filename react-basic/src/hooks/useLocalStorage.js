import { useState } from "react"
export const useLocalStorage =(key, initValue="kein wert")=>{

    const [value, setValue] = useState(()=>{
        const storedValue = window.localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : initValue
    })

    const setLocalStorage = (newValue) => {
        setValue(newValue)
        window.localStorage.setItem(key, JSON.stringify(newValue))
    }

    const removeLocalStorage =()=>{
        setValue(initValue)
        window.localStorage.removeItem(key)
    }

    return { value, setLocalStorage, removeLocalStorage }
}