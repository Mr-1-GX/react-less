
import { useForm } from 'react-hook-form'

import { Form, Button } from '../../atoms'

import { useAuthProvider } from '../../providers/AuthProvider'

export const RegisterForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { register: signUp } = useAuthProvider()
    const onSubmit = (signUpData) => {
        console.log('_signUpData_', signUpData)
        signUp(signUpData)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sing Up</h2>
            <hr />
            <div className='col-5 m-auto'>
                <div className="mb-3">
                    <label htmlFor="email1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email1" {...register('email', { required: true })} />
                    {errors.email && (
                        <div
                            id="emailHelp"
                            className="form-text text-danger"
                        >
                            Email incorect
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password1" {...register('password', { required: true })} />
                    {errors.password && (
                        <div
                            id="passwordHelp"
                            className="form-text text-danger"
                        >
                            Password incorect
                        </div>
                    )}
                </div>
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </div>
        </Form>
    )
}