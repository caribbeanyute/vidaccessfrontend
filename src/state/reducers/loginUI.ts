import { LOADING_UI, CLEAR_ERRORS,LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_ERROR } from '../types/auth'


const initialState = {
	loading: false,
	loggedIn: false,
	error: false,
	errorStatus: undefined
}

export default function (state = initialState, action: any) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				loggedIn: true,
				loading: false,
				error: false,
				errorStatus: action.payload
			};
		case LOGIN_REQUEST:
			return {
				...state,
				loading: true,
				error: false,
				errorStatus: undefined
			};
		case LOGIN_ERROR:
			return {
				...state,
				loading: false,
				error: true,
				errorStatus: action.payload
			};

		case CLEAR_ERRORS:
			return {
				...state,
				loading : false,
				error : false,
				errorStatus: undefined
			};
		case LOADING_UI:
			return {
				...state,
				loading: true
			}
		
		default:
			return state;
	}
}
