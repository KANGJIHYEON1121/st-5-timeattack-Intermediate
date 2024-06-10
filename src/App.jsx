import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { plusHandle } from './redux/slices/calculatorSlice';

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const result = useSelector((state) => state.value);
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(plusHandle(Number(input)));
  };

  const handleMinus = () => {
    dispatch(plusHandle(Number(input)));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />{' '}
        만큼을 <button onClick={handlePlus}>더할게요</button>{' '}
        <button onClick={handleMinus}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
