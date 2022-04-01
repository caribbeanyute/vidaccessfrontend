import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS } from '../types/auth'

const initialState = {
	loading: false,
	error: false,
	errorStatus: undefined
}

export default function (state = initialState, action: any) {
	switch (action.type) {
		case SET_ERRORS:
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
