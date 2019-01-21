import React, { Component } from 'react';
import Select from 'react-select';

class GithubListing extends Component {

  render() {
    const {githubUsers, selectedUser, selectUser} = this.props;
    return (
      <div>
      <Select
      name="githubusers"
      className="basic-single"
      classNamePrefix="select"
      placeholder={'Select Github User'}
      value={selectedUser}
      onChange={selectUser}
      getOptionValue={option => option.id}
      getOptionLabel={option => option.name}
      options={githubUsers}
       />
      </div>
    );
  }

}

export default GithubListing;
