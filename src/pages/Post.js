// src/pages/Post.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data';

const Post = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;