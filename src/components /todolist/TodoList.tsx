import React from 'react'
import { FilterType, TasksType } from '../../App'
import { Button } from '../button/Button'

type Props = {
	title: string
	tasks: Array<TasksType>
	removeTask: (id:number)=>void
	changeFilter:(filter:FilterType)=>void
}

export const TodoList = ({ title, tasks,removeTask,changeFilter }: Props) => {
	

	
	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input />
				<Button title={'+'} onClick={() => {
				}} />
			</div>
			<ul>
				{tasks.map((el) => {
					return (
						<li key={el.id}>
							<input type={'checkbox'} checked={el.isDone} />
							<span>{el.title}</span>
							<Button title={'x'} onClick={()=>{removeTask(el.id)}}/>
						</li>
					)
				})}
			</ul>
			<div>
				<Button title={'All'} onClick={() =>changeFilter('All')} />
				<Button title={'Active'} onClick={() => changeFilter('Active')} />
				<Button title={'Completed'} onClick={() => changeFilter('Completed')} />
			</div>
		</div>
	)
}