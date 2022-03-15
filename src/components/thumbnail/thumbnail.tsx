// Create a functional component that fetches a image file from a url and displays it



import React, { useEffect, useState } from "react";

type ThumbnailProps = {
	thumbnailApiUrl: string;
	stream: object;
	className?: string;

}

const Thumbnail: React.FC<ThumbnailProps> = ({ className, thumbnailApiUrl, stream }: ThumbnailProps) => {
	const [img, setImg] = useState<string>();



	useEffect(() => {
		fetch(thumbnailApiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 'url': `${process.env.SRS_API_URL}${stream.streamCode}/${stream.streamKey}.m3u8` }),
		})
			.then(response => response.blob())
			.then(image => {
				// Create a local URL of that image
				const localUrl = URL.createObjectURL(image);
				setImg(localUrl);
			});
	}, [thumbnailApiUrl, stream]);

	return (
		<img src={img} className={className} alt="icons" />
	);
}

export default Thumbnail;