import React from 'react'
import { useIsMousePresent, useMousePosition } from '../util'

const Cursor: React.FC = () => {
	const mouse = useMousePosition()
	const present = useIsMousePresent()

	return present
		? <span style={{
			position: 'fixed',
			top: mouse.absolute.y,
			left: mouse.absolute.x,
			width: '1em',
			height: '1em',
			borderRadius: '1em',
			transform: 'translate(-50%, -50%)',
			backgroundColor: '#000000',
		}}/>
		: null
}

export default Cursor