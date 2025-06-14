/**
 * @todo
 * Lengkapi komponen "Todo" sesuai dengan kriteri berikut:
 *  1. Dapat menambahkan to-do.
 *  2. Dapat menampilkan daftar to-do.
 *  3. Dapat menghapus daftar to-do.
 */

import { useState, type ChangeEvent } from "react";

interface TodoItem {
  id: number;
  name: string;
}



const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    setTodos((prevTodos:TodoItem[]):TodoItem[] => {
      return [...prevTodos, { id: Date.now(), name: inputValue }];
    });


    setInputValue('');
  }

  const handleRemoveTodo = (id: number) => {
    setTodos((prevTodos:TodoItem[]):TodoItem[] => {
      return prevTodos.filter((todo:TodoItem) => todo.id !== id);
    });
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <div>
        <input className={"shadow mx-3"} aria-label={"input-todo"} value={inputValue} onChange={handleInputChange} />
        <button type={"button"} onClick={handleAddTodo}>Add to-do</button>
      </div>
      <ul
        className={"list-none p-0 m-0"}
        aria-label={"todo-list"}>
        {todos.map((todo) => (
          <li 
          key={todo.id}
          className={"flex justify-between items-center my-2 p-2 border-b border-gray-200 w-full max-w-sm"}>
            {todo.id} - {todo.name}
            <button type={"button"} onClick={() => handleRemoveTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo