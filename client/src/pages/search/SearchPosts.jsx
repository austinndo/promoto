import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchPostsComp from '../../components/SearchPostsComp'
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
    <div className='searchPosts'>
      <SearchedNav />
      <div className='searchPagePosts'>
        <SearchPostsComp posts={posts} />
      </div>
    </div>
  )

}

export default SearchPosts