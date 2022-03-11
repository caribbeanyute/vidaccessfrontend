import { LOADING_STREAMS,SET_STREAMS,ERROR_LOADING_STREAMS,SET_CURRENT_STREAM } from "../types/stream";
import axios from "axios";


export const setCurrentStream = (currentStream) => (dispatch: any) => {
	dispatch({
		type: SET_CURRENT_STREAM,
		payload: currentStream
	})

}

export const setVideoSrc = () => (dispatch:any, getState:any)=>{
	const {current_stream} = getState().stream;
	const {streamCode,streamKey} = current_stream;

	//http://localhost:8080/live/livestream.m3u8
	
	dispatch({
		type: 'ADD_SOURCE',
		payload: {
			src: `rtmp://${'192.168.1.101'}:${'30787'}/${streamCode}/${streamKey}`,
			type: 'application/x-mpegURL'
		}
	})

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