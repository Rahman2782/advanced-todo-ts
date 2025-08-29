import React, { useState } from 'react'
import { Pencil, CircleCheckBig, Trash2 } from 'lucide-react'
import { Task } from '../model'

interface Props {
    task: Task,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({task, tasks, setTasks}) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.taskName); //setting the value of the edit field to be the current task name


    const handleDone = (id: number) => {
        setTasks(tasks.map((t) => 
            t.id === id ? { ...t, isDone: !task.isDone}: t
        ));
    };

    const handleDelete = (id:number) => {
        setTasks(tasks.filter(t => t.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTasks(tasks.map((t) => (
            t.id ===  id ? {...t, taskName: editTask } : task
        )))
        setEditMode(false);
    }

  return (
    <form 
        className='flex w-[90%] p-[15px] bg-[#0549A1] mt-[15px] rounded-lg justify-between items-center'
        onSubmit={(e) => handleEdit(e, task.id)} 
        >
        <input 
            type='checkbox' 
            checked={task.isDone}
            onChange={() => handleDone(task.id)} />

        {
            editMode ? (
                <input 
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className='w-[50%] border-none p-[15px] transition duratrion-200 rounded-full focus:outline-none focus:shadow-[0_0_30px_10px#F0F0F0]'
                    />
            ) : (
             task.isDone ? (
                <s className='flex-1 p-[5px] border-none text-lg'> 
                    {task.taskName} 
                </s> 
            ) : (
                <span className='flex-1 p-[5px] border-none text-lg'>
                    {task.taskName}
                </span>
            )
            )
        }
        

        <div id='icons' className='flex items-center ml-auto'>
            <span 
                className='flex ml-[10px] cursor-pointer'
                onClick={() => {
                    if (!editMode && !task.isDone) { //if the task is not in edit mode and not done, set edit mode to true
                        setEditMode(true);
                    }
                }}
            >

                <Pencil />
            </span>
            <span 
                className='flex ml-[10px] cursor-pointer'
                onClick={() => handleDelete(task.id)}>
                <Trash2 />
            </span>
        </div>
    </form>
  )
}

export default SingleTask
