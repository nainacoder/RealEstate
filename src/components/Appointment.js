import React from 'react'
import './Appointment.css';
import axios from 'axios';
import { appFullName, appPassword, appEmail, appPhoneNumber } from '../Action'
import { connect } from "react-redux";

function Appointment(props) {
	
	const handelChangeUserName = (text) => {
		props.appFullName(text.target.value);
	};
	const handelChangeUserEmail = (text) => {
		props.appEmail(text.target.value);
	};
	const handelChangeUserPassword = (text) => {
		props.appPassword(text.target.value);
	};
	const handelChangeUserMobile = (text) => {
		props.appPhoneNumber(text.target.value);
	};
	const fixOnclick = () => {
		let obj = {
			FullName: props.redu.appFullName,
			PhoneNumber: props.redu.appPhoneNumber,
			Email: props.redu.appEmail,
			Password: props.redu.appPassword,
			
		};
		axios
			.post('http://localhost:49861/api/Appointment', obj, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((response) => {});
			}
	return (
		<div>
			<div className='BaseContainerr' ref={props.containerRef}>
				<div className='CostumHeader'>Appoinment</div>
				<div className='Content'>
					<div className='Image'>
					</div>
					<div className = "msg"></div>
					<label>FullName :</label>
					<input
						required
						type='text'
						placeholder='fullname'
						value={props.redu.appFullName}
						onChange={(text) => {
							handelChangeUserName(text);
						}}
					></input>
					<label>Phone Number &nbsp;:</label>
					<input
						className='phone'
						type='tel'
						pattern='[+]{1}[0-9]{11,14}'
						placeholder='1234-456-789'
						value={props.redu.appPhoneNumber}
						onChange={(text) => {
							handelChangeUserMobile(text);
						}}
					></input>
					<label>Email :</label>
					<input
						type='email'
						placeholder='exapmle@gmail.com'
						value={props.redu.appEmail}
						onChange={(text) => {
							handelChangeUserEmail(text);
						}}
						required
					></input>
					<label>Password &nbsp;:</label>
					<input
						type='password'
						placeholder='Password'
						value={props.redu.appPassword}
						onChange={(text) => {
							handelChangeUserPassword(text);
						}}
						required
					></input>
					
				</div>
				<div className='Footer'>
					<button className='butn' type='Button' onClick={fixOnclick}>
						Fix Appointment
				</button>
				</div>
			</div>
		</div>
	)
};
class mission extends React.Component{
	render(){
		return <Appointment {...this.props} />
	}
}
export const mapStateToProps = store => {
	return {
	redu:store.redu
	};
};
export const mapDispatchToProps = dispatch => {
	return {
		appFullName: (Name) => {
			dispatch(appFullName(Name))
		} ,
		appPassword: (Password) => {
			dispatch(appPassword(Password))
		},
		appEmail: (Email) => {
			dispatch(appEmail(Email))
		}, 
		appPhoneNumber: (MOBILE) => {
			dispatch(appPhoneNumber(MOBILE))
		}
	}
};
export default connect(mapStateToProps,mapDispatchToProps)(mission)
