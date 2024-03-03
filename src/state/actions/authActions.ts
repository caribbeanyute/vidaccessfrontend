import axios from '../../utils/AxiosClient';
import { SET_USER, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER, LOGIN_SUCCESS, LOGOUT_ERROR, LOGIN_ERROR, LOGIN_REQUEST } from '../types/auth'
import customHistory from '../../utils/historyObj';



import LocalStorageService from '../../utils/LocalStorageService';
import { useNavigate } from 'react-router-dom';
const localStorageService = LocalStorageService.getService();



export const loginUser = (userData: any) => (dispatch: any) => {
	dispatch({ type: CLEAR_ERRORS })
	dispatch({ type: LOGIN_REQUEST})
	dispatch({ type: LOADING_UI })



	axios.post('api/auth/login', userData)
		.then((res) => {
			const token = res.data["jwt-token"];
			localStorageService.setToken({ access_token: token, refresh_token: null });


			dispatch(getUserData());
			dispatch({ type: LOGIN_SUCCESS });
			//redirecting to index page after login success
			//customHistory.push('/');
			//window.location.href = '/';
			
		})
		.catch((err) => {
			if (err.response) {
				// Request made and server responded
				//console.log(err.response);
		

				dispatch({
					type: LOGIN_ERROR,
					payload: (err.response.status)
				});
			} else if (err.request) {
				// The request was made but no response was received
				//console.log(err.request);
				dispatch({
					type: LOGIN_ERROR,
					payload: (err.request.status)
				});
			} else {
				// Something happened in setting up the request that triggered an Error
				//console.log('Error', err.message);
				/*dispatch({
					type: LOGIN_ERROR,
					payload: undefined
				});*/
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
	localStorageService.clearToken();
	dispatch({
		type: SET_UNAUTHENTICATED
	});
	
	window.location.href = '/login';//redirect to login page
};