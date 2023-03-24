import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = () => {

    // const initialState =[];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos') || [] );
      }


    const [ todos, dispatch ] = useReducer(todoReducer, [] , init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos )   )
  
     }, [todos])
      
    //  const todosCount = todos.length;
    //  const pendingTodosCount = todos.filter(todo => !todo.done).length;

      const handleNewTodo = ( todo ) =>{
        const action ={
          type: '[TODO] Add Todo',
          payload: todo
        }
  
        dispatch( action );
      } 
      const handleDeleteTodo = ( id ) => {
        dispatch({
          type: '[TODO] Remove Todo',
          payload: id
        });
      }
      const handleToggleTodo = (id) => {
        console.log({id})
        dispatch({
          type: '[TODO] Toggle Todo',
          payload: id
        });
      }


      return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
    }

}