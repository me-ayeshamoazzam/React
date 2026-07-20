import "./App.css";
import { useState, useRef } from "react";

function App() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  return (
    <>
      <h3> Ref: {countRef.current} </h3>
      <h3> Count: {count} </h3>

      <button
        type="button"
        className="btn"
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        Ref
      </button>

      <button
        type="button"
        className="btn-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </>
  );
}

export default App;
