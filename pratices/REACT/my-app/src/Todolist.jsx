import React from 'react'
function Todolist(){
    //data
    var [todos,setTodos]=React.useState(['xerox','reading','classAt4till9','enjoy'])
    var [addtodos,setaddtodos]=React.useState('')
    var myref = React.useRef()
    function newtask(){
        setTodos([...todos,addtodos])
    }
    
    React.useEffect(()=>{ 
        myref.current.focus();
    },[])
    //ReturnLogic
    return(
        <div className='betterview'>
            
            <input type="text" onChange={(e)=>{setaddtodos(e.target.value)}} ref={myref}/>
            <button onClick={newtask}>Add Task</button>
            <h1>ToDoList </h1>
           {
            todos.map((t,i)=>{
                return( <li>{t}</li> )
            })
           }
        </div>
    )
}
export default Todolist;