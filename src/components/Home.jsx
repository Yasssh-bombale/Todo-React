import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(tasks);

  const submitHandler = (e) => {
    e.preventDefault();
    // * setTasks([...tasks])  --> this is known as spread operator..it will gives an elements in the array in spread from ,in simple terms it will gives an every element in the array ...if we do not use them then we get an direct array like setTasks([tasks])

    setTasks([
      ...tasks,
      {
        title,
        description,
      },
    ]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i != index;
      // * Above statement will return an array elements whos index are not matching with the targeted index ;means je target kelele ahet te sodun sgle elements filtered array mdhe yetil;
    });

    setTasks(filteredArray);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // * we used json.stringify cause localstorage stores only strings and task is an array or object; and hence we get an data from localstorage data is in the form of string hence we need to convert it into parse means back to the array;
  }, [tasks]);

  return (
    <div className="w-full border flex flex-col flex-wrap">
      <h1 className="text-white bg-sky-600 w-full h-auto text-center p-3 text-xl ">
        Get ready to complete your daily Goals
      </h1>

      <div className="w-[70%] min-h-screen m-auto  border-white p-8">
        <form className="flex flex-col gap-4 p-5 " onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Tile"
            className="border-2 border-gray-500 p-2 rounded-md outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="border-2 border-gray-500 p-2 py-4 rounded-md outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-white border-none p-2 rounded-md "
          >
            Add
          </button>
        </form>
        {tasks.map((items, index) => (
          <Task
            key={index}
            title={items.title}
            description={items.description}
            deleteTask={deleteTask}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
