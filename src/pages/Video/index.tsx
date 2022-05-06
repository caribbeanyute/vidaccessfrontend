import React from "react";
import VideoJS from "components/video/VideoJS";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import RootState from "state/reducers/index";
import HLS from "components/video/HLS";

import { ChevronLeft, ArrowRight } from 'react-feather';
import ControlBar from "../../components/controlbar";
import routes from "../../utils/routes";


// TODO: SETUP types for this component
// TODO: Setup unit tests
const VideoPage: React.FC = (props) => {
  const dispatch = useDispatch();
  const videoJSConfig = useSelector((state: RootState) => state.videoJS);
  const currentStream = useSelector((state: RootState) => state.stream.current_stream);
  console.log(currentStream);

  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    aspectRatio: "16:9",
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



  /*return (
    <>
      <VideoJS options={videoJSConfig} onReady={handlePlayerReady} />
    </>
  );*/

  var title = currentStream.streamTitle ? currentStream.streamTitle : 'TestVideo'

  return (
    <div className="flex pt-2 w-full h-full ">
      <div className="w-full md:w-9/12 pl-5 lg:pl-10 pr-5 bg-slate-50">
        <div className="flex flex-row place-items-center mt-5">
          <Link to={routes.home} type="button" className="inline-flex items-center cursor-pointer p-2 rounded-lg border border-gray-300 h-15 w-15" aria-controls="mobile-menu-3" aria-expanded="false">
            <ChevronLeft size={15} className="inline text-black" />
          </Link>
          <div className="font-medium text-gray-900 text-sm mx-2">
            Streams
          </div>
          <ArrowRight size={14} className=" text-gray-500" />
          <div className="text-gray-500 text-sm mx-2"> {title} </div>
        </div>
        <div className="videoContainer mt-5 h-128 w-100">
          <VideoJS options={videoJSConfig} onReady={handlePlayerReady} />
        </div>
        <div className="streamInfo mt-5">
          <div className="flex flex-row justify-items-center">
            <div className="font-medium text-gray-900 text-xl mt-5">
            {title}
            </div>
          </div>
          <div className="streamDescription">
          { currentStream.streamDescription ? currentStream.streamDescription : 'This is a test description'}
            </div>
        </div>

      </div>
      <div className="hidden lg:block">
        {
        // <ControlBar/>
        }
      </div>
    </div>
  );
};

export default VideoPage;