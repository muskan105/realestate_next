'use client';
import Avatar from "../Avatar";
import {AiOutlineMenu} from 'react-icons/ai';
import {useState} from 'react';
import { useCallback } from "react";
import MenuItem from "./MenuItem";
import Link from 'next/link';
  

const UserMenu= () => {
  const[isOpen, setIsOpen]= useState(false);
  const toggleOpen = useCallback(()=>{
    setIsOpen((value) => !value);
  }, []);
    return(
      <div className="relative">
      <div className="flex flex-row items-center gap-3">
        
      <Link href="/contactus"> <div 
          onClick={()=>{}}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          contact us
          </div></Link>
        <div 
        onClick={toggleOpen}
        className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
          <Avatar src="/images/placeholder.jpg"/>
          </div>
        </div>
      </div>
       {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        > 
            <div className="flex flex-col cursor-pointer">

            <Link href="/signin">     <MenuItem  
   onClick={()=>{}}
   label="Sign out"
    /></Link>
   </div>
   </div>
  )} 
         </div>
      
        
        
    );
}
export default UserMenu;







// import Link from 'next/link';

// import{FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
// import{MdLockOutline}from 'react-icons/md';

// const home = () => {
 

//   return (
    
//     <main className="flex min-h-screen flex-col items-center justify-content center p-24 text-center flex-1">
//       <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        
//        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl" >
//         <div className="w-3/5 p-5">
//           <div className='text-left font-bold '>
//           <span className='text-green-500'>Realestate</span> 
//           </div>
//           <div className='py-10'>
//             <h2 className='text-3xl font-bold text-green-500 mb-2'>
//                Sign in to Account
//                </h2>
//             <div className='border-2 w-10 border-green inline-block mb-2' ></div>
//             <div className='flex justify-center my-2'>
//               <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
//               <FaFacebookF className='text-sm'/>
//               </a>
//               <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
//               <FaLinkedinIn className='text-sm'/>
//               </a>
//               <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
//               <FaGoogle className='text-sm'/>
//               </a>
//             </div>
//             <p className='text-gray-500 my-3'>or use your email account</p>
//             {/* <form onSubmit={handleSubmit}></form> */}
//             <div className='flex flex-col items-center'>
//               <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
//                 <FaRegEnvelope className='text-gray-400 m-2'/>
//                 <input type='email' required name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>
//               </div>
              
//               <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
//                 <MdLockOutline className='text-gray-400 m-2'/>
//                 <input type='password' minLength={6} maxLength={10} required name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
//               </div>
//             <div className='flex justify-between w-64 mb-5'>
//               <label className='flex items-center text-xs'><input type='checkbox' required name='remmember' className='mr-1'/>Remember me</label>
//                <Link href='/ForgotPassword'><button type="submit" className='text-xs '>Forgot Password</button></Link>
//             </div>
//              <Link href="/about"> <button className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500  hover:text-white'>Sign In</button></Link>
//             </div>
//           </div>
//           </div>
// {/* section2-signup */}
//        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl  py-36 px-12">
//          <h2 className='text-2xl font-bold mb-2 '>Hello,Users!</h2>
//           <div className='border-2 w-10 border-white inline-block mb-2' ></div>
//            <p className='mb-10'> Fill up personal information and start your journey with us.</p>
//             <Link href="/signup"><button className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white  hover:text-green-500'>Sign Up</button></Link>
//         </div>{/* signup */}
//       </div>
//     </div>
//   </main>
  


//   );


  
// };
// export default home
