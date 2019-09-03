import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Youtube from './api/youtube';

export default class App extends Component {
	render() {
		return (
			<Grid justify="center" container spacing={16}>
				<Grid item xs={12}>
					<Grid item xs={12}>
						{/* Search Bar */}
					</Grid>
					<Grid item xs={8}>
						{/* Video */}
					</Grid>
					<Grid item xs={4}>
						{/* Sidebar */}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
