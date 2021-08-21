import React, { useState } from 'react';
import './App.css';

// 조금 자세하게 태그를 지정하고싶으면 이렇게 지정함(div, h4태그 등...)
// let sayHelloBox: JSX.IntrinsicElements['div'] = <div>안녕하세요</div>;
let Box: JSX.Element = <div>안녕하세요</div>;

function App() {
  // useState에 typescript 지정하는 법
  let [user, setUser] = useState<string | number>('Jongran Kim');
  return (
    <div className="App">
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
