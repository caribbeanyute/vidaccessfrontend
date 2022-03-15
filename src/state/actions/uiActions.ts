
import { TOGGLE_SIDEBAR } from '../types/ui';


export const toggleSidebar = () => (dispatch: any) => {
	console.log('toggleSidebar');
	dispatch({ type: TOGGLE_SIDEBAR });
	
}