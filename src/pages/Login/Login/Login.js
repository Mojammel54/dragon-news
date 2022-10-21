import React, { useContext, useState } from 'react';
import { Toast } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const [error, setError] = useState('')

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()


    const { signInWithEmail, setLoading } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target

        const email = form.email.value

        const password = form.pass.value
        console.log(email, password)


        signInWithEmail(email, password)
            .then(result => {

                const user = result.user
                console.log(user)
                form.reset()
                setError('')

                if (user.emailVerified) {


                    navigate(from, { replace: true })


                }
                else {
                    toast.error('Your email is not verified')

                }


            })
            .catch(error => {
                setError(error.message)


            })
            .finally(() => setLoading(false))



    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email " required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='pass' placeholder="Password" required />
            </Form.Group>


            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;