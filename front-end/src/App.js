import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route, Link }  from "react-router-dom";
import TodoList from "./components/todolist";
import EditTodo from "./components/edittodo";
import CreateTodo from "./components/createtodo"
// import {IoAddCircleOutline} form 'react-icons/io5'

// function App() {
//   return (
//     <div className="container">
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link to="/" className="navbar-brand">TO-DO-LIST</Link>
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to="/" className="nav-link">
//               Todos
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/create" className="nav-link">
//               Create Todo
//             </Link>
//           </li>
//         </ul>
//       </div> 
//     </nav>
//     <br/>
//       <Routes>
//         <Route path="/" element={<TodoList />} />
//         <Route path="/edit/:id" element={<EditTodo />} />
//         <Route path="/create" element={<CreateTodo />} />
//       </Routes>
//     </div>
//   );
// }

function App(){
  return(
  <div className="container">
    <br/>
    <Routes>
      <Route path="/" exact element={<TodoList/>}/>
      <Route path="/edit/:id" element={<EditTodo/>}/>
      <Route path="/create" element={<CreateTodo/>}/>
    </Routes>
  </div>
  )
}

export default App;
