import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const Nav = (props) => {
console.log(props)
const onSignOut = () => {
    console.log('LOGGED-OUT!')

    auth.signOut().then(function () {
      console.log('User signed Out!')
    }).catch(function(error) {
    })
  }

  const {user} = props;
  return (
    
    <div>
      <div style={{textAlign:"center"}}>
        { user
        ?
     <><span> <Link to={"/create"}>Create Post</Link></span>
      <span>{" "}||</span> 
     <span> <Link to={`/blogs/${props.user.uid}/posts`}>Post Feeds</Link></span>
     <span>{" "}||</span></>:<></>}
     { user 
     ?
     <span onClick={onSignOut}> <Link to={'/signin'}>Sign Out</Link> <br/><span style={{color:'teal'}}>{user.email}</span></span>
     
     :
     <span> <Link to={"/signin"}>Sign In</Link></span>
      }
     </div>
    </div>
  )};

export default Nav;