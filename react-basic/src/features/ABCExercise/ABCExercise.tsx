import { useEffect, useState } from "react"
const ABCExercise = () => {

    const [userId, setUserId] = useState(1)
    const [state, setState] = useState({ loading: true })
    const [selectedUser, setSelectedUser] = useState({ id: "", username: "" })

    useEffect(() => {
        setState({...state, loading: true})
        const controller = new AbortController()
        const { signal } = controller

        const url = `https://jsonplaceholder.typicode.com/users/${userId}`

        const config = {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            signal
        }

        fetch(url, config)
            .then(res => res.json())
            .then(data => {
                setSelectedUser(data)
                setState({...state, loading: false})
            })

        return () => {
            setState({ ...state, loading: true })
            controller.abort()
            
        }

    }, [userId])

    
    return <div>
        {state.loading ? <h2>daten werden geladen von user {userId}...</h2> : <div>
            <p>ID:{selectedUser.id}</p>
            <p>Name: {selectedUser.username}</p>
        </div>}
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <button onClick={() => setUserId(4)}>User 4</button>
        <button onClick={() => setUserId(5)}>User 5</button>
    </div>
}


export default ABCExercise