import React from "react";
import VideoJS  from "./components/video/VideoJS";


const Index = () => {
	return <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
	<div className="sm:flex sm:items-center px-6 py-4">
	  <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt=""/>
	  <div className="text-center sm:text-left sm:flex-grow">
		<div className="mb-4">
		  <p className="text-xl leading-tight">Adam Wathan</p>
		  <p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
		</div>
		<div>
		  <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
		</div>
	  </div>
	</div>
  </div>;
  };

// TODO: SETUP types for this component
// TODO: Setup unit tests
const App: React.FC = (props) => {

  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'http://localhost:7002/live/movie.m3u8',
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

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };

  return (
    <>
    <Index></Index>

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

      <div>Rest of app here</div>
    </>
  );
};

export default App;