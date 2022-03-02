import React, { useState, useEffect } from 'react'
import { connect, MapDispatchToProps, MapStateToProps, useDispatch, useSelector } from 'react-redux';
import { getStreams } from '../../state/actions/streamActions';

import mediaplayer from './images/media_player.svg'

import CardStream from 'components/card/Card.stream';




type WelcomeProps = {
	UI: any,
	//	WelcomeUser: typeof WelcomeUser,
}

interface StateProps {

}

const Welcome: React.FC<WelcomeProps> = ({ UI, ...props }: WelcomeProps) => {
	const dispatch = useDispatch();
	const stream = useSelector((state) => state.stream);

	useEffect(() => {
		dispatch(getStreams());
	}, [dispatch])


	return (
		<div className="container flex flex-col">
			<div className='font-face-rb text-black text-4xl pt-0'>Welcome Cleon</div>
			<div className="grid grid-row-2">
				addStream button goes here >>>>>>>>>>>>>>>>>>>>

				<div className='flex w-full'>
					<CardStream />
				</div>
			</div>
		</div>
	)
}

//this map the states to our props in this functional component



export default Welcome

