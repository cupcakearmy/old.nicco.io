import React from 'react'
import dynamic from 'next/dynamic'

import AnimatedBackground from '../components/AnimatedBackground'
import Parallax from '../components/Parallax'
import Letters from '../screens/Letters'
import { useInnerWindowSize } from '../utils/hooks'

import '../styles/Home.styl'



const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false })

const Home: React.FC = () => {

	const size = useInnerWindowSize()

	return <div id="home" style={size}>
		<header className={'fixed'}>
			<span><a target='_blank' href={'https://blog.nicco.io'}>blog</a></span>
			<span><a target='_blank' href={'https://github.com/cupcakearmy'}>github</a></span>
		</header>

		<Parallax>
			<section id={'letters-container'}>
				<h1>
					<Letters />
				</h1>
			</section>
		</Parallax>

		<div id={'bg'}>
			<AnimatedBackground />
		</div>

		<Cursor />

		<footer className={'fixed'}>
			<span>developer.</span>
			<br />
			<span><a href={'mailto:hi@nicco.io'}>say <b>hi@nicco.io</b></a></span>
			<br />
			<span>
				<small>
					<a href={'/privacy'}>privacy</a> - <a href={'/tos'}>terms of service</a>
				</small>
			</span>
		</footer>
	</div>
}

export default Home