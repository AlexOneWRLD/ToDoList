import React from 'react';
import './App.css';
import { TodoList } from './components /todolist/TodoList'

export type TasksType = {
  id: number
  title: string
  isDone:boolean
}

function App() {
  
  let tasks1: Array<TasksType> = [
    {id:1,title:'CSS',isDone: true},
    {id:2,title:'JS',isDone: true},
    {id:3,title:'React',isDone: true},
  ]
  
   let tasks2: Array<TasksType>= [
    {id:1,title:'CSS',isDone: true},
    {id:2,title:'JS',isDone: false},
    {id:3,title:'React',isDone: false},
  ]
  
  
    return (
        <div className="App">
           <TodoList title={'What to learn'} tasks={tasks1}/>
        </div>
    );
}

export default App;
