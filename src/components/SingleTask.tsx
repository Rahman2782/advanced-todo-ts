import React, { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { Task } from '../model'

interface Props {
    task: Task,
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({task, tasks, setTasks}) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.taskName); //setting the value of the edit field to be the current task name


    const handleDone = (id: number) => { // HANDLE COMPLETED TASK FUNCITON
        setTasks(tasks.map((t) => 
            t.id === id ? { ...t, isDone: !task.isDone}: t
        ));
    };

    const handleDelete = (id:number) => { // HANDLE DELETE FUNCTION
        setTasks(tasks.filter(t => t.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => { //HANDLE EDIT FUNCTION
        e.preventDefault(); //prevents the browser from refreshing

        setTasks(tasks.map((t) => (
            t.id ===  id ? {...t, taskName: editTask } : task
        ))) 

        setEditMode(false);
        
        //mapping out the tasks array, if any task object matches the id passed into the function, destructure the object and replace 
        //its current taskName with the one that is stored in state 'editTask'. If no matching id is found then just return the task.
    }

  return (
    <form 
        className='flex w-[90%] p-[15px] bg-[#0549A1] mt-[15px] rounded-lg justify-between items-center'
        onSubmit={(e) => handleEdit(e, task.id)} 
        >
        <input 
            className=' mr-5'
            type='checkbox' 
            checked={task.isDone}
            onChange={() => handleDone(task.id)} />

        {
            editMode ? (
                <input 
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className='w-[50%] border-none p-[5px] ml-5 transition duratrion-200 rounded-full focus:outline-none focus:shadow-[0_0_10px_5px#F0F0F0]'
                    />
            ) : (
             task.isDone ? (
                <s className='flex-1 p-[5px] border-none text-lg text-white'> 
                    {task.taskName} 
                </s> // make the text gray when it is completed instead of white like normal 
            ) : (
                <span className='flex-1 p-[5px] border-none text-lg text-white'>
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
                    else if (editMode) {
                        setEditMode(false);
                        setEditTask(task.taskName); //cancels edit mode, returns to original state
                    }
                }}
            >
                <Pencil className='text-white'/>
            </span>

            <span 
                className='flex ml-[10px] cursor-pointer'
                onClick={() => handleDelete(task.id)}>
                <Trash2 className='text-white'/>
            </span>
        </div>
    </form>
  )
}

export default SingleTask