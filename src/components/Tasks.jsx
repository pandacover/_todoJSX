import Task from './Task';

const Tasks = ({ task }) => {
  return (
  <div>
    {
      task.map((task) => (
        <Task 
        key={task.id} 
        task={task}
        />
      ))}
  </ div>
    )
  }

export default Tasks;