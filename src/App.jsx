import {useState} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "This is a test",
      reminder: false
    },
    {
      id: 2,
      text: "This is also a test",
      reminder: false
    }
  ]
  );

  const addTask = ( task ) => {
    console.log(task)
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTodo([...todo, newTask])
  }


  return (
    <div className="container">
      <Header />
      <hr />
      <Form onAdd={addTask} />
      <Tasks task={todo} />
    </div>
  );
}

export default App;
