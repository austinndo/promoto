import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from "../components/Nav"
import Posts from '../components/Posts'
import postsData from '../components/postsData'

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get('http://localhost:3001/posts')
      setPosts(posts.data.posts.reverse())
    }
    getPosts()
  }, [])

const postsTrue = (

  <div className="home">
    <div className="homeNavbar">
      < Nav />
    </div>
    
    <div className="homePagePosts">
      < Posts posts={posts}/>
    </div>
  </div>
)

const postsSeed = (

  <div className="home">
    <div className="homeNavbar">
      < Nav />
    </div>
    
    <div className="homePagePosts">
      < Posts posts={postsData}/>
    </div>
  </div>
)

return posts ? postsTrue : postsSeed
  
}

export default Home