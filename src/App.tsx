import React from 'react'
import AnimatedBackground from './Components/AnimatedBackground'
import Cursor from './Components/Cursor'
import Letters from './Screens/Letters'
import { useMousePosition } from './util'

export const Duration = 4000

const App: React.FC = () => {

	const mouse = useMousePosition()

	const convertToDeg = (current: number, factor: number) => `${(.5 - current) * factor}deg`

	return <div id="App">
		<section id={'letters-container'} style={{
			transform: `rotateX(${convertToDeg(mouse.relative.y, 2)}) rotateY(${convertToDeg(mouse.relative.x, .5)})`,
		}}>
			<h1>
				<Letters/>
			</h1>
		</section>

		<div id={'bg'}>
			<AnimatedBackground/>
		</div>

		<Cursor/>

		<footer>
			<span>dev.</span>
			<br/>
			<span>say <a href={'mailto:hi@nicco.io'}>hi@nicco.io</a></span>
		</footer>
	</div>
}

export default App