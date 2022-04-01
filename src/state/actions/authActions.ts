import axios from 'axios';
import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER } from '../types/auth'
import customHistory from '../../utils/history';


export const loginUser = (userData: any) => (dispatch: any) => {
	dispatch({ type: CLEAR_ERRORS })
	dispatch({ type: LOADING_UI })

	axios.post('api/auth/login', userData, {timeout:5000})
		.then((res) => {
			const token = `Bearer ${res.data["jwt-token"]}`;
			localStorage.setItem('token', token);//setting token to local storage
			axios.defaults.headers.common['Authorization'] = token; //setting authorize token to header in axios
			dispatch(getUserData());
			//dispatch({ type: CLEAR_ERRORS });
			console.log('success');
			//redirecting to index page after login success
			customHistory.push('/');
		})
		.catch((err) => {
			if (err.response) {
				// Request made and server responded
				console.log(err.response.data);
				console.log(err.response.status);
				console.log(err.response.headers);

				dispatch({
					type: SET_ERRORS,
					payload: (err.respsonse.status)
				});
			} else if (err.request) {
				// The request was made but no response was received
				console.log(err.request);
				dispatch({
					type: SET_ERRORS,
					payload: (err.request.status)
				});
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', err.message);
			}

		});
}
//for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
	dispatch({ type: LOADING_USER });
	axios.get('api/user/info')
		.then(res => {
			console.log('user data', res.data);
			dispatch({
				type: SET_USER,
				payload: res.data
			});
		}).catch(err => {
			console.log(err);
		});
}
export const logoutUser = () => (dispatch: any) => {
	console.log('logout');
	localStorage.removeItem('token');
	delete axios.defaults.headers.common['Authorization']
	dispatch({
		type: SET_UNAUTHENTICATED
	});
	window.location.href = '/login';//redirect to login page
};