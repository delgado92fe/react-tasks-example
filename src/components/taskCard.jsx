import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
  const {deleteTask} = useContext(TaskContext);

  return (
    <div>
      <h1>{task.title}</h1>
      <h3>{task.descripcion}</h3>
      <p>{task.id}</p>
      <button onClick={() => deleteTask(task.id)}>
        Eleminar tarea
      </button>
    </div>
  )
}

export default TaskCard