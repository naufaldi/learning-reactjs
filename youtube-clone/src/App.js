import React, { Component,useState,useEffect } from 'react';
import { Grid } from '@material-ui/core';
import {SearchBar,VideoDetail, VideoList} from './components/'

import youtube from './api/youtube';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideos, setSelectedVideos] = useState(null);

	const handleSubmit = async (searchTerm) => {
		const response = await youtube.get('search',
		 {
			params: {
				part:'snippet',
				maxResults: 5,
				key: 'AIzaSyDWmnvVjP0yXWbA806BxYA8eEjGezUuCho',
				q: searchTerm,
			}
			});
		console.log(response)
		setVideos(response.data.items)
		setSelectedVideos(response.data.items[0])
	}

	return (
		<Grid style={{ justifyContent: "center" }} container spacing={10}>
			<Grid item xs={11}>
				<Grid container spacing={10}>
				<Grid item xs={12}>
					{/* Search Bar */}
					<SearchBar onFormSubmit={handleSubmit}  />
				</Grid>
				<Grid item xs={8}>
					{/* Video */}
					<VideoDetail video={selectedVideos}/>
				</Grid>
				<Grid item xs={4}>
					{/* Sidebar */}
					<VideoList videos={videos} onVideoSelect={setSelectedVideos} />
				</Grid>
				</Grid>

			</Grid>
		</Grid>
	);

}


export default App;
