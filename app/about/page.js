// import Head from 'next/head';
// 'use client';

// import React, { useState } from 'react';

// import React from 'react';
// import Layout from '../layout';
// import Navbar from '../components/navbar/Navbar';

// import Link from 'next/link';
// import Image from 'next/image';
// import cardList from './data';
// import { FaArrowRight } from 'react-icons/fa';

// export default function About() {

   
//     return(
//         <Layout>
//         <Navbar />
      
       
//     <main className="flex min-h-screen flex-col items-center justify-content center p-24 text-center flex-1">
      
//         <div className='container mx-auto py-36 px-6'>
//             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
//     {cardList.map(card=>(
//         <div className='shadows shadow-lg rounded-lg ' >
//         <img className='rounded-t-lg' src={card.img} alt="" />
//         <div className='p-5'>
//         <h3 className='text-2xl font-bold text-slate-700 mb-3 '>{card.title}</h3>
//         <p className='text-lg font-normal text-gray-600 mb-3 '>{card.text}</p>
//         <button className='border-2 border-green-500 text-green-500 rounded-full px-4 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>
//         Read More <FaArrowRight className='ml-1' />
//       </button>
//         </div>
//         </div>
//        ))}
//        </div>
//        </div>
//         <Link href="/"></Link>
//         </main>
//        </Layout>
//     )
// };



'use client';
import React, { useState } from 'react';
import Layout from '../layout';
import Navbar from '../components/navbar/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import cardList from './data';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleReadMore = (cardId) => {
    if (expandedCardId === cardId) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(cardId);
    }
  };

  return (
    <Layout>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-content center p-24 text-center flex-1">
        <div className="container mx-auto py-36 px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {cardList.map((card) => (
              <div
                className={`card ${expandedCardId === card.id ? 'expanded' : ''}`}
                key={card.id}
              >
                <img className="rounded-t-lg" src={card.img} alt="" />
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-slate-700 mb-3">{card.title}</h3>
                  <p className="text-lg font-normal text-gray-600 mb-3">
                    {card.text}
                  </p>
                  {expandedCardId === card.id && (
                    <div className="text-lg font-normal text-gray-600 mb-3">
                      {card.fullText}
                    </div>
                  )}
                  <button
                    className="border-2 border-green-500 text-green-500 rounded-full px-4 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                    onClick={() => handleReadMore(card.id)}
                  >
                    {expandedCardId === card.id ? 'Read Less' : 'Read More'}{' '}
                    <FaArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link href="/"></Link>
      </main>

      <style jsx>{`
        .card {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
          transition: height 0.3s;
          height: fit-content;
        }

        .card:not(:last-child) {
          margin-bottom: 2rem;
        }

        .card.expanded {
          height: max-content;
        }

        // .grid {
        //   display: grid;
        //   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        //   grid-gap: 2rem;
        // }
      `}</style>
    </Layout>
  );
}




