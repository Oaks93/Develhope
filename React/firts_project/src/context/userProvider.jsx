import { createContext } from "react";
const UserContext = createContext()


const UserProvider = ({ children }) => {
    const user = {
        userName: "John Doe",
        age: 25,
        city: "barcelona",
    };
    return <UserContext.Provider value={user}> {children} </UserContext.Provider>
}

export { UserProvider, UserContext }