
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import{ FaRegEnvelope} from 'react-icons/fa';
import React, { useState } from 'react';
import{MdLockOutline}from 'react-icons/md';

const ForgotPassword = () =>  {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setconfirm_Password] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleforgotpassword = (event) => {
    event.preventDefault();

    if (!email || !password || !confirm_password) {
      setError('Please fill in all fields.');
    } else if (password !== confirm_password) {
      setError('Passwords do not match.');
    } else {
      setTimeout(() => {
        setSuccessMessage('Password successfully set!');
        router.push('/signin');
      }, 3000); // Redirect after 3 seconds
    
      // Perform sign in logic
      
    }
    useEffect(() => {
      let redirectTimer;
      if (successMessage) {
        redirectTimer = setTimeout(() => {
          router.push('/');
        }, 3000); // Redirect after 3 seconds
      }
      return () => clearTimeout(redirectTimer);
    }, [successMessage, router]);

    
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-content center p-24 text-center flex-1">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="bg-white rounded-2xl shadow-2xl flex w-3/3 max-w-10xl">
          <div className="w-200 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Realestate</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-semibold text-green-500 mb-2">Reset your password</h2>
              <div className="border-2 w-10 border-green inline-block mb-2"></div>

              <p className="text-gray-700 my-3">or use your email account</p>
              <form onSubmit={handleforgotpassword}>

              <div className="flex flex-col items-center justify-center">

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"

                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    minLength={6}
                    maxLength={10}
                    required
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                   />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    minLength={6}
                    maxLength={10}
                    required
                    name="confirmpassword"
                    placeholder="ConfirmPassword"
                    value={confirm_password}
                    onChange={(e) => setconfirm_Password(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                </div>


                {error && <p className="text-red-500 my-3">{error}</p>}
              
                <button
                 type="submit"
                  className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">
             
                  Reset Password
              </button>
        
             </form>
          </div>
          
      </div>
      
      </div>
     
      
     </div>
     {successMessage && (
      <p className="text-green-900 my-3">{successMessage}</p>
    )}

    {error && (
      <p className="text-red-500 my-3">{error}</p>
    )}
     
   </main>
  );
 }
export default ForgotPassword;
