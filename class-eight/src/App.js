import { useMemo, useState, useCallback } from 'react';
import './App.css';

// function App() {
  // const [count, setCount] = useState(0)

  // const result = useMemo(() => {
  //   console.log("Calculation")
  //   return 10 + 20
  // }, [])
  // return (
  //   <div>
  //     <h2> useMemo Example</h2>
  //     <h3> Result : {result} </h3>
  //     <h3> Count: {count} </h3>

  //     <button onClick={()=> setCount(count + 1)}>
  //       Increase
  //     </button>
  //   </div>
  // );


function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
    setCount((count) => count + 1);
  }, []);

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}

export default App;
