import React,{useState} from "react";
import { editTodo} from "../store/slices/todosSlice"
import {useDispatch} from "react-redux";
import axios from "axios";

function EditTodo(props){
    const [text, setText] = useState(props.text)
    const dispatch = useDispatch();

    const edittodo = () => dispatch(editTodo({text: props.text}))
    let inputHandler = e => setText(e.target.value);
    return(
        <>
            <div className="flex mb-4 items-center">
                <input value={text} onChange={inputHandler} className='mr-auto  line-through text-green-600 text-gray-700' />

                <button  className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400" onClick={edittodo}>Edit</button>
            </div>
        </>
    )
}
export default EditTodo;