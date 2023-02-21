
function ToDoItem(props){
       
    return(
        <div onClick={()=>{props.onChecked(props.id)}}>
        <li >{props.ToDoItem}</li>
        </div>
    );
}
export default ToDoItem;