import React, { useState, useEffect } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import mediaplayer from './images/media_player.svg'




type WelcomeProps = {
	UI: any,
//	WelcomeUser: typeof WelcomeUser,
}

interface StateProps {

}

const Welcome: React.FC<WelcomeProps> = ({ UI, ...props }: WelcomeProps) => {
	const [userName, setUserName] = useState("d")

	useEffect(() => {
	}, [UI])

	
	return (
		<div className="container flex flex-col  h-screen w-screen">
			<div className="grid grid-cols-2">
				<div className='bg-white pl-20 pt-40 h-screen '>
					<div className='font-face-rb text-black text-4xl pt-4'>Welcome Cleon</div>
					

				</div>
				<div className='flex w-full'>
					<img className='px-20' src={mediaplayer} alt="Logo" />
				</div>
			</div>
		</div>
	)
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
	user: state.user,
	//UI: state.WelcomeUIReducer
});
//this map actions to our props in this functional component
const mapDispatchToProps: MapDispatchToProps<DispatchProps, WelcomeProps> = {
	//WelcomeUser
};


export default connect(mapStateToProps, mapDispatchToProps)(Welcome)

