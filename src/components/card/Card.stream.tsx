import React, { FC, useState } from 'react';
import { connect, MapDispatchToProps, MapStateToProps, useDispatch, useSelector } from 'react-redux';
import { getStreams, setCurrentStream, setVideoSrc } from '../../state/actions/streamActions';
import { Play } from 'react-feather';


type CardStreamProps = {
  stream: any,
  isLive: boolean,

}


const CardStream: FC<CardStreamProps> = ({ stream, isLive }: CardStreamProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [value, setValue] = useState<string>("default");
  const [streamError, setStreamError] = useState<boolean>(false);
  const dispatch = useDispatch();


  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const setStream = () => {

    dispatch(setCurrentStream(stream));
    dispatch(setVideoSrc());

  }


  return (

    <div className={`max-w-sm w-72 h-48 rounded overflow-hidden shadow-lg 
                     ${streamError ? 'border-solid border-2 border-red-400' : ''}`}
      onClick={setStream} >

      <div className="relative z-0 w-full h-2/3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <span className={`absolute z-10 right-0 top-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white ${isLive ? 'bg-red-600' : 'bg-black'} rounded-full`}>{isLive ? 'LIVE' : 'DOWN'}</span>
        {isHovering ? stream.streamDescription : (
                          <img className="h-full w-full relative" src="https://api.lorem.space/image/album?w=40&h=10" alt="Sunset in the mountains" />)
        }

      </div>
      <div className="px-6 py-4 flex flex-row">
        <div className="font-bold text-md mb-2">{stream.streamTitle}</div>
        { isLive ? (
        <a className="bg-green-500 hover:bg-green-700 text-white text-center  text-sm py-2 px-4 rounded-full flex flex-row ml-auto align-items-center">
          <Play className='mr-auto pr-1' size={20} onClick={setStream}></Play>
          <div className=''>Watch</div>
        </a>): <div className='ml-auto'>"not live"</div>
        }
      </div>
    </div>
  );
};

export default CardStream;