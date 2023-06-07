import { ADD_TODO, DECREMENT, DELETE_TODO, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, INCREMENT, RESET } from "./actionTypes";

export const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count:state.count+action.payload,
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count:state.count-action.payload,
            }
        }
        case RESET: {
            return {
                ...state,
                count:action.payload,
                // console.log(state.count)
             }
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: {
                    isLoading: false,
                    isError: false,
                    data:[...state.todos.data,action.payload]
                }
            }
         }
        case GET_TODOS_REQUEST: {
            return {
                ...state,
                todos: {
                    isLoading: true,
                    isError: false,
                    data:[],
                }
              }
        }
        case GET_TODOS_SUCCESS: {
            return {
                ...state,
                todos: {
                    isLoading: false,
                    isError: false,
                    data: action.payload
                }
            }
        }
        case GET_TODOS_ERROR: {
            return {
                ...state,
                todos: {
                    isLoading: false,
                    isError: true,
                    data:[],
                }
            }
        }
        case DELETE_TODO: {
            try {
                return {
                    ...state,
                    todos: {
                        isLoading: false,
                        isError: false,
                        data: state.todos.data.filter((e) => e.id !== action.payload)
                    }
                }
            } catch (e) {
                console.log(e)
           }
        }
        default:{
            return state;
      }
   }
}