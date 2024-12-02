import React, { ChangeEvent, useState, KeyboardEvent } from 'react'
import { FilterType, TasksType } from '../../App'
import { Button } from '../button/Button'
import { Input } from '../input/Input'

type Props = {
	title: string
	tasks: Array<TasksType>
	removeTask: (id: string) => void
	changeFilter: (filter: FilterType) => void
	addTask: (title: string) => void
}

export const TodoList = ({ title, tasks, removeTask, changeFilter, addTask }: Props) => {
	
	const [taskTitle, setTaskTitle] = useState('')
	
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(e.currentTarget.value)
	}
	
	const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addTaskHandler()
		}
	}
	
	const addTaskHandler = () => {
		addTask(taskTitle)
		setTaskTitle('')
	}
	
	const setCompletedTaskHandler = ()=>{
		changeFilter('Completed')
	}
	
	const setActiveTaskHandler = ()=>{
		changeFilter('Active')
	}
	
	const setAllTaskHandler = ()=>{
		changeFilter('All')
	}
	
	
	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input
					value={taskTitle}
					onChange={onChangeHandler}
					onKeyDown={onKeyHandler}
				/>
				<Button title={'+'} onClick={addTaskHandler} />
			</div>
			<ul>
				{tasks.map((el) => {
					const removeTaskHandler = ()=>{
						removeTask(el.id)
					}
					
					return (
						<li key={el.id}>
							<Input type={'checkbox'} checked={el.isDone} />
							<span>{el.title}</span>
							<Button title={'x'} onClick={removeTaskHandler} />
						</li>
					)
				})}
			</ul>
			<div>
				<Button title={'All'} onClick={setAllTaskHandler} />
				<Button title={'Active'} onClick={setActiveTaskHandler} />
				<Button title={'Completed'} onClick={setCompletedTaskHandler} />
			</div>
		</div>
	)
}