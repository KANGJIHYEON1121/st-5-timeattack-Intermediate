import { useSelector } from 'react-redux';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// TODO: todos 상태를 리덕스를 이용한 전역상태로 관리한 투두리스트를 작성해 보세요.
function App() {
  const data = useSelector((state) => state.todos);
  console.log(data);

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm />
      <TodoList data={data} />
      <TodoList data={data} />
    </>
  );
}

export default App;
