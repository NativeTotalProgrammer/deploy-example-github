import { useState } from 'react';
import './CounterFile.css';

export function CounterComponent(props) {
  const [myNum, setMyNum] = useState(0);
  const { counterText } = props;

  const plus1 = () => {
    setMyNum(myNum + 1);
  };

  const less1 = () => {
    setMyNum(myNum - 1);
  };

  return(
    <div className="counter-dp">
      <h1>{counterText}</h1>
      <p>Count: { myNum }</p>
      <div className='buttons-dp'>
        <button onClick={_ => plus1()}>+</button>
        <button onClick={_ => less1()}>-</button>
      </div>
    </div>
  );
};