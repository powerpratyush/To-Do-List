import { useState } from "react"
import Header from "./components/header";
import Tasks from "./components/tasks";
import AddTask from "./components/addTask";

function App(){

    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState(
        [
          {
              id: 1,
              text: 'Doctors Appointment',
              day: 'March 5th at 2 pm',
              reminder: true,
          },
          {
              id: 2,
              text: 'Meeting at school',
              day: 'March 6th at 4 pm',
              reminder: true,
          },
          {
              id: 3,
              text: 'Food Shopping',
              day: 'March 5th at 6 pm',
              reminder: false,
          }
        ]
      )

    // Add Task
    const addTask = (task) =>{
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task)=> task.id !== id
      ))
    }

    // Toggle Reminder
    const toggleReminder = (id) =>{
        setTasks(tasks.map((task)=> 
        task.id === id ? { ...task, reminder: !task.reminder} : { ...task }
        ))
    }

    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} toggleAdd={showAddTask}/>
            { showAddTask ? <AddTask onAdd={addTask} /> : ''}
            {tasks.length>0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
            ): ("No Tasks To Show")}
        </div>
    );
}
export default App;