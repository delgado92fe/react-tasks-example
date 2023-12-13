import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Escribe  tu mensaje'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder='Escribe la descripcion de la tarea'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>
        Guardar
      </button>
    </form>
  )
}

export default TaskForm