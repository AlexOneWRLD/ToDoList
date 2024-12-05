import React from 'react'

type Props = {
	title: string
	onClick: () => void
	className?: string
}

export const Button = ({ title, onClick,className }: Props) => {
	
	const OnClickHandler = () => {
		onClick()
	}
	
	return (
		<button className={className} onClick={OnClickHandler}>{title}</button>
	)
}