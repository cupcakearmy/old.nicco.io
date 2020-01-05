import { useEffect, useState } from 'react'



type Size = { width: string, height: string }
export const useInnerWindowSize = (): Size => {

	if (typeof window === 'undefined') return {
		width: '100vw',
		height: '100vh',
	}

	const getCurrentSize = (): Size => ({
		height: window.innerHeight + 'px',
		width: window.innerWidth + 'px',
	})

	let [size, setSize] = useState<Size>(getCurrentSize)

	useEffect(() => {
		const handle = () => setSize(getCurrentSize())
		window.addEventListener('resize', handle)
		return () => window.removeEventListener('resize', handle)
	}, [])

	return size
}

export const useIsMousePresent = () => {
	let [present, setPresent] = useState<boolean>(!('ontouchstart' in window) && ('onmousemove' in window))

	useEffect(() => {
		const enter = () => setPresent(true)
		const leave = () => setPresent(false)
		window.document.addEventListener('mouseenter', enter)
		window.document.addEventListener('mouseleave', leave)
		return () => {
			window.document.removeEventListener('mouseenter', enter)
			window.document.removeEventListener('mouseleave', leave)
		}
	}, [])

	return present
}

type Orientation = {
	x: number,
	y: number,
	z: number,
}

export const useOrientation = (useInitialDelta: boolean = false): Orientation | undefined => {

	const [orientation, setOrientation] = useState<DeviceAcceleration | undefined>()
	const [initial, setInitial] = useState<DeviceAcceleration>()

	useEffect(() => {
		if (!initial)
			setInitial(orientation)
	}, [orientation, initial])

	useEffect(() => {
		const handleOrientation = (event: DeviceMotionEvent) => {
			setOrientation(event.accelerationIncludingGravity || undefined)
		}
		window.addEventListener('devicemotion', handleOrientation, true)
		return () => window.removeEventListener('devicemotion', handleOrientation, true)
	}, [])

	if (!orientation || !orientation.x || !orientation.y || !orientation.z) return

	if (!useInitialDelta) return {
		x: orientation.x || 0,
		y: orientation.y || 0,
		z: orientation.z || 0,
	}

	if (initial && orientation && initial.x && initial.y && initial.z) return {
		x: orientation.x - initial.x,
		y: orientation.y - initial.y,
		z: orientation.z - initial.z,
	}

	return
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


