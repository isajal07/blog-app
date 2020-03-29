import React, { useState } from 'react';
import db from './firebase';
import { useHistory } from "react-router-dom";
import Nav from './Nav';


const CreatePost = (props) => {

  const history = useHistory();
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const onTitleChange = (event) => setTitle(event.target.value)

  const onContentChange = (event) => setContent(event.target.value)
  
  const onCreatePost = (e) => {
    // e.preventDefault()
    let postRef = db.collection('users').doc(props.user.uid).collection('posts');
    let payload = { title, content }

    postRef.add(payload)
      .then(function(doc) {console.log('Document successfully added!', doc.id)})

    setTitle('')
    setContent('')
    history.push(`/blogs/${props.user.uid}/posts`)
  }

  return (
    <div class="ui container">
      <h2 class="ui header">
  <i aria-hidden="true" class="write icon"></i>
  <div class="content">Create Post</div>
</h2>

<form class="ui form">

  <div class="field">
    <input placeholder="Title" onChange={onTitleChange} value={title} />
  </div>
  <div class="field">
    <textarea placeholder="Content" rows="25" onChange={onContentChange} value={content}></textarea>
    </div>
    <div class="field">
    <button class="ui teal button" onClick={onCreatePost}>Create Post</button>
    </div>
</form>
    </div>
  )
}

export default CreatePost;