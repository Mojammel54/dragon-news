import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'


const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)


    }


    const logOut = () => {

        setLoading(true)
        return signOut(auth);


    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            console.log('state change')
            if (currentUser === null || currentUser.emailVerified) {


                setUser(currentUser)


            }
            setLoading(false)



        })

        return () => unSubscribe();



    }, [])

    const CreateUserSignUpWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)




    }

    const signInWithEmail = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)


    }

    const updateProfileInfo = (name, url) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url

        })
    }


    const emailVerification = () => {

        return sendEmailVerification(auth.currentUser)


    }



    const authInfo = { user, providerLogin, logOut, CreateUserSignUpWithEmail, signInWithEmail, updateProfileInfo, loading, emailVerification, setLoading }

    return (
        <AuthContext.Provider value={authInfo}>


            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;