import { useEffect, useState } from 'react'

const getSize = () => {
	const { innerHeight, innerWidth, outerHeight, outerWidth } = window
	return { innerHeight, innerWidth, outerHeight, outerWidth }
}

export const useIsMousePresent = ()=> {
	let [present, setPresent] = useState<boolean>(false)

	useEffect(() => {
		const enter = ()=> setPresent(true)
		const leave = ()=> setPresent(false)
		window.document.addEventListener('mouseenter', enter)
		window.document.addEventListener('mouseleave', leave)
		return () => {
			window.document.removeEventListener('mouseenter', enter)
			window.document.removeEventListener('mouseleave', leave)
		}
	}, [])

	return present
}

export const useMousePosition = () => {
	let [position, setPosition] = useState({ absolute: { x: 0, y: 0 }, relative: { x: 0, y: 0 } })

	const handle = (e: MouseEvent) => {
		setPosition({
			absolute: {
				x: e.pageX,
				y: e.pageY,
			},
			relative: {
				x: e.pageX / window.innerWidth,
				y: e.pageY / window.innerHeight,
			},
		})
	}

	useEffect(() => {
		window.addEventListener('mousemove', handle)
		return () => {
			window.removeEventListener('mousemove', handle)
		}
	}, [])

	return position
}

export const Rand = (from: number = 0, to: number = 1, float: boolean = false) => {
	const rand = (Math.random() * (to - from)) + from
	return float ? rand : rand | 0
}

export const GoldenRatio: number = (1 + Math.sqrt(5)) / 2
