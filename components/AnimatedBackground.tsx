import React, { useEffect, useState } from 'react'

import { Duration } from '../utils/config'
import { GoldenRatio, Rand } from '../utils/utils'
import '../styles/AnimatedBackground.styl'



type Color = [number, number, number]

const getRandomColor = () => [Rand(0, 255), Rand(70, 90), Rand(80, 90)] as Color
const colorToString = ([h, s, l]: Color) => `hsl(${h}, ${s}%, ${l}%)` as string
const valuesToGradient = (dir: number, from: Color, to: Color) => `linear-gradient(${dir}deg, ${colorToString(from)}, ${colorToString(to)})` as string

const AnimatedBackground: React.FC = () => {

	const [start, setStart] = useState<Color>([255, 255, 255])
	const [end, setEnd] = useState<Color>([255, 255, 255])
	const [direction, setDirection] = useState<number>(0)

	const update = () => {
		const from = getRandomColor()
		// Calculate conjugate color based on the golden ratio
		const to: Color = [Math.floor(from[0] + (255 * GoldenRatio * 2)) % 255, from[1], from[2]]

		setStart(from)
		setEnd(to)
		setDirection(Rand(0, 360))
	}

	useEffect(() => {
		update()
		const interval = setInterval(update, Duration)
		return () => clearInterval(interval)
	}, [])

	return <div className={'animated-background'} style={{
		backgroundImage: valuesToGradient(direction, start, end),
	}} />
}

export default AnimatedBackground