import axios from 'axios';

const githubService = {
  getUserDetails: async (username) => {
    return axios.get(`https://api.github.com/users/${username}`);
  },
  getUserDetailsDelayed: async (username, cancelToken) => {
    return axios.get(`http://localhost:8081/github/delayed/${username}`, {
      cancelToken
    });
  }
}

export default githubService;
