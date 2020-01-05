import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import '../styles/fonts.css'
import '../styles/global.styl'



export default class extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<React.Fragment>
				<Head>
					<title>Alessandra Marten</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
				</Head>
				<Component {...pageProps} />
			</React.Fragment>
		)
	}
}