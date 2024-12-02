import React, { useState } from 'react'
import './App.css'
import { TodoList } from './components /todolist/TodoList'

export type FilterType = 'All' | 'Active' | 'Completed'

export type TasksType = {
	id: number
	title: string
	isDone: boolean
}

function App() {
	
	let task: Array<TasksType> = [
		{ id: 1, title: 'CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'React', isDone: false }
	]
	
	const [tasks, setTasks] = useState(task)
	
	const removeTask = (id: number) => {
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
	
	
	return (
		<div className='App'>
			<TodoList
				title={'What to learn'}
				tasks={tasksForTodoList}
				removeTask={removeTask}
				changeFilter={changeFilter}
			/>
		</div>
	)
}

export default App
