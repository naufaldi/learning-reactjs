import React, { Component } from 'react';
import './App.css';

function isSearched(searchTerm) {
	return function(item) {
		return item.title.toLowerCase().includes(searchTerm.toLowerCase());
	};
}
const DEFAILT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAILT_QUERY}`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: null,
			searchTerm: DEFAILT_QUERY
		};
		this.setSearchTopStories = this.setSearchTopStories.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onDismiss = this.onDismiss.bind(this);
	}

	setSearchTopStories(result){
		this.setState({
			result
		})
	}
	componentDidMount(){
		const { searchTerm } = this.state;
		fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
		.then( response => response.json())
		.then(result => this.setSearchTopStories(result))
		.catch(error => error)
	}

	render() {
		const largeColumn = {
			width: '40%'
		};
		const midColumn = {
			width: '30%'
		};
		const smallColumn = {
			width: '10%'
		};

		const { searchTerm, list } = this.state;
		return (
			<div className="page">
				<div className="interactions">
					<Search value={searchTerm} onChange={this.onSearchChange}>
						Search
					</Search>
				</div>

				<Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
			</div>
		);
	}
}

const Search = ({ value, onChange, children }) => {
	return (
		<form action="">
			{children}
			<input type="text" value={value} onChange={onChange} />
		</form>
	);
};

const Table = ({ list, pattern, onDismiss }) => (
	<div className="table">
		{list.filter(isSearched(pattern)).map((item) => (
			<div key={item.objectID} className="table-row">
				<span style={{ width: '40%' }}>
					<a href={item.url}>{item.title}</a>
				</span>
				<span style={{ width: '30%' }}>{item.author}</span>
				<span style={{ width: '10%' }}>{item.num_comments}</span>
				<span style={{ width: '10%' }}>{item.points}</span>
				<span style={{ width: '10%' }}>
					<Button onClick={() => onDismiss(item.objectID)} className="button-inline">
						Dismiss
					</Button>
				</span>
			</div>
		))}
	</div>
);

class Button extends Component {
	render() {
		const { onClick, className = '', children } = this.props;
		return (
			<button onClick={onClick} className={className} type="button">
				{children}
			</button>
		);
	}
}

export default App;
