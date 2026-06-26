import { createContext } from "react";

export const UserContext = createContext<{user: {username: string}, setUser: React.Dispatch<React.SetStateAction<{username: string}>>}>({user:{username: ""}, setUser: ()=>{}})