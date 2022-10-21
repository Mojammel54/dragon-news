import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Profile = () => {
    const { user } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)
    const handleSubmit = event => {


        event.preventDefault();
        console.log(photoURLRef.current.value)


    }

    const handleChange = event => {


        setName(event.target.value)

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>User name</Form.Label>
                    <Form.Control onChange={handleChange} defaultValue={name} type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URl</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="PhotoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;