import React, {ChangeEvent, useState} from "react";
import {FilterType, TaskType} from "./App";

type TodolistPropsType = {
    title: string
    myTasks: TaskType[]
    removeTasks: (id: string) => void
    filterTasks: (filter: FilterType) => void
    addTask: (title: string) => void
    changeStatusTasks: (idTask: string) => void
    pushedButton: FilterType
}


export const Todolist = (props: TodolistPropsType) => {

    const [titleTask, setTitleTask] = useState('')
    const [error, setError] = useState<null | string>('')

    const onClickHandler = (id: string) => {
        props.removeTasks(id)
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        let inputValue = e.currentTarget.value
        setTitleTask(inputValue)
    }
    const addTaskHandler = () => {
        if (titleTask.replace(/ +| $|() +/g, '$1') !== '') {
            props.addTask(titleTask)
            setTitleTask('')
        } else {
            setError('Title is required')
        }
    }

    function changeTaskStatusHandler(id: string) {
        props.changeStatusTasks(id)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={titleTask}
                       onChange={(e) => onChangeInputHandler(e)}
                       onKeyPress={(e) => {
                           if (e.key === 'Enter') {
                               addTaskHandler()
                           }
                       }}
                       className={error ? 'error' : ''}
                />

                <button onClick={addTaskHandler}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ol>
                {props.myTasks.map(t => {
                    return (
                        <li key={t.id}
                        className={t.isDone ? 'is-done' : ''}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onClick={() => changeTaskStatusHandler(t.id)}
                            />
                            <span>{t.title}</span>
                            <button onClick={() => onClickHandler(t.id)}>x</button>
                        </li>
                    )
                })}
            </ol>
            <div>
                <button
                    className={props.pushedButton === 'all' ? 'push-button' : ''}
                    onClick={() => props.filterTasks('all')}>All</button>
                <button
                    className={props.pushedButton === 'active' ? 'push-button' : ''}
                    onClick={() => props.filterTasks('active')}>Active</button>
                <button
                    className={props.pushedButton === 'completed' ? 'push-button' : ''}
                    onClick={() => props.filterTasks('completed')}>Completed</button>
            </div>

        </div>
    )
}
