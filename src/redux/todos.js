import * as ActionTypes from './ActionTypes';

export const Todos = (state = {
    todos: null
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_TODOS:
            return { todos: action.todos }
        case ActionTypes.POST_TODO:
            return { todos: state.todos.concat([action.todo]) }
        case ActionTypes.DEL_TODO:
            return {
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.id
                })
            }
        default:
            return state;
    }
}
