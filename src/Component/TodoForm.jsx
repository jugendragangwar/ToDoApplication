import React, { useState,useEffect} from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoForm = () => {
  const [value, setValue] = useState("")
  const [todo, setTodo] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todo'));
    if (storedTodos) {
      setTodo(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);


  const addTodo = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setTodo([...todo, value]);
      setValue('');
    }
  };
  const handleRemoveTodo = (index) => {
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);
  };

  return (
    <div className='bg-slate-700 w-5/6 min-h-screen mx-auto'>
      <div className='text-white text-8xl text-center mb-8'>
        Just do it.
      </div>

      <form className="flex justify-center">
        <input
          className='w-3/6 h-10 px-4 rounded-l-2xl border-none bg-black text-white'
          type="text"
          value={value}
          placeholder="Add a Task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="bg-red-100 rounded-r-2xl w-20 "
          onClick={addTodo}>I Got this?</button>
      </form>

      {/* List Tailwind CSS */}
      <div className=" my-10 ">
        {todo.map((tod, index) => (
          <li className="bg-slate-300 my-5 h-8 w-2/5 rounded-lg list-none flex justify-between" key={index} >
            {tod}
            <div className="flex items-center h-8 w-12">
              <FaEdit />
              <MdDelete onClick={() => handleRemoveTodo(index)} />
            </div>
          </li>

        ))}
      </div>
    </div>
  )
}


export default TodoForm;


