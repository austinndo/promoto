import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchedNav from './SearchedNav'

const Posts = () => {

const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get('http://localhost:3001/posts')

      setPosts(posts.data.posts)
    }
    getPosts()
  }, [])

  return (
    <div>
      <SearchedNav />
      <div className='searchPostsContainer'>
        {posts.map((post) => (
        <div key={post._id} className="searchPosts">
        <img className="searchPostImage" src={post.image} alt="post-content"/>
        <h4>{post.username}</h4>
        <h5>Likes: {post.likes}</h5>
        <h5>{post.description}</h5>
      </div>))}
    </div>
  </div>)
}

export default Posts