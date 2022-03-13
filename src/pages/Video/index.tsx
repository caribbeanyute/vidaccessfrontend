import React from "react";
import VideoJS  from "components/video/VideoJS";
import { useDispatch, useSelector} from 'react-redux'
import RootState from "state/reducers/index";
import HLS from "components/video/HLS";


// TODO: SETUP types for this component
// TODO: Setup unit tests
const VideoPage: React.FC = (props) => {
  const dispatch = useDispatch();
  const videoJSConfig = useSelector((state: RootState) => state.videoJS);

  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'http://192.168.1.101:31199/live/flow/intelcore.m3u8',
      type: 'application/x-mpegURL'
    }]
  }



  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };



  return (
    <>
      <VideoJS options={videoJSConfig} onReady={handlePlayerReady} />
    </>
  );
};

export default VideoPage;