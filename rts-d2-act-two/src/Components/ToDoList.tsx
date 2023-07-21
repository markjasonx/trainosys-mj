
import React, { ChangeEvent, useState } from 'react';

const ToDoList: React.FC = props => {
    const [id, setID] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [completed, setCompleted] = useState<boolean>(false);

    const handleFirstNameChanged = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    }


    return (
        <>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => handleFirstNameChanged(e)}
                />
            </div>
            <div>
                <button 
                  onClick = { () => {
                    InsertToDo(NewToDo) 
                  }}>
                    Add Task
                </button>
            </div>
        </>
    )

}

export default ToDoList;

// import React, { useState } from 'react'

// type TodoProps = {
//     id:number,
//     Title:string,
//     Completed:boolean
// }

// const ToDoList = () => {

//     const [Todos, setTodos] = useState<TodoProps[]>([]);
//     const [todoValue,settodoValue] = useState("");

//     const AddTodo = (Title:string) => { 
//         const newTodo = {
//           id:0,
//           Title: Title, 
//           Completed:false
//         };  
//         setTodos((prevRows) => [newTodo,...prevRows ]);
//       };
    
//     return (
//         <>
//         <div className='container-todo'>
//             {
//                 Todos.length===0 ? <>No Task for today</> : <> {Todos.map ((todos,index) =>( 
//                     <div className='content-todo'>  
//                       <div className="todos" >
//                       {todos.Title}
//                       </div> 
//                     </div>
//                     ))}</> 

//             }
            
//             <div className='controls-todo'>
//                 <input 
//                   onChange = { (e) => { 
//                     settodoValue(e.target.value) 
//                     }
//                   } className='input-todo'
//                 />
//                 <button 
//                   className = 'btn-todo' 
//                   onClick = { () => {
//                     AddTodo(todoValue) 
//                   }}
//                 >Add Task</button>
//             </div> 

//         </div>
//         </>
//     )
// }