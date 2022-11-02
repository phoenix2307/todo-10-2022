import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterButtonType = {
    id: string
    title: string
}

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
    const [filterValue, setFilterValue] = useState('all')

    const removeTask = (id: number) => {
        setTasks(tasks.filter(ft => ft.id !== id))
    }
    const filterTasks = (idFilterBtn: string) => {
        setTasks(myTasks1)
        if (idFilterBtn === 'active') {
            const filteredTasks = myTasks1.filter(ft => !ft.isDone)
            setTasks(filteredTasks)
        }
        else if (idFilterBtn === 'completed') {

            setTasks(myTasks1.filter(ft => ft.isDone))
        }
        else {
            setTasks(myTasks1)
        }
    }


    return (
        <div className={'App'}>
            <Todolist title={'What to learn'}
                      myTasks={tasks}
                      filterButtons={filterButtons}
                      removeTasks={removeTask}
                      filterTasks={filterTasks}
            />
        </div>
    )

}

export default App;
