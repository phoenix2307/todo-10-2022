import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {


    const filterButtons = [
        {id: 'all', title: 'All'},
        {id: 'active', title: 'Active'},
        {id: 'completed', title: 'Completed'}
    ]

    const myTasks1 = [
        {id: 1, title: 'HTML & CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'TypeScript', isDone: false},
        {id: 5, title: 'Rest API', isDone: false},
        {id: 6, title: 'GraphQL', isDone: false}
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

    const removeTask = (id: number) => {
        setTasks(tasks.filter(ft => ft.id !== id))
    }

    const filterTasks = (filter: FilterType) => {
        setFilterValue(filter)
    }
    return (
        <div className={'App'}>
            <Todolist title={'What to learn'}
                      myTasks={filteredTasks}
                      removeTasks={removeTask}
                      filterTasks={filterTasks}
            />
        </div>
    )

}

export default App;
