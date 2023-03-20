
import { useForm } from 'react-hook-form'

import { Form, Button } from '../../atoms'

export const LoginForm = (props) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (loginData) => {
        console.log('_loginData_', loginData)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sing In</h2>
            <hr />
            <div className='col-5 m-auto'>
                <div className="mb-3">
                    <label htmlFor="email1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email1" {...register('email', { required: true })} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password1" {...register('password', { required: true })} />
                </div>
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </div>
        </Form>
    )
}