import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load tasks from local storage when component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodo(JSON.parse(storedTodos));
    }
  }, []);

  // Save tasks to local storage whenever the todo state changes
  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todo));
    }
  }, [todo]);

  const addTodo = (e) => {
    e.preventDefault();
    if (value.trim()) {
      if (editIndex !== null) {
        const updatedTodos = todo.map((tod, index) =>
          index === editIndex ? value : tod
        );
        setTodo(updatedTodos);
        setEditIndex(null);
      } else {
        setTodo([...todo, value]);
      }
      setValue("");
    }
  };

  const handleEditTodo = (index) => {
    setValue(todo[index]);
    setEditIndex(index);
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);
    if (index === editIndex) {
      setEditIndex(null);
      setValue("");
    }
  };

  return (
    <div className="bg-slate-700 w-5/6 min-h-screen mx-auto">
      <div className="text-white text-8xl text-center mb-8">Just do it.</div>

      <TodoInput 
        value={value}
        setValue={setValue}
        addTodo={addTodo}
        editIndex={editIndex}
      />
      
      <TodoList
        todo={todo}
        handleEditTodo={handleEditTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default TodoForm;
