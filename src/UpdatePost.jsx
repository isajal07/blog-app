import React, { useState, useEffect} from 'react';
import db from './firebase';
import { useHistory } from "react-router-dom";
import Nav from './Nav';


const UpdatePost = (props) => {
  console.log("props from app", props)
  const history = useHistory();
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  useEffect(() => {
    if(props.user.uid){
    let postRef = db.collection('users').doc(props.user.uid).collection('posts').doc(props.match.params.id);
  
    postRef.get().then(doc => {
      let { content, title } = doc.data();
      setTitle(title);
      setContent(content);
    });
  }
  },[]);
   
  const onTitleChange = (event) => setTitle(event.target.value)

  const onContentChange = (event) => setContent(event.target.value)
 
  const onUpdatePost = (e) => {
    // e.preventDefault();
    let postRef = db.collection('users').doc(props.user.uid).collection('posts').doc(props.match.params.id);
    let payload = { title, content }

    postRef.update(payload)
      .then(function(doc) {console.log('Document successfully updated!')})

    history.push(`/blogs/${props.user.uid}/posts`)
  }

  return (
    <div class="ui container">
      <h2 class="ui header">
  <i aria-hidden="true" class="write icon"></i>
  <div class="content">Update Post</div>
</h2>
<form class="ui form">

  <div class="field">
    <input placeholder="Title" onChange={onTitleChange} value={title} />
  </div>
  <div class="field">
    <textarea placeholder="Content" rows="25" onChange={onContentChange} value={content}></textarea>
    </div>
    <div class="field">
    <button class="ui teal button" onClick={onUpdatePost}>Update Post</button>
    </div>
</form>
    </div>
  )
}

export default UpdatePost;