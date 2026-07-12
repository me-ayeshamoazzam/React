import './App.css';
import ChildA from './ChildA';
import React, { createContext } from 'react';
import ChildC from './ChildC';


const username = "Ayesha"
const Data = createContext(username)


function App() {
  // Prop drilling:


  // const name = "Ayesha"
  // return (
  //  <>
  //   <ChildA firstname={name}/>
  //  </>
  // );

  return (
       <Data.Provider value = {username}>
        <ChildC/>
       </Data.Provider>
  )
}

export default App;
export {Data}
