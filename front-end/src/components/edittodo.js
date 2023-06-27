






import axios from 'axios';
import { useState, useEffect } from 'react';

function EditTodo() {
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('');
  const [priority, setPriority] = useState('');
  const [completed, setCompleted] = useState(false);
 var id = "";

  useEffect(() => {
    const url = window.location.href;
  id = url.substring(url.lastIndexOf('/') + 1);
    
   
  axios.get("http://localhost:4000/todos/"+id)
      .then((response) => {
        console.log (response.data);
        setDescription( response.data.todo_description);
        setResponsible(response.data.todo_responsible);
        setPriority(response.data.todo_priority);
        setCompleted(response.data.todo_completed);
      })
      .catch(function(err){
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted');
    console.log('Description: ', description);
    console.log('Responsible:', responsible);
    console.log('Priority:', priority);
    console.log('completed', completed);

    const updatedTodo = {
      todo_description: description,
      todo_responsible: responsible,
      todo_priority: priority,
      todo_completed: completed,
    };

    var url = window.location.href;
    id =url.substring(url.lastIndexOf("/")+1);
    axios
      .post(`http://localhost:4000/todos/update/${id}`, updatedTodo)
      .then(res => console.log(res.data));
      window.setTimeout(function(){window.location = "http://location:3000";},1000);
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

  const onChangeTodoCompleted = (e) => {
    setCompleted(e.target.checked);
  };

  return (
    <div>
      <h2 align='center'>Edit Todo Item</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Description:</label>
          <input type='text' value={description} onChange={handleSetDescription} className='form-control' />
        </div>
        <div>
        <label>Responsible:</label>
        <input type="text" value = {responsible} onChange={handleSetResponsible} className="form-control"/>
        </div>
        <div className='form-group'>
          <div className='form-check form-check-inline'>
            <input
              type='radio'
              name='priorityoptions'
              id='priorityLow'
              value='Low'
              checked={priority === 'Low'}
              onChange={handleSetPriority}
              className='form-check-input'
            />
            <label className='form-check-label'>Low</label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              type='radio'
              name='priorityOptions'
              id='priorityMedium'
              value='Medium'
              checked={priority === 'Medium'}
              onChange={handleSetPriority}
              className='form-check-input'
            />
            <label className='form-check-label'>High</label>
          </div>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            id='completedCheckbox'
            type='checkbox'
            name='completedCheckbox'
            onChange={onChangeTodoCompleted}
            checked={completed}
          />
          <label className='form-check-label' htmlFor='completedCheckbox'>
            Completed
          </label>
        </div>
        <div className='form-group'>
          <input type='submit' value='Update Item' className='btn btn-primary' />
        </div>
      </form>
    </div>
  );
}

export default EditTodo;
