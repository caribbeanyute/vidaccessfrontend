import { TOGGLE_SIDEBAR } from '../types/ui'

const initialState = {
	sideBarVisibility: false,
}

export default function (state = initialState, action: any) {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return {
				...state,
				sideBarVisibility: !(state.sideBarVisibility),
				errors: action.payload
			};
		default:
			return state;
	}
}
