
import React, {useState} from "react";

function ToDoList() {
   
    const [TaskList, setTaskList] = useState(["wake up", "eat breakFest"]);

    function HandleAddElement (){
    const newTask = document.getElementById("InputTasks").value;

    if (newTask !== "") {
        setTaskList(T => [...T, newTask])
        document.getElementById("InputTasks").value ="";
    }
    }

    function HandleRemoveElement(index){
        setTaskList(TaskList.filter((element, i) => i !== index))
    }


    return(<>
    <div className="MainContainor">
        <h2 className="MainText">to do list</h2>
        <input type="text" id="InputTasks" placeholder="what do you need to do"/>

            <button onClick={HandleAddElement} className="ButtonInput">add task</button>
        <ul>
            {TaskList.map((Tasks, index) => <li key={index}  className="TaskLi"  onDrag={(e, index) => handleDrag}  onKeyDown={(e) => { 
                        if (e.key === "Enter") { 
                            HandleAddElement()  
                        } 
                    }}  onClick={() => HandleRemoveElement(index)}>{Tasks}</li>)}
        </ul>
    </div>
    </>);
}

export default ToDoList
