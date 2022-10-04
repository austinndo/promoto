import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from "../components/Nav"
import Posts from '../components/Posts'

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get('REACT_APP_MONGODB_URI/posts')
      setPosts(posts.data.posts.reverse())
    }
    getPosts()
  }, [])

  return (

    <div className="home">
      <div className="homeNavbar">
        < Nav />
      </div>
      
      <div className="homePagePosts">
        < Posts posts={posts}/>
      </div>
    </div>
  )
}

export default Home