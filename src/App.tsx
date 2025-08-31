import React from 'react';
import InputBar from './components/InputBar';
import { Task } from './model';
import './App.css';
import "tailwindcss/tailwind.css"
import { useState } from 'react';
import TaskList from './components/TaskList';

const App: React.FC = () => {

  const [input, setInput] = useState<string>(''); //for the input bar
  const [tasks, setTasks] = useState<Task[]>([]); //for the actual task list

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(input) {
      setTasks([...tasks, {id: Date.now(), taskName:input, isDone:false }]);
      setInput("");
    }
  };



  return (
      <div className="flex flex-col h-[100vh] items-center font-sans bg-blue-500">
        <span className="text-4xl mt-6 mb-6 z-1 text-white text-center">
          Tasks
        </span>
        <InputBar input={input} setInput={setInput} handleAdd={handleAdd} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>

  );
}

export default App;
