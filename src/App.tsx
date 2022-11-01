import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
function App() {

    const tasks1 = [
        {id: 1, title: 'HTML & CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'TypeScript', isDone: false}
    ]

    const tasks2 = [
        {id: 1, title: 'Xiaomi Book Pro', isDone: false},
        {id: 2, title: 'JS полное руководство', isDone: true},
        {id: 3, title: 'Рефакторинг', isDone: true}
    ]

    return (
        <div className={'App'}>
            <Todolist title={'What to learn'} tasks={tasks1}/>
            <Todolist title={'What to buy'} tasks={tasks2}/>
        </div>
    )

}

export default App;
