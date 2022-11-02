import React from "react";
import {FilterButtonType, TaskType} from "./App";

type TodolistPropsType = {
    title: string
    myTasks: TaskType[]
    filterButtons: FilterButtonType[]
    removeTasks: (id: number) => void
    filterTasks: (id: string) => void
}


export const Todolist = (props: TodolistPropsType) => {
    const onClickHandler = (id: number) => {
        props.removeTasks(id)
    }

    function clickBtnHandler(id: string) {
        props.filterTasks(id)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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
                {props.filterButtons.map(btn => {
                    return (
                        <button id={btn.id} onClick={() => clickBtnHandler(btn.id)}>{btn.title}</button>
                    )
                })}
                {/*<button>All</button>*/}
                {/*<button>Active</button>*/}
                {/*<button>Completed</button>*/}
            </div>

        </div>
    )
}
