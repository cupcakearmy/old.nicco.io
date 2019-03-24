import React, { Suspense } from 'react'


const Suspend: (C: React.ComponentType) => React.ComponentType = (C) => () => {
	return <Suspense fallback={<span>...</span>} children={<C/>}/>
}

export default Suspend