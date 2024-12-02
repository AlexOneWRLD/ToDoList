import React from 'react'

type Props = {
	title: string
	onClick: () => void
}

export const Button = ({ title, onClick }: Props) => {
	
	const OnClickHandler = () => {
		onClick()
	}
	
	return (
		<button onClick={OnClickHandler}>{title}</button>
	)
}