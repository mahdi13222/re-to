import {useDispatch, useSelector} from "react-redux";
import AddTodo from "./Addtodo";
import TodoItem from "./todoitem";
import {useEffect} from "react";
import axios from "axios";
import {setTodo, editTodo} from "../store/slices/todosSlice";

export default function TodoSection(){
    const dispatch = useDispatch();

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = async () =>{
        let res = await axios.get('https://62c5ff8976028b55ae71b0a5.endapi.io/todos');

        dispatch(setTodo(res.data.data))
        console.log(res)

    }

    const todos = useSelector(state => state.todos.list)
    console.log(todos)



    return(
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
                <div className="mb-4">
                    <h1 className="text-gray-700 text-3xl font-bold">Todo List</h1>
                    <AddTodo />
                </div>
                <div>
                    {
                        todos.map(todo => <TodoItem key={todo.id} todo={todo} edit={dispatch(editTodo.bind(this))}
                        />)
                    }
                    {/*<div className="flex justify-between mb-4 items-center">*/}
                    {/*    <p className="mr-auto line-through text-green-600">Submit Todo App Component to Tailwind*/}
                    {/*        Components</p>*/}
                    {/*    <div className="flex items-center">*/}
                    {/*        <button*/}
                    {/*            className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400">Not*/}
                    {/*            Done*/}
                    {/*        </button>*/}
                    {/*        <button*/}
                    {/*            className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}