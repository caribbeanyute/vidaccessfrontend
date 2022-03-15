import { LOADING_STREAMS,SET_STREAMS,ERROR_LOADING_STREAMS,SET_CURRENT_STREAM } from "../types/stream";
import axios from "axios";
import customHistory from "../../utils/history";
import routes from "../../utils/routes";



export const setCurrentStream = (currentStream: any) => (dispatch: any) => {
	dispatch({
		type: SET_CURRENT_STREAM,
		payload: currentStream
	})

}

export const setVideoSrc = () => (dispatch:any, getState:any ) => {
	const {current_stream} = getState().stream;
	const {streamCode,streamKey} = current_stream;

	//http://localhost:8080/live/livestream.m3u8
	
	dispatch({
		type: 'ADD_SOURCE',
		payload: {
			src: `${process.env.SRS_API_URL}${streamCode}/${streamKey}.m3u8`,
			type: 'application/x-mpegURL'
		}
	})

	customHistory.push(routes.video)

}
export const getStreams = () => (dispatch: any) => {
	dispatch({ type: LOADING_STREAMS });
	axios.get('/stream/streams')
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