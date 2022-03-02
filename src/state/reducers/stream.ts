import { SET_USER,  LOADING_USER } from '../types/auth'
import { SET_CURRENT_STREAM, UNSET_CURRENT_STREAM, SET_STREAMS, LOADING_STREAMS, ERROR_LOADING_STREAMS} from '../types/stream';

const initialState = {
	current_stream: {},
	streams: {},
	error: false,
	loading: false
}

export default function (state = initialState, action: any) {
	switch (action.type) {
		case SET_CURRENT_STREAM:
			return {
				...state,
				loading: true
			};
		case UNSET_CURRENT_STREAM:
			return initialState;
		case SET_STREAMS:
			return {
				authenticated: true,
				loading: false,
				streams : action.payload.streams,
				...action.payload
			};
		case LOADING_STREAMS:
			return {
				...state,
				loading: true
			};
	   case ERROR_LOADING_STREAMS:
			return {
				...state,
				loading: false,
				error : action.err
			};
		default:
			return state;
	}
}