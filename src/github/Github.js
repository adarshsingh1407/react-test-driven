import React, { Component } from 'react';
import GithubListing from './GithubListing';
import GithubProfile from './GithubProfile';
import githubService from '../services/githubService';
import axios from 'axios';

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

const GithubUsers = [{
  id: 'adarshsingh1407',
  name: 'Adarsh Singh'
}, {
  id: 'gaearon',
  name: 'Dan Abramov'
}];

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      selectedUser: undefined,
      additionalInfo: undefined
    };
  }
  selectUser = (selectedUser) => {
    this.setState({
      selectedUser
    }, () => {
      this.getUserDetails();
    });
  }
  getUserDetails = () => {
    const {selectedUser} = this.state;
    if (selectedUser && selectedUser.id) {
      this.cancelRequest();
      // TODO: Uncomment this
      // this.getUserDetailsFromApi(selectedUser.id);
      this.getUserDetailsDelayedFromApi(selectedUser.id);
    }
  }
  getUserDetailsFromApi = async (username) => {
    this.setState({
      isLoading: true
    });
    try {
      const githubUserDetailsResponse = await githubService.getUserDetails(username);
      console.log('githubUserDetailsResponse.data', githubUserDetailsResponse.data);
      this.fetchedUserAdditionalInfo(githubUserDetailsResponse.data);
    } catch (e) {
      console.log('Error in fetching details for', username);
    } finally {
      this.setState({
        isLoading: false
      });
    }
  }
  getUserDetailsDelayedFromApi = async (username) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    this.setState({
      isLoading: true,
      source
    });
    try {
      const githubUserDetailsResponse = await githubService.getUserDetailsDelayed(username, source.token);
      console.log('githubUserDetailsResponse.data', githubUserDetailsResponse.data);
      this.fetchedUserAdditionalInfo(githubUserDetailsResponse.data);
    } catch (e) {
      console.log('Error in fetching details for', username);
    } finally {
      this.setState({
        isLoading: false
      });
    }
  }
  cancelRequest = () => {
    if (this.state.source) {
      this.state.source.cancel('API Cancelled by User');
      this.setState({
        isLoading: false,
        source: undefined,
        additionalInfo: undefined
      });
    }
  }
  fetchedUserAdditionalInfo = (githubUserDetails) => {
    console.log('fetchedUserAdditionalInfo', githubUserDetails);
    this.setState({
      additionalInfo: githubUserDetails
    });
  }
  render() {
    const {selectedUser, additionalInfo, isLoading} = this.state;
    return (
      <div>
        Github Users
        <GithubListing
        githubUsers={GithubUsers}
        selectedUser={selectedUser}
        selectUser={this.selectUser} />
        <br />
        <button type="button" onClick={this.cancelRequest}>Cancel</button>
        <br />
        <GithubProfile
        isLoading={isLoading}
        selectedUser={selectedUser}
        additionalInfo={additionalInfo}
        />
      </div>
    );
  }

}

export default Github;
