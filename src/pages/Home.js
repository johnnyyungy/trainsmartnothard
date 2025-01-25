// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;