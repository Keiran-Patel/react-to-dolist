import React from 'react';


const Form = ({setInputText,todos,setTodos, inputText, setStatus })=> {
    //Here i can write Java script code and function
    const inputTextHandler = (e)=> {
        //console.log(e.target.value);
        setInputText(e.target.value);
        };
        const submitTodoHandler = (e)=> {
           e.preventDefault();
           setTodos([
           ...todos,
           { text: inputText, completed: false, id: Math.random()*1000},
           ]);
           setInputText("");
        };
        const statusHandler = (e) => {
            setStatus(e.target.value);
        }
            return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
        </button>
        <div class="select">
        <select onChange ={statusHandler} name="todos" class="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">uncompleted</option>
        </select>
        </div>
        </form>
        
        );
    }

export default Form;