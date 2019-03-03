import anime from 'animejs'
import React, { useEffect, useRef } from 'react'
import { Duration } from '../App'

export type LettersProps = {
	text: string
	delay?: number
}

const LetterAnimation: React.FC<LettersProps> = React.memo(({ text, delay }) => {

	const letters = useRef<HTMLElement>(null)

	const animate = () => {
		if (!letters || !letters.current) return

		const wrapper = letters.current
		wrapper.innerHTML = wrapper.innerText.replace(
			/./g,
			l => `<span class='letter'>${l}</span>`,
		)

		anime({
			targets: wrapper.querySelectorAll(`.letter`),
			translateX: [40, 0],
			rotateY: [-20, 0],
			opacity: [0, 1],
			// color: () => getRandomColor(),
			easing: 'easeOutExpo',
			duration: Duration / 3,
			delay: (el, i) => (delay || 0) + 250 + 25 * i,
		})

	}

	useEffect(animate)

	return <span ref={letters} className="letters">
		{text}
	</span>
})

export default LetterAnimation