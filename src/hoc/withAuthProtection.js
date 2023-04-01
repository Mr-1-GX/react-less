
import { Loader } from '../atoms'
import { useRequireAuth } from '../hooks'

export const withAuthProtection = (WrappedComponents) => {
    const AuthProtection = (props) => {
        const auth = useRequireAuth()
        if (!auth) {
            return <Loader />
        }
        return <WrappedComponents {...props} />
    }
    AuthProtection.displayName = 'AuthProtection'

    return AuthProtection
}