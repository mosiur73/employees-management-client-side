import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import SocialLogin from '../../component/SocialLogin/SocialLogin';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import axios from 'axios';
import { imageUpload } from '../../api/utils';
import Swal from 'sweetalert2';





// const image_hosting_key=import.meta.env. VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const SignUp = () => {
  const axiosPublic=useAxiosPublic()
  const navigate = useNavigate()
  const { createUser, updateUserProfile } = useContext(AuthContext)

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.role.value;
    const salary = form.salary.value;
    const account = form.account.value;
    const Designation = form.designation.value;
    const password = form.password.value;
    const image=form.image.files[0]
  

 
  const photoUrl=await imageUpload(image)
    
    // try{
    //   const result= await createUser(email, password)

    //   await updateUserProfile(name,photoUrl)
    //   console.log(result)
    //    toast.success('Registration successful! ');
    //     navigate('/');
    // }catch (err) {
    //   console.log(err)
    //   toast.error(err?.message)
    // }

    
    createUser(email, password)
      .then(result => {
        console.log(result)
        
             updateUserProfile(name,photoUrl)
             .then(()=>{
              const userInfo={name,email,photoUrl,role,salary,account,Designation}
              
              axiosPublic.post('/users',userInfo)
              .then(res => {
                if (res.data.insertedId) {
                    console.log('user added to the database',res.data)
                   
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
              toast.success('Registration successful! ');
              // navigate('/');
             })
             .catch(error=>{
              console.log(error)
             })

           })
      .catch(error => {
        console.log(error)
        toast.error('Registration failed. Please try again.');
      })
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-white'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to signup page</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>

            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>

            {/* role and salary */}
            <div className='flex gap-2'>
              {/* role */}
              <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Role
              </label>
              <select
              name='role'
               className="select select-primary w-full max-w-xs required:">
                <option value="Hr">Hr</option>
                <option value="employee">Employee</option>
              </select>
              </div>
              {/* salary */}
              <div>
              <label htmlFor='salary' className='block mb-2 text-sm'>
               salary
              </label>
              <input
                type='number'
                name='salary'
                id='salary'
                required
                placeholder='Enter Your Email Here'
                className='w-full required: px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            </div>

            <div className='flex gap-3 items-center'>
            
              {/* Bank account */}
              <div>
              <label className='block mb-2 text-sm'>
              Bank account no
              </label>
              <input
                type='number'
                name='account'
                id='account'
                required
                placeholder='Enter Your account no'
                className='w-full required: px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
              {/* designation */}
              <div>
              <label className='block mb-2 text-sm'>
              Designation
              </label>
              <select
              name='designation'
              className="select select-primary w-full max-w-xs required:">
                <option  value="digital marketer">Digital Marketer </option>
                <option value="social-media-executive">Social Media executive</option>
                <option value="sales-assistant">Sales Assistant</option>
              </select>
              </div>
            </div>
            {/* photo upload */}
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Photo
              </label>
              
              <input
                
                type='file'
                name='image'
                id='image'
                 accept='image/*'
                placeholder='upload your photo'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'

              className='bg-lime-500 w-full rounded-md py-3 text-white'
            >SignUp

            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <SocialLogin></SocialLogin>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-lime-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;