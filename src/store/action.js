import axios from "axios";
import { ADD_TODO, DECREMENT, DELETE_TODO,GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, INCREMENT, RESET } from "./actionTypes";

export const incrementCounter = (payload) => ({
    type: INCREMENT,
    payload
});

export const decrementCounter = (payload) => ({
    type: DECREMENT,
    payload
});

export const resetCounter = (payload) => ({
    type: RESET,
    payload
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const getTodos = async (dispatch) => {
    dispatch({
        type: GET_TODOS_REQUEST
    });
    try {
        let res = await axios.get("http://localhost:8080/todos");
        let d = await res.data;
        dispatch({
            type: GET_TODOS_SUCCESS,
            payload: d,
        });
    } catch (e) {
        dispatch({
            type: GET_TODOS_ERROR
        });
    }
  };

export const deleteTodo = async (dispatch,id) => {
    await axios.delete(`http://localhost:8080/todos/${id}`);
    dispatch({
        type: DELETE_TODO,
        payload:id
    });
}