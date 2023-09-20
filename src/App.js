
import { useState } from 'react';
import './App.css';

function App() {

  let[count, setCount] = useState(0);

  function decreHandler(){
    count = count - 1;
    setCount(count);
  }
  function incHandler(){
    count = count + 1;
    setCount(count);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="App">
          <div className='top2'>
              <div className='para'>
                <p>Increment and Decrement</p>
              </div>
                <div className='content1'>
                    <button  onClick={decreHandler}>
                      -
                    </button>
                    <div>
                     {count}
                    </div>
                    <button onClick={incHandler}>
                      +
                    </button>
                </div>
              <div className='btn'>
                  <button onClick={resetHandler}>
                    Reset
                  </button>
              </div>
          </div>
    </div>
  );
}

export default App;
