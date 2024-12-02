import React, { useState } from 'react'
import './App.css'
import { v1 } from 'uuid'
import { TodoList } from './components /todolist/TodoList'

export type FilterType = 'All' | 'Active' | 'Completed'

export type TasksType = {
	id: string
	title: string
	isDone: boolean
}

function App() {
	
	const [tasks, setTasks] = useState<TasksType[]>([
		{ id: v1(), title: 'CSS', isDone: true },
		{ id: v1(), title: 'JS', isDone: true },
		{ id: v1(), title: 'React', isDone: false }
	])
	
	
	const removeTask = (id: string) => {
		setTasks(tasks.filter(el => el.id !== id))
	}
	
	const [filter, setFilter] = useState<FilterType>('All')
	
	
	let tasksForTodoList = tasks
	
	if (filter === 'Active') {
		tasksForTodoList = tasks.filter(t => !t.isDone)
	}
	if (filter === 'Completed') {
		tasksForTodoList = tasks.filter(t => t.isDone)
	}
	
	const changeFilter = (filter:FilterType)=>{
		setFilter(filter)
	}
	
	const addTask = (title:string)=>{
		const newTask = { id: v1(), title, isDone: false }
		const newTasks = [newTask,...tasks]
		setTasks(newTasks)
	}
	
	
	return (
		<div className='App'>
			<TodoList
				title={'What to learn'}
				tasks={tasksForTodoList}
				removeTask={removeTask}
				changeFilter={changeFilter}
				addTask={addTask}
			/>
		</div>
	)
}

export default App
