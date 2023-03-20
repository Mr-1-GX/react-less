import { LoginForm } from "../../components/auth"

export const Login = () => {
    return (
        <div className="row p-2">
            <h2>Welcome 🙏</h2>
            <div className="col-md-12 shadow p-3">
                <LoginForm />
            </div>
        </div>
    )
}