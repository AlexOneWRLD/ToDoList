import React from 'react'

type Props = {
	type?: string
	checked?: boolean
	value?: string
	onChange?: () => void
}

export const Input = ({ type, checked,value,onChange }: Props) => {
	
	return (
		<input type={type}
		       checked={checked}
		/>
	)
}