import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../providers/AuthProvider";
import { REGISTER_PATH } from "../utils";

export const useRequireAuth = (redirectURL = REGISTER_PATH) => {
    const { user } = useAuthProvider()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate(redirectURL)
        }
    }, [user, navigate, redirectURL])
    return user
}