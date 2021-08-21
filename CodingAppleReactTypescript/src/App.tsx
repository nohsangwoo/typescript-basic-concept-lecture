import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, RootState } from './index';

// 조금 자세하게 태그를 지정하고싶으면 이렇게 지정함(div, h4태그 등...)
// let sayHelloBox: JSX.IntrinsicElements['div'] = <div>안녕하세요</div>;
let Box: JSX.Element = <div>안녕하세요</div>;

function App() {
  // useState에 typescript 지정하는 법
  const getState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  let [user, setUser] = useState<string | number>('Jongran Kim');
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          border: '1px solid black',
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
        }}
      >
        <div>count function</div>
        <div>{getState.counter1.count}</div>
        <button
          onClick={() => dispatch(increment())}
          style={{ height: '100px', cursor: 'pointer' }}
        >
          button
        </button>
      </div>
      {Box}
      <Profile name={'Sangwoo Noh'} age={33}></Profile>
    </div>
  );
}

interface Props {
  name: string;
  age: number;
}
function Profile(props: Props): JSX.Element {
  return (
    <div>
      <div>{props.name} 입니다.</div>
    </div>
  );
}

export default App;
