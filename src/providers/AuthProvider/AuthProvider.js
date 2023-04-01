
import { createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom'

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { loginAsync, registerAsync } from '../../api/auth.service'
import { LOGIN_PATH, PROFILE_PATH } from "../../utils";

export const authContext = createContext({})

authContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('super-app:auth', false)
    const navigate = useNavigate()

    const login = async (credentials) => {
        const user = await loginAsync(credentials)
        console.log('user', user)
        if (user && user.token) {
            setUser(true)
            navigate(PROFILE_PATH)
        } else (
            setUser(false)
        )
    };

    const register = async (credentials) => {
        const newUser = await registerAsync(credentials)
        console.log('newUser', newUser)
        if (newUser && newUser.token) {
            setUser(true)
            navigate(PROFILE_PATH)
        } else (
            setUser(false)
        )
    }

    const logOut = () => {
        setUser(false)
        navigate(LOGIN_PATH)
    }
    return (
        <authContext.Provider
            value={{
                login,
                register,
                logOut,
                user,
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export const useAuthProvider = () => {
    const auth = useContext(authContext)
    if (!auth) {
        throw SyntaxError('AuthProvider is not defined')
    }
    return auth
}