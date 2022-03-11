import React, { useState, useEffect } from 'react'
import { connect, MapDispatchToProps, MapStateToProps, useDispatch, useSelector } from 'react-redux';
import mediaplayer from './images/media_player.svg'

import CardStream from 'components/card/Card.stream';
import AddButton from 'components/button/AddButton';


import RootState from "state/reducers/index"
import { getStreams } from '../../state/actions/streamActions';


type WelcomeProps = {
	UI: any,
	//	WelcomeUser: typeof WelcomeUser,
}


const Welcome: React.FC<WelcomeProps> = ({ UI, ...props }: WelcomeProps) => {
	const dispatch = useDispatch();
	const stream = useSelector((state: RootState) => state.stream);

	useEffect(() => {
		dispatch(getStreams());
	}, [dispatch])




	return (
		<div className="container flex flex-col">
			<div className='flex flex-row justify-items-center mt-2'>
				<div className='font-face-rb text-black md:text-1 text-4xl pt-0 place-self-start'>My Streams</div>
				<AddButton className="ml-auto" label='Create Stream' ></AddButton>
			</div>
			<div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center">

				{
					stream.streams.map((stream, index) =>(
						
						<CardStream className="user pt-3" key={index} isLive={stream.live} stream={stream} />
					))
				}


			</div>
		</div>
	)
}

//this map the states to our props in this functional component



export default Welcome

