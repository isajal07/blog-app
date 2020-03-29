import React from "react";
import { Link } from "react-router-dom";
import db from './firebase';

const PostSnippet = props => {
  const { user,id,title } = props;

  const onDeletePost = () => {
    let postRef = db.collection('users').doc(props.user.uid).collection('posts').doc(props.id)
    postRef.delete();
    console.log( "ID:",id, " Deleted!")
  }
  return (
    <>
      <div>
        <div class="ui clearing uattached segment">
          <h2 class="ui left floated header">
            <Link to={`/blogs/${user.uid}/post/${id}`}>{title}</Link>
          </h2>
          {user ? (
            <h2 class="ui right floated header">
              <Link to={`/update/${id}`}>Edit</Link>
              ~ <Link onClick={onDeletePost}>Delete</Link>
            </h2>
            
          ) : (
            <></>
          )}
          <br />
          <br />
          <div class="ui divider"></div>
          {props.content.split("\n").map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>
      </div>
      <br />
    </>
  );
};

export default PostSnippet;
