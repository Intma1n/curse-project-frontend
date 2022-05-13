import React, {useCallback, useState} from "react";

type AuthContextType = {
    type: string | null | undefined,
    token: string | null | undefined,
    isLoggedIn: boolean,
    login: (token: string, username: string) => void,
    logout: () => void,
}

const AuthContext = React.createContext<AuthContextType>({
    type: '',
    token: '',
    isLoggedIn: false,
    login: (token: string) => {
    },
    logout: () => {
    },
})

const retrieveStoredData = () => {
    const storedToken = localStorage.getItem('token')
    const storedType = localStorage.getItem('type')

    return {
        type: storedType,
        token: storedToken,
    }
}

export const AuthContextProvider = (props: any) => {
    const userData = retrieveStoredData()

    let initialToken
    let initialUserName

    if (userData) {
        initialToken = userData.token
        initialUserName = userData.type
    }

    const [token, setToken] = useState(initialToken)
    const [username, setUserName] = useState(initialUserName)

    const userIsLoggedIn = !!token

    const logoutHandler = useCallback(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('type')
        setToken(null)
        setUserName(null)
    }, [])

    const loginHandler = (token: string, username: string) => {
        setToken(token)
        setUserName(username)
        localStorage.setItem('token', token)
        localStorage.setItem('username', username)
    }

    const contextValue = {
        type: '',
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext