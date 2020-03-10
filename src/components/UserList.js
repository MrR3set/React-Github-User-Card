import React from 'react';
import UserCard from "./UserCard"


class UserList extends React.Component{



  render(){

    return(<div className="userlist-wrapper">
     <UserCard data={this.props.data}></UserCard>
    </div>)
  }
};



export default UserList;
