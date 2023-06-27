// import { useState, useEffect } from "react";
// import {Link} from "react-router-dom";
// import axios from "axios";
// import '../App.css';
// import {BiEdit} from "react-icons/bit";
// import {MdDelete} from "react-icons/md";
// import {IoAddCircleoutline} from 'react-icons/io5'

// // var ColorScheme =require ('colour-schema');

// function  TodoList(){

//     // var scheme = new ColorScheme;

//     // start the scheme
//     // use the 'triade' scheme, that is, colors
// // selected from 3 poits equidistant around
// // the color Wheel
// // use the 'soft' color variation

//     // scheme.from_hue(21)  
//     // .scheme('contrast')

//     // .varriation('hard');

//     // var colors= scheme.color();


// const Todo = props => {
//     const {todo_completed} =props.todo;
//     const handleDelete = () => {
//         console.log(props.todo._id);
//         axios.post('http://localhost:4000/todos/delete/'+props.todo._id).then(response => {
//             console.log("item deleted")
//     //     }).catch(function(err){
//     //         console.log(err);
//     //     })
//     // }
//     axios.get("http://localhost:4000/todos/").then(response => {
//         setTodoItems(response.data);

//     }).catch((err)=>{
//         console.log(err)
//     })
// })
// .catch(function(err){
//     console.log(err);
// })
//     }
//     console.log(colors[0]);
//     return (
//     <tr style={{backgroundColor: `#E5fDD1`}}>
//         <td className={todo_completed ? "completed" : ""}>{props.todo.todo_description}</td>
//         <td className={todo_completed ? "completed" : ""}>{props.todo.todo_responsible}</td>
//         <td className= {todo_completed ? "completed" : ""}>{props.todo.todo_priority}</td>
//         <td>{props.todo.todo_completed}</td>
// <td>
//     <Link to={"/edit/"+props.todo_id}><BiEdit size={28} style={{color: "#FFA1A1"}}/></Link>
//    {/* <input type =" submit" onClick={handleDelete} value="Delete" className="btn btn-primary"/> */}
//    <MdDelete onClick={handleDelete} size= {28} style={{color: "#ee0202"}}/>

// </td>
        
//     </tr>
//     );
// }
// const [todoitems,setTodoItems] = useState([])

// useEffect(()=>{
// axios.get("http://localhost:4000/todos/").then(response => {
//     setTodoItems(response.data);
//     // console.log(todoitems);
//     }).catch((err)=>{
//         console.log(err);
//     })
// },[]);

// useEffect(() => {
//     console.log(todoitems);
// },[todoitems])

// function todoList() {
//     return todoitems.map(function(currentTodo,i){
//         return <Todo todo={currentTodo} key={i}/>
//     })
// }

//     return (
//         <div>
//            <Link to="/" className="navbar-brand"><h2>TO-DO-LIST</h2></Link>
//             <table  id="todo_items" className="table table-striped" style={{marginTop :20}}>
//                 <thead style={{backgroundColor: '#FFA1A1'}}>
//                     <tr>
//                         <th>Description</th>
//                         <th>Responsible</th>
//                         <th>Priority</th>
//                         <th>Action</th>

                        
//                     </tr>
//                 </thead>
//                 <tbody>
// {
//     todoitems.length > 0 ? todoList() : <p>Add Items</p>
// }
//                 </tbody>
//             </table>
//             <Link to={"/create"}><IoAddCircleoutline size={40} style={{color: "#FFA1A1"}}/></Link>
//         </div>
//     )
// }

// export default TodoList;

import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import '../App.css';
import {BiEdit} from "react-icons/bi";
import {MdDelete} from "react-icons/md";
import {IoAddCircleOutline} from 'react-icons/io5'

function TodoList(){

    const Todo = props => {
        const {todo_completed} =props.todo;
        const handleDelete = () => {
            console.log(props.todo._id);
            axios.post('http://localhost:4000/todos/delete/'+props.todo._id).then(response => {
                console.log("item deleted");
                axios.get("http://localhost:4000/todos/").then(response => {
                    setTodoItems(response.data);
                }).catch((err)=>{
                    console.log(err)
                })
            }).catch(function(err){
                console.log(err);
            })
        }
        return (
        <tr style={{backgroundColor: `#E5fDD1`}}>
            <td className={todo_completed ? "completed" : ""}>{props.todo.todo_description}</td>
            <td className={todo_completed ? "completed" : ""}>{props.todo.todo_responsible}</td>
            <td className= {todo_completed ? "completed" : ""}>{props.todo.todo_priority}</td>
            <td>{props.todo.todo_completed}</td>
            <td>
                <Link to={"/edit/"+props.todo._id}><BiEdit size={28} style={{color: "#FFA1A1"}}/></Link>
                <MdDelete onClick={handleDelete} size= {28} style={{color: "#ee0202"}}/>
            </td>
        </tr>
        );
    }

    const [todoitems,setTodoItems] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/todos/").then(response => {
            setTodoItems(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    useEffect(() => {
        console.log(todoitems);
    },[todoitems])

    function todoList() {
        return todoitems.map(function(currentTodo,i){
            return <Todo todo={currentTodo} key={i}/>
        })
    }

    return (
        <div>
            <Link to="/" className="navbar-brand"><h2>TO-DO-LIST</h2></Link>
            <table  id="todo_items" className="table table-striped" style={{marginTop :20}}>
                <thead style={{backgroundColor: '#FFA1A1'}}>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todoitems.length > 0 ? todoList() : <tr><td colSpan="4">Add Items</td></tr>}
                </tbody>
            </table>
            <Link to={"/create"}><IoAddCircleOutline size={40} style={{color: "#FFA1A1"}}/></Link>
        </div>
    )
}

export default TodoList;