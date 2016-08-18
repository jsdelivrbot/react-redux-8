import _ from'lodash';
import React, {Component} from 'react';
import SearchBar from './search_bar.jsx';
import VideoList from './video_list.jsx'
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail.jsx'


const API_KEY = 'AIzaSyDfACpg3V7ZyycXVpVBDkp4Sp8qAE2O2ew';

// first App boots up and videos is an empty array and selected video is null
// then it goes down to video detail
// a request then is called to go get a list of videos below with API key
// when request is complete it passes the videos to this.state.videos
// the first video in the list will be sent to selectedVideo
// Video detail is then passed the SelectedVideo
class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');
	}

	videoSearch(term){
		// search callback
		// set initial video
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			 });
		});
	}


	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return(
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		)
	}
}

export default App;