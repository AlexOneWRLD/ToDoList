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
	changeTaskStatus: (taskId: string, taskStatus: boolean) => void
}

export const TodoList = ({ title, tasks, removeTask, changeFilter, addTask, changeTaskStatus }: Props) => {
	
	const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)
	
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(e.currentTarget.value)
	}
	
	const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (e.key === 'Enter') {
			addTaskHandler()
		}
	}
	
	const addTaskHandler = () => {
		if (taskTitle.trim() !== '') {
			addTask(taskTitle.trim())
			setTaskTitle('')
		} else {
			setError('Title is required')
		}
	}
	
	const setCompletedTaskHandler = () => {
		changeFilter('Completed')
	}
	
	const setActiveTaskHandler = () => {
		changeFilter('Active')
	}
	
	const setAllTaskHandler = () => {
		changeFilter('All')
	}
	
	
	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input
					className={error ? 'error' : ''}
					value={taskTitle}
					onChange={onChangeHandler}
					onKeyDown={onKeyHandler}
				/>
				<Button title={'+'} onClick={addTaskHandler} />
				{error && <div className={'error-message'}>{error}</div>}
			</div>
			<ul>
				{tasks.map((el) => {
					const removeTaskHandler = () => {
						removeTask(el.id)
					}
					const ChangeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
						const newStatusValue = e.currentTarget.checked
						changeTaskStatus(el.id, newStatusValue)
					}
					
					return (
						<li key={el.id}>
							<input type={'checkbox'}
							       checked={el.isDone}
							       onChange={ChangeTaskStatusHandler} />
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