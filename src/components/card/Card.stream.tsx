import React, { FC, useState } from 'react';
import { connect, MapDispatchToProps, MapStateToProps, useDispatch, useSelector } from 'react-redux';
import { getStreams, setCurrentStream,setVideoSrc } from '../../state/actions/streamActions';


type CardStreamProps = {
  stream: any,
  isLive: boolean,
  
}


const CardStream: FC<CardStreamProps> = ({ stream, isLive}: CardStreamProps) => {
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
    console.log("celon")
		dispatch(setCurrentStream(stream));
    dispatch(setVideoSrc());

	}


  return (

    <div className={`max-w-sm w-72 h-48 rounded overflow-hidden shadow-lg 
                     ${streamError ? 'border-solid border-2 border-red-400':''}`}
                     onClick={setStream} >
      
      <div className="relative z-0 w-full h-2/3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <span className={`absolute z-10 right-0 top-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 ${isLive ? 'bg-red-600' : 'bg-slate-300'} rounded-full`}>{ isLive ? 'LIVE': 'DOWN'}</span>
      {isHovering ? "Shhhhhh your were'nt meant to see this" : <img className="h-full w-full relative" src="https://api.lorem.space/image/album?w=40&h=10" alt="Sunset in the mountains" />
      }
      
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-md mb-2">{stream.streamTitle}</div>
        <p className="text-gray-700 text-base">
          
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        
      </div>
    </div>
  );
};

export default CardStream;