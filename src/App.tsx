import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Suspend from './Components/Suspend'

const Home = React.lazy(() => import('./Screens/Home'))
const Privacy = React.lazy(() => import('./Screens/Privacy'))
const TOS = React.lazy(() => import('./Screens/TermsOfService'))

export const Duration = 4000

const App: React.FC = () => {

	return <Router>
		<Switch>
			<Route exact path={'/privacy'} component={Suspend(Privacy)}/>
			<Route exact path={'/terms-of-service'} component={Suspend(TOS)}/>
			<Route component={Suspend(Home)}/>
		</Switch>
	</Router>
}

export default App