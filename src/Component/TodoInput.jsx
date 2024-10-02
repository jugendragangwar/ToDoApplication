import React from "react";

const TodoInput = ({ value, setValue, addTodo, editIndex }) => {
  return (
    <form className="flex justify-center" onSubmit={addTodo}>
      <input
        className="w-3/6 h-10 px-4 rounded-l-2xl bg-black text-white"
        type="text"
        value={value}
        placeholder="Add a Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-slate-400 rounded-r-2xl w-20 hover:bg-slate-500 text-white"
        type="submit"
      >
        {editIndex !== null ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoInput;
