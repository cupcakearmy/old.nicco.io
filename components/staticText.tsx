import React from 'react'

import '../styles/static.styl'



const StaticText: React.FC = ({ children }) => {
	return <div className={'static'}>
		<div className={'content'}>
			{children}
		</div>
	</div>
}

export default StaticText