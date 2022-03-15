import React, { FC, useState } from 'react';
import { connect, MapDispatchToProps, MapStateToProps, useDispatch, useSelector } from 'react-redux';
import { getStreams, setCurrentStream, setVideoSrc } from '../../state/actions/streamActions';
import { Play } from 'react-feather';
import Thumbnail from '../../components/thumbnail/thumbnail';


type CardStreamProps = {
  stream: any,
  isLive: boolean,

}


const CardStream: FC<CardStreamProps> = ({ stream, isLive }: CardStreamProps) => {
  const [streamError, setStreamError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleMouseOut = () => {
    setIsHovering(false);
    // onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
  };

  const setStream = () => {

    dispatch(setCurrentStream(stream));
    dispatch(setVideoSrc());

  }

  <img className="h-full w-full relative" src="https://api.lorem.space/image/album?w=40&h=10" alt="Sunset in the mountains" />
  return (

    <div className={`max-w-sm w-72 h-48 rounded overflow-hidden shadow-lg 
                     ${streamError ? 'border-solid border-2 border-red-400' : ''}`}
      onClick={setStream} >

      <div className="relative w-full h-2/3" >
        <span className={`absolute right-0 top-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white ${isLive ? 'bg-red-600' : 'bg-black'} rounded-full`}>{isLive ? 'LIVE' : 'DOWN'}</span>
        {
          isLive ?
          (<Thumbnail className='h-full w-full hover:hidden' thumbnailApiUrl='/thumbnail/' stream={stream} />):
          <div className='pt-2 absolute top-3 left-0'>
          {`Stream not live, to begin publish to ${process.env.SRS_PUBLISH_URL}${stream.streamCode}`}
          <div className='opacity-0 hover:opacity-100'>
            {`${stream.streamKey}`}
          </div>
          </div>
        }

      </div>
      <div className="px-6 py-4 flex flex-row">
        <div className="font-bold text-md mb-2">{stream.streamTitle}</div>
        {isLive ? (
          <a className="bg-green-500 hover:bg-green-700 text-white text-center  text-sm py-2 px-4 rounded-full flex flex-row ml-auto align-items-center">
            <Play className='mr-auto pr-1' size={20} onClick={setStream}></Play>
            <div className=''>Watch</div>
          </a>) : <div className='ml-auto'>"not live"</div>
        }
      </div>
    </div>
  );
};

export default CardStream;