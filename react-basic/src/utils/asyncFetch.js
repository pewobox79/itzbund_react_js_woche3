const GUACAMOLE_URL = 'https://jsonplaceholder.typicode.com/users'

export async function handleAPIAsync() {
    try {
        const response = await fetch(GUACAMOLE_URL)
        if (!response.ok) {
            return { msg: "fehler bei response" }
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.log("error", err)
        return { msg: "api request catched error" }
    }
}