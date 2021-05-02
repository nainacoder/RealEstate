import './Appointment.css';
import Appointment from './Appointment';
import store from '../Store'


function Main() {
	return (
		<div>
			<Appointment  store={store}/>
		</div>
	);
}
export default Main;
