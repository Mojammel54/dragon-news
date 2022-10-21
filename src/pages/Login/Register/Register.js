import React, { useContext, useState } from 'react';
import { Toast } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Register = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const { CreateUserSignUpWithEmail, updateProfileInfo, emailVerification } = useContext(AuthContext)
    const handleSubmit = event => {

        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photoURL = form.photoURL.value
        const password = form.password.value
        console.log(name, email, password, photoURL)
        CreateUserSignUpWithEmail(email, password)
            .then(result => {

                const user = result.user
                console.log(user)
                updateProfileInfo(name, photoURL)
                    .then(() => { })
                    .catch(error => {
                        console.log(error)


                    })

                emailVerification()
                    .then(() => {

                        toast.success('Please verify before login')


                    })
                    .catch(error => {
                        console.log(error)
                    })


                setError('')
                form.reset()




            })
            .catch(error => {
                setError(error.message)


            })



    }

    const handleAccepted = (event) => {

        setAccepted(event.target.checked)


    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Photo URL" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                    onClick={handleAccepted}
                    label={<> Accept <Link to='/registration'> Terms and conditions</Link> </>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;