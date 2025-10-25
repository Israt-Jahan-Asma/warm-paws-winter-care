import React, { createContext, use, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import toast from 'react-hot-toast';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider()
   

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut= ()=>{
        return signOut(auth)
    }

    const signIn=(email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // const updateUser=(updatedData)=>{
    //     return updateProfile(auth.currentUser, updatedData)
    // }
    const updateUser = async (updatedData) => {
        try {
            await updateProfile(auth.currentUser, updatedData);
            await auth.currentUser.reload();
            setUser({ ...auth.currentUser });
            return auth.currentUser;
            
        } catch (error) {
            toast.error("Profile update failed:", error);
        }
    };
      
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        signInWithGoogle
    }
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;