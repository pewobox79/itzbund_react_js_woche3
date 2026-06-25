import { useEffect, useState } from "react"
const ABCExercise = () => {

    const [userId, setUserId] = useState(1)
    const [selectedUser, setSelectedUser] = useState({ id: "", username: "" })

    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSelectedUser(data))

    }, [userId])
    
    return <div>
        <div>
            <p>ID:{selectedUser.id}</p>
            <p>Name: {selectedUser.username}</p>
        </div>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <button onClick={() => setUserId(4)}>User 4</button>
        <button onClick={() => setUserId(5)}>User 5</button>
    </div>
}


export default ABCExercise