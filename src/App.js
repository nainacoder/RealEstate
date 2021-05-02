import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Appointment from './components/Appointment';
import SearchTable from './components/SearchTable';
import Main from './components/Main';


function App() {
	return (
		
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/appointment" exact component={Appointment} />
					<Route path="/search" exact component={SearchTable} />
					<Route path="/meeting" exact component={Main} />
				</Switch>
			</Router>
		
	);
}

export default App;
