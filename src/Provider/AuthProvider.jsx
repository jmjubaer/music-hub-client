import React, { createContext, useState } from 'react';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState("")
    const [theme,setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }


    const authInfo = {
        user,
        theme,
        toggleTheme,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;