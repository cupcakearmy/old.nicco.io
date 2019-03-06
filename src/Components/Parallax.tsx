import React from 'react'
import { useMousePosition, useOrientation } from '../util'

type RenderProps = {
	x: string,
	y: string
}

const Render: React.FC<RenderProps> = React.memo(({ children, x, y }) => <div style={{
	transform: `rotateX(${y}) rotateY(${x})`,
	transition: `transform .1s`,
}}>
	{children}
</div>)

const Parallax: React.FC = ({ children }) => {

	const orientation = useOrientation(true)
	const mouse = useMousePosition()
	const convertToDeg = (current: number, factor: number) => `${((.5 - current) * factor).toFixed(2)}deg`

	const orientationFactor = 3
	const x = orientation ? Math.min(orientation.x / orientationFactor, 1) : mouse.relative.x
	const y = orientation ? Math.min(orientation.y / orientationFactor, 1) : mouse.relative.y

	return <Render y={convertToDeg(y, 2)} x={convertToDeg(x, .75)}>
		{children}
	</Render>
}

export default Parallax