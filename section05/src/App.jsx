import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App() {
  // 1. 상태값 훅
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  
  // 2. 마운트 제어 Ref (초기값 false)
  const isMount = useRef(false);

  // 3. 업데이트 훅 (마운트 시점 제외, 업데이트 시에만 실행)
  useEffect(() => {
    if (isMount.current === false) {
      isMount.current = true; 
      return;
    }
    console.log("update");
  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      
      {/* 짝수 검사 조건식 수정 (% 연산자 사용) */}
      {count % 2 === 0 ? <Even /> : null}
      
      <section>
        <input 
          type="text" 
          name="desc" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickBtn={(value) => setCount(count + value)} />
      </section>
    </div>
  );
}

export default App;
