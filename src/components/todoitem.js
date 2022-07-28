import {deletetodo, toggleDone, editTodo} from "../store/slices/todosSlice";
import {useDispatch} from "react-redux";
import axios from "axios";
import {useState} from "react";
import EditTodo from "./EditTodo";

export default function TodoItem({todo}){
    const dispatch = useDispatch();
    const DeleteTodoHandler = async () => {
        let res = await axios.delete(`https://62c5ff8976028b55ae71b0a5.endapi.io/todos/${todo.id}`)
        console.log(res)
        dispatch(deletetodo(todo.id))
    }
    const ToggleDone = async ()=>{
       let res = await axios.put(`https://62c5ff8976028b55ae71b0a5.endapi.io/todos/${todo.id}`,{
           ...todo,
           done: ! todo.done
       })
        dispatch(toggleDone({id: todo.id}))
    }
    const [edit, setEdit] = useState(false);
    const editHandler = async ()=>{
    let res = await axios.put(`https://62c5ff8976028b55ae71b0a5.endapi.io/todos/${todo.id}`,{
        ...todo,
        text:  todo.text
    })
    dispatch(editTodo({id: todo.id}))
    }
    return(
        <>
            {
                edit === false
                    ? (
                        <div className="flex mb-4 items-center">
                            <p className={`mr-auto ${todo.done ? 'line-through text-green-600' : 'text-gray-700'}`}>{todo.text}</p>
                            {
                                todo.done
                                    ? <button onClick={ToggleDone} className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400">Not Done</button>
                                    : <button onClick={ToggleDone} className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600">Done </button>
                            }
                            <button  className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400" onClick={() => setEdit(true)}>Edit</button>
                            <button onClick={DeleteTodoHandler} className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
                        </div>
                    )
                    : <EditTodo text={todo.text} edit={editHandler}/>
            }
        </>
    )
}