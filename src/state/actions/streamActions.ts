import { LOADING_STREAMS,SET_STREAMS,ERROR_LOADING_STREAMS } from "../types/stream";
import axios from "axios";

export const getStreams = () => (dispatch: any) => {
	dispatch({ type: LOADING_STREAMS });
	axios.get('/stream')
		.then(res => {
			console.log('user data', res.data);
			dispatch({
				type: SET_STREAMS,
				payload: res.data
			});
		}).catch(err => {
			console.log(err);
			dispatch({
				type: ERROR_LOADING_STREAMS,
				err: err
			})
		});
}