import './App.css';
import useCounter from './useCounter';
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

function App() {
  const [count, increment, decrement] = useCounter(0);

  return (

  <>
  <h2> {count} </h2>
  <button type='button' className='btn' onClick={increment}> <FiChevronUp color='white' size={30} /> </button>
  <button type='button' className='btn' onClick={decrement}> <FiChevronDown color='white' size={30} /> </button>
  </>
  );
}

export default App;
