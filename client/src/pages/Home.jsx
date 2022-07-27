import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from "../components/Nav"
import HomePostsList from "../components/HomePostsList"

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get('http://localhost:3001/posts')

      setPosts(posts.data.posts)
    }
    getPosts()
  }, [])

  console.log([posts])
  return (
    <div className="home">
      <div className="navbar">
        < Nav />
      </div>
      <div className="homePagePosts">
        < HomePostsList posts={posts}/>
      </div>
    </div>
  )
}

export default Home