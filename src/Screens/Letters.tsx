import React, { useEffect, useRef, useState } from 'react'
import LetterAnimation from '../Components/LetterAnimation'

type Pair = [string, string]

const pairs: Pair[] = [
	['visualize', 'create'],
	['invision', 'build'],
	['ideate', 'deploy'],
]

export const Duration = 4000

const Letters: React.FC = React.memo(() => {

	const [index, setIndex] = useState<number>(0)
	const wrapper = useRef<HTMLElement>(null)


	useEffect(() => {
		setTimeout(
			() => setIndex((index < pairs.length - 1) ? index + 1 : 0),
			Duration,
		)
	}, [index])

	return <span id={'letters-wrapper'} ref={wrapper}>
		<LetterAnimation text={pairs[index][0] + '.'}/>
		<LetterAnimation text={pairs[index][1] + '.'} delay={500}/>
	</span>
})

export default Letters