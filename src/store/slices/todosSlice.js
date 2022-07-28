import {createSlice} from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name : 'todos',
    initialState : {
        list : []
    },
    reducers : {
        setTodo : (state, {payload})=>{
            state.list = payload
        },
        addTodo : (state , action) =>{
            state.list.push(action.payload)
        },

        deletetodo : (state , action)=>{
            state.list = state.list.filter(todo => todo.id !== action.payload)
        },
        toggleDone : (state , {payload})=>{
            state.list = state.list.map((todo)=>{
                if (todo.id === payload.id){
                    return{
                        ...todo,
                        done: ! todo.done
                    }
                }
                return todo;
            })
        },

        editTodo : (state , {payload})=>{
            state.list = state.list.map((todo)=>{
                if (todo.id === payload.id){
                    return{
                        ...todo,
                        text:  todo.text
                    }
                }
                return todo;
            })
        },

    }
})
export const { addTodo, deletetodo, toggleDone, setTodo , editTodo} = todosSlice.actions;
export default todosSlice.reducer;