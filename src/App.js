import './App.css';
import { decrement, increment } from './redux/slices/rootReducer';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const state = useSelector(state => state.rootTest);
  const dispatch = useDispatch()
  return (
    <div className='counter' >
      <div> Count:
      <span>{state.counter} </span>
      </div>
      
      <button onClick={() => dispatch(decrement("test"))}>Decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>

  );
}

export default App;
