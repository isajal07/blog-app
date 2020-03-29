import React,{ useState, useEffect } from "react";
import PostSnippet from "./PostSnippet";
import _ from "lodash";
import db from './firebase';

const Posts = props => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    if(props.user.uid){
    db.collection('users').doc(props.user.uid).collection('posts')
     .onSnapshot(async posts => {
        let postsData = await posts.docs.map(post => {
          let data = post.data()
          let { id } = post

          let payload = {
            id, ...data
          }
          return payload;
        })
        setPosts(postsData)
      })
    }
  },[])

 
  return (
    <div class="ui container ">
      <h1>Posts</h1>
      <div>
        {_.map(posts, (article, idx) => (
          <PostSnippet
            user={props.user}
            id={article.id}
            key={idx}
            title={_.capitalize(article.title)}
            content={article.content.substring(0,500)}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
