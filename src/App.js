import { useState } from 'react';
import {v4 as uuidv4} from "uuid"
import { TiDeleteOutline } from "react-icons/ti";
import './App.css';

function App() {

  const [input, setInput] = useState("")
  const [data, setData] = useState([])
  const [textdeletevalueId, settextdeletedValue] = useState([])

  const AddData = (event) => {
    event.preventDefault()
    const newObjects = []
      newObjects.push({id: uuidv4(), title: input})
    setData([...data, ...newObjects])
    setInput("")
  }

  const onDelete = (id) => {
    const expectData = data.filter(each => each.id !== id)
    setData(expectData)
  }

  const textdelete = (id) => {
    if (textdeletevalueId.includes(id)){
      const textfilterdata = textdeletevalueId.filter(each => each !== id)
      settextdeletedValue(textfilterdata)
    }else {
      settextdeletedValue([...textdeletevalueId, id])
    }
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
        data.map(each => {
          return (
            <div key={each.id} className='sub'>
              <button type='button' className='iconbutton' onClick={(e) => textdelete(each.id)}><TiDeleteOutline size={25}/></button>
              {
                textdeletevalueId.includes(each.id) ? <del className='para'>{each.title}</del> : <p className='para'>{each.title}</p>
              }
              <button type='button' onClick={(e) => onDelete(each.id)} className='addButtondel'>delete</button>
            </div>
          )
        })
      }
    </div>
    
  );
}

export default App;
