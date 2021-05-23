import Button from './Button';
import { useState } from 'react';

const Form = ({ onAdd }) => {
  
  const [text, setText] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      alert('Please add text!');
      return;
    }
    alert(`${text} added as a task!`);
    onAdd({text, reminder});
    setText('');
    setReminder(false);
    console.log(text);
  }

  return (
      <form action="" className="form" onSubmit={onSubmit}>
        <label htmlFor="">
          <input type="text"
          className="task" 
          placeholder="Add a task..." 
          value={text} 
          onChange = {e => setText(e.target.value)}
          />
        </label>

        <div className="btn-box">
          <span>Check the box to get a reminder!</span>
          <input type="checkbox" 
          checked={reminder}
          className="reminder" 
          onChange = {e => setReminder(e.currentTarget.checked)} 
          />

          <Button text="Add" type="submit" />
        </div>
      </form>
  )
}

export default Form;
