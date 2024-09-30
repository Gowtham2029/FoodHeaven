import { createContext } from "react";

const userContext = createContext({
    user : {
        name: "Gowtham",
        email: "gowtham@gmail.com",
    }
})

export default userContext;