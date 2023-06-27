// import { useState } from "react";

// function CreateTodo() {
//   const [description, setDescription] = useState("");
//   const [responsible, setResponsible] = useState("");
//   const [priority, setPriority] = useState("");
//   const [completed, setCompleted] = useState(false);
 
//   const handleSubmit= (e) =>{
// e.preventDefault();
// console.log ("form Submitted")
// console.log("Description:", description);
// console.log("Responsible:",responsible)
// console.log("priority",priority);
// setDescription("")
// setDescription("")
// setPriority("")
// setCompleted(false)
//   }

//   return (
//     <div>
//       <h3>Create Todo list component</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="form-control">
//           <label>Description :</label>
//           <input
//             type="text"
//             value={description}
//             onChange={setDescription}
//             className="form-control"
//           />
//         </div>
//         <div>
//           <label>Responsible :</label>
//           <input
//             type="text"
//             value={responsible}
//             onChange={setDescription}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <div className="form-check form-check-inline">
//             <input
//               type="radio"
//               name="priorityOptions"
//               id="priorityLow"
//               value="Low"
//               checked={priority === "Low"}
//               onChange={setPriority}
//               className="form-check-input"
//             />
//             <label className="form-check-label">Low</label>
//           </div>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             type="radio"
//             name="priorityOptions"
//             id="priorityMedium"
//             value="Medium"
//             checked={priority === "Medium"}
//             onChange={setPriority}
//             className="form-check-input"
//           />
//           <label className="form-check-label">Medium</label>
//           <div className="form-check form-check-inline">
//             <input
//               type="radio"
//               name="priorityOptions"
//               id="priorityLow"
//               value="Low"
//               checked={priority === "Low"}
//               onChange={setPriority}
//               className="form-check-input"
//             />
//             <label className="form-check-label">High</label>
//           </div>
//         </div>

//         <div className="form-group">
//             <input type="submit" value="Create Todo" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreateTodo;

// import { useState } from "react";

// function CreateTodo() {
//   const [description, setDescription] = useState("");
//   const [responsible, setResponsible] = useState("");
//   const [priority, setPriority] = useState("");
//   const [completed, setCompleted] = useState(false);

  
 
//   const handleSubmit= (e) =>{
//     e.preventDefault();
//     console.log ("form Submitted")
//     console.log("Description:", description);
//     console.log("Responsible:",responsible)
//     console.log("priority",priority);
//     setDescription("")
//     setResponsible("")
//     setPriority("")
//     setCompleted(false)
//   }
// const handleSetDescription =(e) => {
//     setDescription(e.target.value);
// }
// const handleSetResponsible=(e) => {
//     setDescription(e.target.value);
// }
// const handleSetPriority =(e) => {
//     setDescription(e.target.value);
// }
//   return (
//     <div>
//       <h3>Create Todo list component</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="form-control">
//           <label>Description :</label>
//           <input
//             type="text"
//             value={description}
//             onChange={handleSetDescription}
//             className="form-control"
//           />
//         </div>
//         <div>
//           <label>Responsible :</label>
//           <input
//             type="text"
//             value={responsible}
//             onChange={handleSetResponsible}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <div className="form-check form-check-inline">
//             <input
//               type="radio"
//               name="priorityOptions"
//               id="priorityLow"
//               value="Low"
//               checked={priority === "Low"}
//               onChange={handleSetPriority}
//               className="form-check-input"
//             />
//             <label className="form-check-label">Low</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input
//               type="radio"
//               name="priorityOptions"
//               id="priorityMedium"
//               value="Medium"
//               checked={priority === "Medium"}
//               onChange={handleSetPriority}
//               className="form-check-input"
//             />
//             <label className="form-check-label">Medium</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input
//               type="radio"
//               name="priorityOptions"
//               id="priorityHigh"
//               value="High"
//               checked={priority === "High"}
//               onChange={handleSetPriority}
//               className="form-check-input"
//             />
//             <label className="form-check-label">High</label>
//           </div>
//         </div>

//         <div className="form-group">
//             <input type="submit" value="Create Todo" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreateTodo;

import { useState } from "react";
import axios from "axios";

function CreateTodo() {
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted");
    console.log("Description:", description);
    console.log("Responsible:", responsible);
    console.log("priority", priority);

    const newTodo = {
      todo_description:description,
      todo_responsible:responsible,
      todo_priority:priority,
      todo_completed:completed,

    }
axios.post ('http://localhost:4000/todos/add',newTodo).then(res =>console.log(res.data));

    setDescription("");
    setResponsible("");
    setPriority("");
    setCompleted(false);
  };

  const handleSetDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSetResponsible = (e) => {
    setResponsible(e.target.value);
  };
  const handleSetPriority = (e) => {
    setPriority(e.target.value);
  };
  return (
    <div>
      <h3>Create Todo list</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Description :</label>
          <input
            type="text"
            value={description}
            onChange={handleSetDescription}
            className="form-control"
          />
        </div>
        <div>
          <label>Responsible :</label>
          <input
            type="text"
            value={responsible}
            onChange={handleSetResponsible}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={priority === "Low"}
              onChange={handleSetPriority}
              className="form-check-input"
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={priority === "Medium"}
              onChange={handleSetPriority}
              className="form-check-input"
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={priority === "High"}
              onChange={handleSetPriority}
              className="form-check-input"
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
