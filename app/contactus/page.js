'use client';
import { useRouter } from 'next/navigation';
import { FaRegEnvelope, FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactUs() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name||!email  || !contactNo||!message) {
      setError('Please fill in all fields.');
     } else{
        router.push('/signin');
      }
    
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center flex-1">
      <div className="z-10  max-w-5xl items-center justify-center font-mono text-sm">
        <div className="bg-white rounded-2xl shadow-2xl flex w-3/3 max-w-10xl">
          <div className="w-200 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Realestate</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-semibold text-green-500 mb-2">Contact Us</h2>
              <div className="border-2 w-10 border-green inline-block mb-2"></div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                    <FaUser className="text-gray-400 m-2" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                    <FaPhoneAlt className="text-gray-400 m-2" />
                    <input
                      type="tel"
                      name="contactNo"
                      placeholder="Contact Number"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      value={contactNo}
                      onChange={(e) => setContactNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                    <textarea
                      name="message"
                      placeholder="Enter your message"
                      className="bg-gray-100 outline-none text-sm flex-1 resize-none h-32 p-2"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  {error && <p className="text-red-500 my-3">{error}</p>}
               <button
                    type="submit"
                    className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                  >
                    Send Message
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
