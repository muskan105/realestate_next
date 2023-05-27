'use client';
// import { BiSearch } from 'react-icons/bi';

// const search=()=>{
//     return(
//         <div className="
//         border-[1px]
//         w-full
//         md:w-auto
//         py-2
//         rounded-full
//         shadow-sm
//         hover:shadow-md
//         transition
//         cursor-pointer">
// <div className="
//         flex
//         flex-row
//         items-center
//         justify-between">
//             <div className='
//             text-sm
            
           
//             px-5
//             border-x-[1px]
//             flex-1
           
//             items-center
//             '
//             > Filter</div>
//     <div className="
//             text-sm
//             fond-semibold
//             px-2
//             hidden sm:block">Search</div>
//     <div className="
//             bg-rose-500
           
//             rounded-full
//             text-white">

// <BiSearch size={18}/>
//     </div>
//     </div>

// </div>
   
//     );
// }
// export default search;
// ---------------------------------------------------------------------------------------------------
// 'use client';
// import { BiSearch } from 'react-icons/bi';
// import { useState } from 'react';

// const Search = () => {
//   const [showFilter, setShowFilter] = useState(false);

//   const toggleFilter = () => {
//     setShowFilter(!showFilter);
//   };

//   const handleFilterSelection = (option) => {
//     // Handle selected filter option
//     console.log('Selected option:', option);
//   };

//   return (
//     <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
//       <div
//         className="flex flex-row items-center justify-between"
//         onClick={toggleFilter}
//       >
//         <div className="text-sm px-5 border-x-[1px] flex-1 items-center">Filter</div>
//         <div className="text-sm font-semibold px-2 hidden sm:block">Search</div>
//         <div className="bg-rose-500 rounded-full text-white">
//           <BiSearch size={18} />
//         </div>
//       </div>
//       {showFilter && (
//         <div className="p-4">
//           <div className="text-sm font-semibold mb-2">Filter Options:</div>
//           <ul>
//             <li className="cursor-pointer" onClick={() => handleFilterSelection('BHK')}>
//               BHK
//             </li>
//             <li className="cursor-pointer" onClick={() => handleFilterSelection('Place')}>
//               Place
//             </li>
//             <li className="cursor-pointer" onClick={() => handleFilterSelection('Price')}>
//               Price
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

// -------------------------------------------------------------------------------------------------

import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

const Search = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    setShowSearchBox(false);
  };

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
    setShowFilter(false);
  };

  const handleFilterSelection = (option) => {
    // Handle selected filter option
    console.log('Selected option:', option);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div
          className={`text-sm px-5 border-x-[1px] flex-1 items-center ${
            showFilter ? 'rounded-none' : 'rounded-l-full'
          }`}
          onClick={toggleFilter}
        >
          Filter
        </div>
        <div
          className={`text-sm font-semibold px-2 hidden sm:block ${
            showSearchBox ? 'rounded-none' : 'rounded-r-full'
          }`}
          onClick={toggleSearchBox}
        >
          Search
        </div>
        <div className="bg-rose-500 rounded-full text-white">
          <BiSearch size={25} />
        </div>
      </div>
      {showFilter && (
        <div className="p-4">
          <div className="text-sm font-semibold mb-2">Filter Options:</div>
          <ul>
            <li className="cursor-pointer" onClick={() => handleFilterSelection('BHK')}>
              BHK
            </li>
            <li className="cursor-pointer" onClick={() => handleFilterSelection('Place')}>
              Place
            </li>
            <li className="cursor-pointer" onClick={() => handleFilterSelection('Price')}>
              Price
            </li>
          </ul>
        </div>
      )}
      {showSearchBox && (
        <div className="p-2">
          <input
            type="text"
            placeholder="Enter search query"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default Search;


