import React from 'react'
import { Task } from '../model'
import SingleTask from './SingleTask';

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {

  return (
    <div id='Active Tasks' className='w-full flex flex-col items-center'> 
        {tasks.map(t => (
            <SingleTask 
                task={t} 
                key={t.id}
                tasks={tasks}
                setTasks={setTasks}
            />
        ))}    
    </div>       

  )
}

export default TaskList