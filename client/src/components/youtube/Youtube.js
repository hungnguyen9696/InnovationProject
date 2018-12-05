import _ from "lodash";
import React, { Component } from "react";

import YTSearch from "youtube-api-search";
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";

const API_KEY = "AIzaSyAaVCj5J5p2TASq1AxkpLsYe4gltSMtros";

export default class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("metropolia finland");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 400);

    return (
      <div className="youtube">
        <div className="container">
          <SearchBar onSearchTermChange={videoSearch} />

          <div className="row">
            <VideoDetail video={this.state.selectedVideo} />

            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
