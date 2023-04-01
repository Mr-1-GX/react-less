import { RegisterForm } from "../../components/auth"

export const Register = () => {
    return (
        <div className="row p-2">
            <h2>Registration Page</h2>
            <div className="col-md-12 shadow p-3">
                <RegisterForm />
            </div>
        </div>
    )
}