import TaskButtons from "./component/task-buttons";

function App() {
  const [tasks, setTasks] = [
    { 
      id: 1, 
     description: "Tomar café da manhã", 
     done: false
     },
    {
      id: 2,
      description: "Ler e-mails",
      done: false
    },
    {
      id: 3,
      description: "Estudar React",
      done: false
    }
  ];

  const removeTask = index => () => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.description}
            <TaskButtons
              task={task}
              removeTask={removeTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;