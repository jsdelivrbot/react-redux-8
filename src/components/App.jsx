import React, {Component} from 'react';
import SearchBar from './search_bar.jsx';
import VideoList from './video_list.jsx'
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyDfACpg3V7ZyycXVpVBDkp4Sp8qAE2O2ew';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}

	render(){
		return(
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

export default App;