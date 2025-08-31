import React from 'react'
import { Task } from '../model'
import SingleTask from './SingleTask';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers'; // ADD THIS IMPORT

import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {

  function handleDragEnd(event: DragEndEvent) {
    const {active, over} = event;

    if (active.id !== over?.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return ( 
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[ restrictToVerticalAxis, restrictToParentElement]}>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            <div id='Task List' className='w-full flex flex-col items-center'> 
                {tasks.map(t => (
                    <SingleTask 
                        task={t} 
                        key={t.id}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                ))}    
            </div>  
        </SortableContext>
    </DndContext>
  
  )
}

export default TaskList