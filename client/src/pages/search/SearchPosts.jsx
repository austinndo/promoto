import { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from '../../components/Posts'
import SearchedNav from '../../components/SearchedNav'


const SearchPosts = () => {

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
      <div>
        <Posts posts={posts} />
      </div>
    </div>
  )

}

export default SearchPosts