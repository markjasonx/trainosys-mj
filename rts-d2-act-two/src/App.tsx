import './App.css'
import ToDoList from './Components/ToDoList.tsx'

  const tasks = [
    {
      id: 1,
      title: 'Set up a new React project',
      completed: false
    },
    {
      id: 2,
      title: 'Design and create main component structure',
      completed: false
    },
    {
      id: 3,
      title: 'Implement routing using React Router',
      completed: false
    },
    {
      id: 4,
      title: 'Fetch data from API and display in component',
      completed: false
    },
    {
      id: 5,
      title: 'Build a form component for user input',
      completed: false
    },
    {
      id: 6,
      title: 'Implement state management with useState',
      completed: false
    },
    {
      id: 7,
      title: 'Style the application using CSS',
      completed: false
    },
    {
      id: 8,
      title: 'Add validation to form inputs',
      completed: false
    },
    {
      id: 9,
      title: 'Incorporate reusable UI components',
      completed: false
    },
    {
      id: 10,
      title: 'Set up unit tests for critical components',
      completed: false
    }
  ];

const App: React.FC = () => {

  return (
    
    <>
    <div className="task-name">
      <h3>To Do List</h3>
      {tasks.map(name =>
          <p>{name.title}</p>
        )}
    </div>
      <ToDoList/>
    </>
  )
}

export default App