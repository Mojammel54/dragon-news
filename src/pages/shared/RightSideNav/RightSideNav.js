import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {

        providerLogin(googleProvider)
            .then(result => {

                const user = result.user;
                console.log(user)


            })
            .catch(error => {

                console.log(error)


            })



    }

    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login with Google</Button>
                    <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github </Button>
                </ButtonGroup>
            </div>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>  Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>

                <BrandCarousel></BrandCarousel>

            </div>

        </div>
    );
};

export default RightSideNav;