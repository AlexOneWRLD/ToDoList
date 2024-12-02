import React from 'react'
import { TasksType } from '../../App'
import { Button } from '../button/Button'

type Props = {
	title:string
	tasks: Array<TasksType>
}

export const TodoList = ({title,tasks}:Props) => {
	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input/>
				<Button title={'+'} onClick={()=>{}}/>
			</div>
			<ul>
				{tasks.map((el)=>{
					return(
						<li key={el.id}><input type={'checkbox'} checked={el.isDone}/><span>{el.title}</span></li>
					)
				})}
			</ul>
			<div>
				<Button title={'All'} onClick={()=>{}}/>
				<Button title={'Active'} onClick={()=>{}}/>
				<Button title={'Completed'} onClick={()=>{}}/>
			</div>
		</div>
	)
}