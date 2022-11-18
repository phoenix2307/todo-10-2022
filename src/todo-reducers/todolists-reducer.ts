import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string

}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string

}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string

}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType

}

export type TodoListsReducerActionType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

export const todolistsReducer = (state: Array<TodolistType>, action: TodoListsReducerActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(f => f.id !== action.id)
        case 'ADD-TODOLIST':
            const newTodolistID = v1()
            const newTodolist: TodolistType = {id: newTodolistID, title: action.title, filter: "all"}
            return [...state, newTodolist]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(t => t.id === action.id ? {...t, title: action.title} : t)
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(t => t.id === action.id ? {...t, filter: action.filter} : t)
        default:
            throw new Error('this action is undefined')
    }

}


export const removeTodolistAC = (todolistID: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistID}
}

export const addTodolistAC = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title}
}

export const changeTodolistTitleAC = (todolistID: string, newTitle: string): ChangeTodolistTitleActionType=>{
    return {   type: 'CHANGE-TODOLIST-TITLE', id: todolistID, title: newTitle}
}

export const changeTodolistFilterAC = (todolistID: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return   {type: 'CHANGE-TODOLIST-FILTER', id: todolistID, filter}
}

