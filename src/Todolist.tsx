import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./universal-comonents/AddItemForm";
import {EditableSpan} from "./universal-comonents/EditableSpan";
import {Button, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    editedTitle: (newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    return <div>
        <EditableSpan editedTitle={props.editedTitle} newTitleForSpan={props.title}/>
        <IconButton onClick={removeTodolist}>
            <Delete />
        </IconButton>
        <AddItemForm callback={addTask}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox color={'success'} onChange={onChangeHandler} checked={t.isDone}/>
                        <EditableSpan editedTitle={props.editedTitle} newTitleForSpan={t.title}/>
                        <Button
                            variant={'contained'}
                            color={'error'}
                            size={'small'}
                            style={{
                                maxWidth: '20px',
                                maxHeight: '20px',
                                minWidth: '20px',
                                minHeight: '20px',
                                padding: '5px',
                                fontSize: '10px'
                            }} onClick={onClickHandler}>x</Button>
                    </li>
                })
            }
        </ul>
        <div>
            <Button variant={props.filter === 'all' ? 'contained' : 'outlined'}
                    size={'small'}
                    color={'secondary'}
                // className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button variant={props.filter === 'active' ? 'contained' : 'outlined'}
                    size={'small'}
                    color={'error'}
                    // className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'contained' : 'outlined'}
                    size={'small'}
                    color={'secondary'}
                    // className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
}


