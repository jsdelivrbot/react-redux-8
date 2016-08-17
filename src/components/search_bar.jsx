import React, {Component} from 'react';

// define a new class search bar and give it react functionality 
class SearchBar extends Component{
	constructor(props){
		super(props);
			// initial value of term is an empty string
		this.state = { term: '' };
	}
	render() {
		return (
			<div className="search-bar">
				{/*the input tells the state what to change to */}
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
			);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

};

export default SearchBar;
