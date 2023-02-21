import { useState } from 'react';
import Heading from './Heading';
import ToDoItem from './TodoItem';
import InputArea from './InputArea';

function App() {
    
  const [itemArray,setItemArray] = useState([]);

 

  function addItem(inputText)
  {
    setItemArray((prevItems)=>{
     return  [...prevItems,inputText];
    });
  }
  function deleteItem(id)
  {
    setItemArray(prevItems=>{
      return prevItems.filter((item,index)=> {
        return index!==id;
      })
    } );
   

  }
  return (
    <div className = "container">
      <Heading/>
      <InputArea addItem = {addItem}/>
      <div>
        <ul>
         {itemArray.map((item,index)=>(
          <ToDoItem ToDoItem = {item}
           key = {index} 
           id={index} 
           onChecked = {deleteItem}/>)
          )}         
        </ul>
      </div>
    </div>
  );
}

export default App;
