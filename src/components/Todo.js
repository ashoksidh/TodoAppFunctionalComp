import React,{ useState } from "react"; 

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value)
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>All Tasks</h1>
      <input
        type="text"
        value={value}
        class="textinput" placeholder="Add a new task"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" class="button" >Add</button>
    </form>
  );
}

const Todo = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (

    <>
    <div>  <AddTaskForm addTask={addTask} /></div>
    <div className="todo-list">
      {tasks.map((task, index) => (
        <ul class="ul"> <div >
          <li className={`${task.isCompleted ? "todo-text todo-completed" : "todo-text"}` } class="list">
        <div class="list-items"><input id="myCheckBox" type="checkbox" onClick={() => toggleTask(index)}  class="checkbox"  />
          <span >{task.text}</span></div>
          <button onClick={() => removeTask(index)} class="deletebtn"><i class="fa fa-trash"></i></button>
        
        </li></div>
        </ul>
        
      ))}
    </div>
    
           {tasks.length === 0 && <h2 id="h2">Seems like a quiet day</h2>}
        
    </>
  );
}

export default Todo



// style={{
//   task.isCompleted ? "todo-text todo-completed" : "todo-text"
// }} 

// className={`${task.isCompleted ? "todo-text todo-completed" : "todo-text"}` } 