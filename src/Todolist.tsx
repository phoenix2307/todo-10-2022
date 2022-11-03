import React, {ChangeEvent, useState} from "react";
import {FilterType, TaskType} from "./App";

type TodolistPropsType = {
    title: string
    myTasks: TaskType[]
    removeTasks: (id: string) => void
    filterTasks: (filter: FilterType) => void
    addTask: (title: string) => void
}


export const Todolist = (props: TodolistPropsType) => {

    const [titleTask, setTitleTask] = useState('')

    const onClickHandler = (id: string) => {
        props.removeTasks(id)
    }
    //
    // const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     let inputValue = e.currentTarget.value
    //     setTitleTask(inputValue)
    // }
    const addTaskHandler = () => {
        props.addTask(titleTask)
        setTitleTask('')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                {/*<input value={titleTask} onChange={(e) => onChangeInputHandler(e)}/>*/}
                <input value={titleTask}
                       onChange={(e) => setTitleTask(e.currentTarget.value)}
                       onKeyPress={(e)=>{
                           if (e.key === 'Enter') {
                               addTaskHandler()
                           }
                       }}
                />
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
                <button onClick={() => props.filterTasks('all')}>All</button>
                <button onClick={() => props.filterTasks('active')}>Active</button>
                <button onClick={() => props.filterTasks('completed')}>Completed</button>
            </div>

        </div>
    )
}
