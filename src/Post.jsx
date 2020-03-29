import React, { useState, useEffect } from "react";
import db from "./firebase";
import Nav from './Nav';

const Post = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if(props.user.uid){
    let postRef = db.collection('users').doc(props.user.uid).collection("posts").doc(props.match.params.id);
    postRef.get().then(doc => {
      let { content, title } = doc.data();
      setTitle(title);
      setContent(content);
    });
  }
  },[]);

  return (
    <div>
      <div class="ui segment container">
        <h1 class="ui header">{title}</h1>
        <div class="ui divider"></div>
        {content.split("\n").map((paragraph, idx) => {
          return <p key={idx}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};

export default Post;
