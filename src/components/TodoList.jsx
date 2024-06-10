import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList({ data }) {
  return (
    <section>
      <h2>Working...</h2>
      <ul>
        <TodoItem />
      </ul>
    </section>
  );
}
