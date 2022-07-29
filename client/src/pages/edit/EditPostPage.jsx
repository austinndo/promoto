import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

import Nav from "../../components/Nav"
import EditPost from "./EditPost"


const EditPostPage = () => {

  let navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState("")
  const [selectedPost, setSelectedPost] = useState([])
  
  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get('http://localhost:3001/posts')
      setPosts(posts.data.posts)
    }
    getPosts()
  }, [])

  const handleChange = (e) => {
    setPostId({ postId, [e.target.name]: e.target.value })
  }



  return (
    <div>
      <div className="navbar">
        < Nav />
      </div>

      <div className='Edit'>

        <div className="editSelectPostIdForm">
          <form>
            <input type="text" onChange={handleChange} name={'id'} placeholder={"*Post Id Number"} required /> <br></br>
            <button>Select Post</button>
          </form>
        </div>
        < EditPost postId={postId} selectedPost={selectedPost} />
      </div>
    </div>
  )

}

export default EditPostPage