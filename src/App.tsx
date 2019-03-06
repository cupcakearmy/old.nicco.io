import React from 'react'

import AnimatedBackground from './Components/AnimatedBackground'
import Cursor from './Components/Cursor'
import Parallax from './Components/Parallax'
import Letters from './Screens/Letters'

export const Duration = 4000

const App: React.FC = () => {

	return <div id="App">
		<Parallax>
			<section id={'letters-container'}>
				<h1>
					<Letters/>
				</h1>
			</section>
		</Parallax>

		<div id={'bg'}>
			<AnimatedBackground/>
		</div>

		<Cursor/>

		<footer>
			<span>developer.</span>
			<br/>
			<span>say <a href={'mailto:hi@nicco.io'}>hi@nicco.io</a></span>
		</footer>
	</div>
}

export default App