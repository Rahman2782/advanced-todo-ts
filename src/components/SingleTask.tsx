import React from 'react'
import { Pencil, CircleCheckBig, Trash2 } from 'lucide-react'
import { Task } from '../model'
import TaskList from './TaskList';

interface Props {
    task: Task,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({task, tasks, setTasks}) => {

    const handleDone = (id: number) => {
        setTasks(tasks.map((task) => 
            task.id === id ? { ...task, isDone: !task.isDone}: task
        ));
    };

  return (
    <form 
        className='flex w-[90%] p-[15px] bg-white mt-[15px] rounded-lg justify-between items-center'>
        <input type='checkbox' />
            { task.isDone ? (
                <s className='flex-1 p-[5px] border-none text-lg'> 
                    {task.taskName} 
                </s> 
            ) : (
                <span className='flex-1 p-[5px] border-none text-lg'>
                    {task.taskName}
                </span>
            )}

        <div id='icons' className='flex items-center ml-auto'>
            <span className='flex ml-[10px] cursor-pointer'>
                <Pencil />
            </span>
            <span 
                className='flex ml-[10px] cursor-pointer'
                onClick={() => handleDone(task.id)}>
                <CircleCheckBig />
            </span>
            <span className='flex ml-[10px] cursor-pointer'>
                <Trash2 />
            </span>
        </div>
    </form>
  )
}

export default SingleTask
