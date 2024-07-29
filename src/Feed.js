import React, { useEffect, useState } from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'
import { collection, docs, doc, getDocs, onSnapshot, query, QuerySnapshot, orderBy } from "firebase/firestore"; 

function Feed() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedStack = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
      setPosts(updatedStack);
    });
    console.log(posts);
    return unsubscribe;
}, []);

console.log(posts);

  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />

        {posts.map(post => (
          <Post
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
          />
        ))}
    </div>
  )
}

export default Feed
