import {APP_FULLNAME,APP_PHONENUMBER,APP_EMAIL,APP_PASSWORD,APP_CONFIRMPASSWORD} from '../Action';

const initialState = {
	appFullName:"",
	appPhoneNumber: '',
	appEmail: '',
	appPassword: '',
	confirmPassword: '',

};
export default function reducer(state = initialState, action) {
    
    switch (action.type) {
        case APP_FULLNAME:
            return{
                ...state,
                appFullName: action.payload,
            };
        case APP_PHONENUMBER:
            return{
                ...state,
                appPhoneNumber: action.payload,
            };
        case APP_EMAIL:
            return{
                ...state,
                appEmail: action.payload
            };
        case APP_PASSWORD:
            return{
                ...state,
                appPassword: action.payload
            };
        case APP_CONFIRMPASSWORD:
            return {
                ...state,
                appConfirmPassword: action.payload
            };
        default:
            return state;
		}
	}