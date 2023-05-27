
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import{ FaRegEnvelope} from 'react-icons/fa';
import{MdLockOutline}from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';



const SignUp = () => {

  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();
    // console.log(firstName,lastName,email,password)
try{
  const{data} = await axios.post('/api/signup',{
    firstName,
    lastName,
    email,
    password,
  });
  console.log(data);

 } catch(error){
     console.log(error);

  }

    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all fields.');
    } else {
      // Perform sign in logic
      router.push('/app/api/route');
    }
  };
    return (
  
  
    <main className="flex min-h-screen flex-col items-center justify-content center p-24 text-center flex-1">
      <div className="z-10 w-full max-w-10xl items-center justify-center font-mono text-sm lg:flex">
        <div className="bg-white rounded-2xl shadow-2xl flex w-3/3 max-w-10xl">
          <div className="w-200 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Realestate</span>
            </div>
            <div className="py-10">
              <h2 className="text-4xl font-bold text-green-500 mb-2">Sign Up to Account</h2>
              <div className="border-2 w-10 border-green inline-block mb-2"></div>

              <p className="text-gray-500 my-3">or use your email account</p>
              <form onSubmit={handleSignUp}>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                  <FaUserAlt className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="firstname"
                    placeholder="FirstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  
                  />
                </div>

                <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                  <FaUserAlt className="text-gray-400 m-2" />
                  <input
                    type="text"
                    required
                    name="lastname"
                    placeholder="LastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
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

                <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
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

                {error && <p className="text-red-500 my-3">{error}</p>}
               
  <button className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">
    SignUp
  </button>

      
              </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
export default SignUp;
