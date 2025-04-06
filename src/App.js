import { useState } from 'react';
import {v4 as uuidv4} from "uuid"
import './App.css';

function App() {

  const [input, setInput] = useState("")
  const [data, setData] = useState([])

  const AddData = (event) => {
    event.preventDefault()
    const newObjects = []
      newObjects.push({id: uuidv4(), title: input})
    setData([...data, ...newObjects])
    setInput("")
  }

  return (
    <div className='container'>
      <h1 className='heading'>Task Tracker</h1>
      <form className='addInputs' onSubmit={AddData}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}required className='input'/>
        <button type='submit' className='addButton'>Add Task</button>
      </form>
      {
        data.length === 0 ? <div>No Task to Yet to show</div> 
        :
        // console.log(data)
        data.map(each => {
          return (
            <div key={each.id} className='sub'>
            <p>{each.title}</p>
            <button type='button'>delete</button>
          </div>
          )
        })
      }
    </div>
    
  );
}

export default App;
