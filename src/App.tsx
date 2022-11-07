import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const myTasks1 = [
        {id: v1(), title: 'HTML & CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'TypeScript', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false}
    ]
    const [tasks, setTasks] = useState(myTasks1)
    const [filterValue, setFilterValue] = useState<FilterType>('all')

    let filteredTasks = tasks

    if (filterValue === 'active') {
        filteredTasks = tasks.filter(t => !t.isDone)
    }
    if (filterValue === 'completed') {
        filteredTasks = tasks.filter(t => t.isDone)
    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(ft => ft.id !== id))
    }

    const filterTasks = (filter: FilterType) => {
        setFilterValue(filter)
    }

    const addTask = (title: string) => {
        const newTask = {id: v1(), title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const changeStatusTasks = (idTask: string) => {
        setTasks(tasks.map(t => t.id === idTask ? {...t, isDone: !t.isDone} : t))
    }


    return (
        <div className={'App'}>
            <Todolist title={'What to learn'}
                      myTasks={filteredTasks}
                      removeTasks={removeTask}
                      filterTasks={filterTasks}
                      addTask={addTask}
                      changeStatusTasks={changeStatusTasks}
                      pushedButton={filterValue}
            />
        </div>
    )

}

export default App;
