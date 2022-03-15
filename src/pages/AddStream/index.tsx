import React, { useState, useEffect } from 'react'
import { connect, MapDispatchToProps, MapStateToProps, useDispatch, useSelector } from 'react-redux';
import Form from '../../components/form/form';

import RootState from "state/reducers/index"
import { getStreams } from '../../state/actions/streamActions';


type AddStreamProps = {
	UI?: any,
	//	WelcomeUser: typeof WelcomeUser,
}


const AddStream: React.FC<AddStreamProps> = ({ UI, ...props }: AddStreamProps) => {
	const dispatch = useDispatch();
	const stream = useSelector((state: RootState) => state.stream);

	useEffect(() => {
		dispatch(getStreams());
	}, [dispatch])




	return (
		<div className="0">
			<Form />
		</div>
	)
}

//this map the states to our props in this functional component



export default AddStream

