// import { useState } from "react";
// import { v4 as uuid } from "uuid";

// export default function TodoList() {
//     let [todos, settodos] = useState([{ task: "sampletask", id: uuid(), isDone:false }]);
//     let [newtodo, setnewtodo] = useState("");

//     let addnewtask = () => {
//         settodos((prevTodos) => {
//             return [...prevTodos, { task: newtodo, id: uuid(), isDone:false }];
//         });
//         setnewtodo("");
//     };

//     let update = (event) => {
//         setnewtodo(event.target.value);
//     };

//     let deletetodo = (id) => {
//         settodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//     };

//     let markAlldone = () => {
//         settodos((prevTodos) =>
//             prevTodos.map((todo) => ({
//                 ...todo,
//             isDone:true
//             }))
//         );
//     };

//     let markasdone = (id) => {
//         settodos((prevTodos) =>
//             prevTodos.map((todo) =>
//                 todo.id === id ? { ...todo, isDone:true } : todo
//             )
//         );
//     };

//     return (
//         <div>
//             <input placeholder="add a task" value={newtodo} onChange={update} />
//             <button onClick={addnewtask}>ADD TASK</button>
//             <hr />
//             <h4>Tasks to do</h4>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
//                         &nbsp; &nbsp;
//                         <button onClick={() => deletetodo(todo.id)}>delete</button>
//                         &nbsp; &nbsp;
//                         <button onClick={() => markasdone(todo.id)}>markasdone</button>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={markAlldone}>markAllDone</button>
//         </div>
//     );
// }
import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./todo.css";   // Import CSS file

export default function TodoList() {
  let [todos, settodos] = useState([
    { task: "Sample Task", id: uuid(), isDone: false },
  ]);
  let [newtodo, setnewtodo] = useState("");

  let addnewtask = () => {
    if (newtodo.trim() === "") return;
    settodos((prevTodos) => [
      ...prevTodos,
      { task: newtodo, id: uuid(), isDone: false },
    ]);
    setnewtodo("");
  };

  let update = (event) => {
    setnewtodo(event.target.value);
  };

  let deletetodo = (id) => {
    settodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let markAlldone = () => {
    settodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone: true,
      }))
    );
  };

  let markasdone = (id) => {
    settodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1 className="title">📝 My To-Do List</h1>

        <div className="input-section">
          <input
            placeholder="Add a new task..."
            value={newtodo}
            onChange={update}
          />
          <button onClick={addnewtask}>Add</button>
        </div>

        <h4 className="subtitle">Tasks</h4>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span className={todo.isDone ? "done" : ""}>{todo.task}</span>
              <div className="btn-group">
                <button className="done-btn" onClick={() => markasdone(todo.id)}>
                  ✅ Done
                </button>
                <button className="delete-btn" onClick={() => deletetodo(todo.id)}>
                  ❌ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <button className="mark-all-btn" onClick={markAlldone}>
          Mark All Done
        </button>
      </div>
    </div>
  );
}