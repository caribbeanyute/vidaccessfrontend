
import { UNSET_CURRENT_STREAM} from '../types/stream';

const initialState = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
      type: 'application/x-mpegURL'
    }]
  }

export default function (state = initialState, action: any) {
	switch (action.type) {
		case 'ADD_SOURCE':
			return {
				...state,
				sources: [action.payload]
			};
		case UNSET_CURRENT_STREAM:
			return initialState;
		case 'REMOVE_SOURCE':
			return {
                ...state,
				sources : [],
			};
		default:
			return state;
	}
}