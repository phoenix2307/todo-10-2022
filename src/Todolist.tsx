import React from "react";
import {FilterType, TaskType} from "./App";

type TodolistPropsType = {
    title: string
    myTasks: TaskType[]
    removeTasks: (id: string) => void
    filterTasks: (filter: FilterType) => void
    addTask: (title: string) => void
}


export const Todolist = (props: TodolistPropsType) => {
    const onClickHandler = (id: string) => {
        props.removeTasks(id)
    }


    const onChangeInputHandler = ()=>{

    }
    const addTaskHandler = () => {

        props.addTask('new taska')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input onChange={()=>onChangeInputHandler()}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ol>
                {props.myTasks.map(t => {
                    return (
                        <li key={t.id}><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => onClickHandler(t.id)}>x</button>
                        </li>
                    )
                })}
            </ol>
            <div>
                <button onClick={()=>props.filterTasks('all')}>All</button>
                <button onClick={()=>props.filterTasks('active')}>Active</button>
                <button onClick={()=>props.filterTasks('completed')}>Completed</button>
            </div>

        </div>
    )
}
