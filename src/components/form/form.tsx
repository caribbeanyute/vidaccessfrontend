import React, { FC, useState } from 'react';
import { connect, MapDispatchToProps, MapStateToProps, useDispatch, useSelector } from 'react-redux';
import { getStreams, setCurrentStream, setVideoSrc } from '../../state/actions/streamActions';
import AddButton from '../../components/button/AddButton';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

type FormProps = {
	stream: any,
	isLive: boolean,

}

const StreamSchema = Yup.object().shape({
	streamTitle: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	streamDescription: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	streamIdentifier: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	streamType: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	//email: Yup.string().email('Invalid email').required('Required'),
});



const FormW: FC<FormProps> = ({ stream, isLive }: FormProps) => {
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const [value, setValue] = useState<string>("default");
	const [streamError, setStreamError] = useState<boolean>(false);
	const dispatch = useDispatch();
	const inputHighlight = "focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none transition ease-in-out";


	const setStream = () => {

		dispatch(setCurrentStream(stream));
		dispatch(setVideoSrc());

	}

	return (
		<div className="w-full max-w-md mx-auto mt-9">
			<Formik
				initialValues={{ streamTitle: '', streamDescription: '', streamKey: '', streamIdentifier: '' }}
				validationSchema={StreamSchema}
				onSubmit={(values, { setSubmitting }) => { console.log(values); setSubmitting(false); }}

			>
				{({ errors, touched, submitForm }) => (
					<Form>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streamTitle">
								Stream Title
							</label>
							<Field className={`shadow appearance-none border rounded ${errors.streamTitle ? "border-red-500" : ""} w-full py-2 px-3 text-gray-700 leading-tight ${inputHighlight}`} name="streamTitle" type="text" placeholder="Stream" />
							{errors.streamTitle && touched.streamTitle ? (
								<p className="text-red-500 text-xs italic">{errors.streamTitle}</p>
							) : null}
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streamDescription">
								Stream Description
							</label>
							<Field as="textarea" className={`shadow appearance-none border rounded ${errors.streamDescription ? "border-red-500" : ""} w-full py-2 px-3 text-gray-700 leading-tight ${inputHighlight} `} name="streamDescription" placeholder="This stream is about..." />
							{errors.streamDescription && touched.streamDescription ? (
								<p className="text-red-500 text-xs italic">{errors.streamDescription}</p>
							) : null}
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
								Stream Indentifier
							</label>
							<Field className={`shadow appearance-none border rounded ${errors.streamIdentifier ? "border-red-500" : ""} w-full py-2 px-3 text-gray-700 leading-tight ${inputHighlight} `} name="streamIdentifier" type="text" placeholder="Indentifier" />
							{errors.streamIdentifier && touched.streamIdentifier ? (
								<p className="text-red-500 text-xs italic">{errors.streamIdentifier}</p>
							) : null}
						</div>
						<div className="mb-6">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
								Stream Key
							</label>
							<Field className={`shadow appearance-none border rounded ${errors.streamKey ? "border-red-500" : ""} w-full py-2 px-3 text-gray-700 leading-tight ${inputHighlight} `} name="streamKey" type="text" placeholder="Key" />
							{errors.streamKey && touched.streamKey ? (
								<p className="text-red-500 text-xs italic">{errors.streamKey}</p>
							) : null}
						</div>
						<div className="flex items-center justify-between">
							<AddButton label='Add Stream' />
						</div>
					</Form>
				)}
			</Formik>
			<p className="text-center text-gray-500 text-xs">
				{process.env.SRS_API_URL}
			</p>
		</div>
	);
};

export default FormW;