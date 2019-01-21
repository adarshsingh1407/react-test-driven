import React, { Component } from 'react';

const AdditionalInfo = (props) => {
  const {additionalInfo, isLoading} = props;
  if (isLoading) {
    return (<div>Loading...</div>);
  }
  if (additionalInfo) {
    return (
      <div>
        Bio: {additionalInfo.bio}
        <br />
        <img className={'avatar'} src={additionalInfo.avatar_url} alt={additionalInfo.name} />
      </div>
    );
  } else {
    return null;
  }
}

class GithubProfile extends Component {
  render() {
    const {isLoading, selectedUser, additionalInfo} = this.props;
    if (selectedUser) {
      return (
        <div>
        Name: {selectedUser.name}
        <br />
        Github Handle: {selectedUser.id}
        <br />
        <AdditionalInfo isLoading={isLoading} additionalInfo={additionalInfo} />
        </div>
      );
    } else {
      return (
        <div>Please select a user to view details</div>
      );
    }
  }

}

export default GithubProfile;
