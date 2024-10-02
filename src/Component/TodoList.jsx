import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ todo, handleEditTodo, handleRemoveTodo }) => {
  return (
    <div className="my-10 bg-slate-600 flex justify-center items-center">
      <ul className="w-full max-w-xl">
        {todo.map((tod, index) => (
          <li
            className="bg-slate-300 my-5 h-8 w-full rounded-lg list-none flex justify-between"
            key={index}
          >
            {tod}
            <div className="flex items-center h-8 w-12">
              <FaEdit onClick={() => handleEditTodo(index)} />
              <MdDelete onClick={() => handleRemoveTodo(index)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
