
export const APP_FULLNAME = 'APP_FULLNAME';
export const APP_PHONENUMBER= 'APP_PHONENUMBER';
export const APP_EMAIL = 'APP_EMAIL';
export const APP_PASSWORD = 'APP_PASSWORD';
export const APP_CONFIRMPASSWORD = 'APP_CONFIRMPASSWORD';


export const appFullName = (fullName) => {
	return {
		type: APP_FULLNAME,
		payload: fullName,
	};
};
export const appPhoneNumber = (phoneNumber) => {
	return {
		type: APP_PHONENUMBER,
		payload: phoneNumber,
	};
};
export const appEmail = (email) => {
	return {
		type: APP_EMAIL,
		payload: email,
	};
};
export const appPassword = (password) => {
	return {
		type: APP_PASSWORD,
		payload: password,
	};
};

export const appConfirmPassword = (confirmPassword) => {
	return {
		type: APP_CONFIRMPASSWORD,
		payload: confirmPassword,
	};
};
