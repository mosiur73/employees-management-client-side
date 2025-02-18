import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';


 export const AuthContext =createContext(null)
 const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light');
  const axiosPublic=useAxiosPublic()

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
}


  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
       if(currentUser){
          //get token and store client
          const userInfo={email:currentUser.email}
          axiosPublic.post('/jwt',userInfo)
          .then(res =>{
            if(res.data.token){
              localStorage.setItem('access-token',res.data.token)
            }
          })
       }
       else{
             //TODO : remove token (if token stored in the client side:local storage, caching, in memory)
             localStorage.removeItem('access-token');
       }
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
}, [])

 // Toggle between dark and light themes
 const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); 
};

    const authInfo={
        user,
        setUser,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signOutUser,
        updateUserProfile,
        toggleTheme,
        theme

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;