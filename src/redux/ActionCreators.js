import * as ActionTypes from './ActionTypes';
import { API } from 'aws-amplify';

export const getTodos = (token) =>  {
    const requestInfo = {
        headers: {
            Authorization: token
        }
    }
    return dispatch => {
        API.get('awsProjApi', '/todos', requestInfo)
        .then(todos => {
            console.log(todos.data.Items)
            dispatch({
                type: ActionTypes.GET_TODOS,
                todos: todos.data.Items
            })
        })
    }
}

export const postTodo = (token, body) => {
    const requestInfo = {
        headers: {
            Authorization: token
        },
        body: body
    }
    return dispatch => {
        API.post('awsProjApi', '/todos', requestInfo)
        .then(data => {
            console.log(body);
            dispatch({
                type: ActionTypes.POST_TODO,
                todo: body
            })
        })
    }
}

export const delTodo = (token, body) => {
    const requestInfo = {
        headers: {
            Authorization: token
        },
        body: body
    }
    return dispatch => {
        API.del('awsProjApi', '/todos', requestInfo)
        .then(data => {
            console.log(data);
            console.log(body.id);
            dispatch({
                type: ActionTypes.DEL_TODO,
                id: body.id
            })
        })
    }
}