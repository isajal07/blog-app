import React, { useState } from "react";
import Posts from "./Posts";
import Post from "./Post";
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Signup from './SignUp';
import SignIn from './SignIn';
import { auth } from './firebase';
import Nav from './Nav';

function App() {

  const [user, setUser] = useState(false)

    auth.onAuthStateChanged(function(user) {
    if(user){
      setUser(user)
      console.log('Status => In ',user)
    } else {
      setUser(false)
      console.log('Status => Out')
    }
  })
  return (
    <div className="ui container">
      <BrowserRouter>
    <Nav user={user}/>
        <Switch>
          <Route exact path="/signup" component={Signup} default />
          <Route exact path="/signin" component={(props) =><SignIn user={user} {...props}/>}/>
          <Route exact path="/blogs/:uid/posts" component={(props) => <Posts user={user} {...props}/>}/>
          <Route exact path="/blogs/:uid/post/:id" component={(props) => <Post user={user} {...props}/>} />
          <Route exact path="/update/:id" component={(props) => <UpdatePost user={user} {...props}/>} />
          <Route exact path="/create" component={(props) => <CreatePost user={user}{...props}/>} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
