import React from 'react';

class UserList extends React.Component {
  render() {
    return (
        <div className="userList">
            <h1 className="userListHeader">USER LISTS USING AXIOS API CALL </h1>
        <ul>
        { this.props.userList.map(person => <li>{person.name}</li>)}
      </ul>
      </div>
    );
}
}

export default UserList;