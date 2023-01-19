import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, increment2 } from './store/slices/counter/counterSlice'

function App() {
  
  const {counter} = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <p> count is: {counter}</p>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(increment2(3))}>
          IncrementBy
        </button>
    </div>
  )
}

export default App
