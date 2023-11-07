import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="text-black border-2 flex justify-between  p-2 bg-white rounded-md items-center mt-5 overflow-x-auto">
      <div>
        <p className="text-2xl font-semibold ">{title}</p>
        <span className="text-slate-600 ">{description}</span>
      </div>
      <button
        className="bg-red-500 w-[30px] h-[30px] my-auto text-2xl font-extrabold rounded-full p-3 flex items-center justify-center hover:bg-red-700 text-white"
        onClick={() => deleteTask(index)}
      >
        -
      </button>
    </div>
  );
};

export default Task;
