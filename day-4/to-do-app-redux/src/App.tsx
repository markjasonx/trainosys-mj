import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store' // assuming you have a separate file for RootState type
import { addTask } from './redux/reducer'
// import { addTask, doneTask, editTask, deleteTask } from './redux/reducer'
import Task from './components/Task/Task'
import AddTask from './components/AddTask/AddTask'
import './App.css'

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const tasks: Task[] = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', margin: '50px'}}>
      <h1>Task Manager</h1>
      <AddTask onAddTask={(task) => task.trim() !== '' && dispatch(addTask(task))} />
      {tasks.length === 0 ? (
        <>
          <h3>No Tasks for today!</h3>
        </>
        ) : (
        <ul>
          {tasks.map((task) => (
            <Task 
              key={task.id}
              id={task.id}
              completed={task.completed}
              name={task.title}
            />
          ))}
        </ul>
        )}
    </div>
  )
}

export default App
