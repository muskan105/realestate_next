

// const AdminPage=()=>{
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
     
//     </div>
//   );
// }
// export default AdminPage;
'use client';
import {  getStaticProps } from 'next';
import axios from 'axios';

const AdminPage = ({ ghars }) => {
  return (
    <div>
      <h1>Admin Interface</h1>
      <ul>
        {ghars.map((ghar) => (
          <li key={ghar.id}>
            <h3>{ghar.name}</h3>
            <p>{ghar.price}</p>
            <img src={ghar.image} alt={ghar.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await axios.get('http://localhost:8000/api/ghars/');
  const ghars = response.data;

  return {
    props: {
      ghars,
    },
  };
}

export default AdminPage;
