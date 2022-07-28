import {useState} from "react";
import {addTodo} from "../store/slices/todosSlice";
import {useDispatch} from "react-redux";
import axios from "axios";

export default function AddTodo(){
    const dispatch = useDispatch();
    const [InputTodo, setInputTodo] = useState('');

    const InputTodoHandler = (e)=> setInputTodo(e.target.value)

    const AddTodoHandler = async () => {
        if(InputTodo.length > 0) {

            try {
                let res = await axios.post("https://62c5ff8976028b55ae71b0a5.endapi.io/todos" , {
                    text : InputTodo,
                    done : false
                })

                dispatch(addTodo(res.data));
                setInputTodo("");
            } catch (e) {
                console.log(e);
            }


        }
    }

    return(
        <div className="flex mt-4">
            <input
                value={InputTodo}
                onChange={InputTodoHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"
                   placeholder="Add Todo"/>
            <button
                onClick={AddTodoHandler}
                className="p-2 border-2 rounded text-teal-500 border-teal-500  hover:text-white hover:bg-teal-500">Add
            </button>
        </div>
    )
}