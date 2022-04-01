import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import CardStream from 'components/card/Card.stream';
import AddButton from 'components/button/AddButton';


import RootState from "state/reducers/index"
import { getStreams } from '../../state/actions/streamActions';
import { Link } from 'react-router-dom';
import routes from '../../utils/routes';


type WelcomeProps = {
	//  UI: any,
	//	WelcomeUser: typeof WelcomeUser,
}


const Welcome: React.FC<WelcomeProps> = ({ ...props }: WelcomeProps) => {
	const dispatch = useDispatch();
	const stream = useSelector((state: RootState) => state.stream);

	useEffect(() => {
		dispatch(getStreams());
	}, [dispatch])




	return (
		<div className="flex flex-col mt-10 px-6 h-5/6 rounded border-dashed border-2 border-gray-300">
			<div className='flex flex-row justify-items-center mt-2'>
				<div className='font-face-rb text-black text-xl md:text-2xl place-self-start'>Streams</div>
				<Link to={routes.addStream} className='ml-auto'>
					<AddButton className="" label='Create Stream' />
				</Link>
			</div>
			{stream.error ? <div className='text-red-500'>{"Failed to load Streams"}</div> : (
				<div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center">
					{
						stream && stream.streams.map((stream, index) => (

							<CardStream className="user pt-3" key={index} isLive={stream.live} stream={stream} />
						))
					}

				</div>)

			}

		</div>
	)
}

//this map the states to our props in this functional component



export default Welcome

