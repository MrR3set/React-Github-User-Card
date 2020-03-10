import React from 'react';
import UserList from "./components/UserList"
import './App.css';
const dummyData = {
  "login": "MrR3set",
  "id": 31925229,
  "node_id": "MDQ6VXNlcjMxOTI1MjI5",
  "avatar_url": "https://avatars3.githubusercontent.com/u/31925229?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MrR3set",
  "html_url": "https://github.com/MrR3set",
  "followers_url": "https://api.github.com/users/MrR3set/followers",
  "following_url": "https://api.github.com/users/MrR3set/following{/other_user}",
  "gists_url": "https://api.github.com/users/MrR3set/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MrR3set/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MrR3set/subscriptions",
  "organizations_url": "https://api.github.com/users/MrR3set/orgs",
  "repos_url": "https://api.github.com/users/MrR3set/repos",
  "events_url": "https://api.github.com/users/MrR3set/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MrR3set/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Bairon Paz",
  "company": "AG Tech",
  "blog": "https://github.com/MrR3set",
  "location": "Southern California",
  "email": null,
  "hireable": true,
  "bio": "Python is overrated.",
  "public_repos": 37,
  "public_gists": 0,
  "followers": 19,
  "following": 16,
  "created_at": "2017-09-13T12:30:44Z",
  "updated_at": "2020-03-03T07:29:20Z"
}


class App extends React.Component{

  //Constructos
  constructor(){
    super();
    this.state={
        user:"MrR3set",
        data:[]
    }
}
componentDidMount(){
    console.log("Getting the data of", this.state.user)
    //In here we wanna make our axios call
    this.setState({
        data:dummyData //In here we get the data.
    })
}


componentDidUpdate(prevProps,prevState){
    console.log("Dummy data is->",this.state.data)
    //In here we wanna check if the username changed, if it did I guess we must call axios again
}


//Componenet unmounted Remove event listenerssss!

  render(){
    return(<div>
      {/* Make the form thing
      Make a list iterator for the array of users you gonna send bruh */}
      <UserList data={this.state.data}></UserList>
    </div>)
  }
};



export default App;
