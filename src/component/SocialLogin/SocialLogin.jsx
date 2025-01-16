import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';

import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SocialLogin = () => {
  const {signInWithGoogle}=useContext(AuthContext)
  const navigate=useNavigate()
  const axiosPublic=useAxiosPublic()

  const handleGoogleSignIn = async () => {
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
      const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photoURL:result.user?.photoURL,
          role:'employee',
          salary:'42342',
          account:'343434',
          Designation:'digital marketer',
          verified:'false'
      }
      axiosPublic.post('/users', userInfo)
      .then(res =>{
          console.log(res.data);
          navigate('/');
      })
  })
    // try {
    //   await signInWithGoogle()
    //   const userInfo={}

    //   toast.success('Signin Successful')
    //   navigate('/')
    // } catch (err) {
    //   console.log(err)
    //   toast.error(err?.message)
    // }
  }
    return (
        <div>
             <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        </div>
    );
};

export default SocialLogin;