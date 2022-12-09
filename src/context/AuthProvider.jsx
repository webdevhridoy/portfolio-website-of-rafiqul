import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const authContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [select, setSelect] = useState("");

    const [user, setUser] = useState('');
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    };

    const providerLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        user,
        logOut,
        signIn,
        providerLogin,
        select,
        setSelect
    };

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;