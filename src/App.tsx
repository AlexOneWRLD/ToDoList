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

export type TodoListType = {
	id: string
	title: string
	filter: FilterType
}

function App() {
	
	const todoListId1 = v1()
	const todoListId2 = v1()
	
	let [todolists, setTodolists] = useState<TodoListType[]>([
		{ id: todoListId1, title: 'What to learn', filter: 'All' },
		{ id: todoListId2, title: 'What to buy', filter: 'All' }
	])
	
	const [tasks, setTasks] = useState({
		[todoListId1]: [
			{ id: v1(), title: 'CSS', isDone: true },
			{ id: v1(), title: 'JS', isDone: true },
			{ id: v1(), title: 'React', isDone: false }
		],
		[todoListId2]: [
			{ id: v1(), title: 'CSS', isDone: true },
			{ id: v1(), title: 'JS', isDone: true },
			{ id: v1(), title: 'React', isDone: false }
		]
	})
	
	
	
	const removeTask = (id: string) => {
		// setTasks(tasks.filter(el => el.id !== id))
	}
	
	
	const changeFilter = (filter: FilterType,todoListId:string ) => {
		setTodolists(todolists.map(t=>(t.id === todoListId ? {...t,filter}: t)))
	}
	
	const addTask = (title: string) => {
		// const newTask = { id: v1(), title, isDone: false }
		// const newTasks = [newTask, ...tasks]
		// setTasks(newTasks)
	}
	
	const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
		// const newState = tasks.map(ts => (ts.id === taskId ? { ...ts, isDone: taskStatus } : ts))
		// setTasks(newState)
	}
	
	
	return (
		<div className='App'>
			
			{todolists.map(t => {
				
				const allTodoListTasks = tasks[t.id]
				let tasksForTodoList = allTodoListTasks
				
				if (t.filter === 'Active') {
					tasksForTodoList = allTodoListTasks.filter(t => !t.isDone)
				}
				if (t.filter === 'Completed') {
					tasksForTodoList = allTodoListTasks.filter(t => t.isDone)
				}
				
				
				return (<TodoList
						todoListId={t.id}
						key={t.id}
						title={t.title}
						tasks={tasksForTodoList}
						removeTask={removeTask}
						changeFilter={changeFilter}
						addTask={addTask}
						changeTaskStatus={changeTaskStatus}
						filter={t.filter}
					/>
				)
			})}
		
		</div>
	)
}

export default App
