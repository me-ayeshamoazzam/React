// import './App.css';
// import { useState, useEffect } from 'react';

// function App() {
//   const [users , setUsers] = useState([]);
  
//   useEffect(() => {
//     (async () => {
//       try{
//         const  response = await fetch("https://dummyjson.com/products")
//         setUsers(await response.json())
//       } catch (err){
//         console.log(err)
//       }
//     }
//     )()
//     console.log("useEffect")
//   }, [])

//   return (
//    <div>
//     <h1> Users List </h1>
//     {!users.length ?(
//       <p> Loading...</p>
//     ) : (
//       <ul>
//         {users.map(({id ,title , category}) => (
//           <li key={id}>
//             {title} - {category}
//           </li>
//         ))}
//       </ul>
//     )}
//    </div>
//   );
// }

// export default App;


import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.products); 
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("useEffect");
  }, []);

  let tableRows = [];

  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      tableRows.push(
        <tr key={users[i].id}>
          <td>{users[i].id}</td>
          <td>{users[i].title}</td>
          <td>{users[i].category}</td>
        </tr>
      );
    }
  }

  return (
    <div>
      <h1>Users List</h1>

      {users.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;