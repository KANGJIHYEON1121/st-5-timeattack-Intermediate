import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title, content, complete: false };
    dispatch(addTodo(newTodo));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label>제목: </label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />{' '}
      <label>내용: </label>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        type="text"
      />
      <button type="submit" onClick={handleAddTodo}>
        추가
      </button>
    </form>
  );
}
