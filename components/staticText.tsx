import React from 'react'

import '../styles/Static.styl'



const StaticText: React.FC = ({ children }) => {
	return <div className={'static'}>
		<div className={'content'}>
			{children}
		</div>
	</div>
}

export default StaticText