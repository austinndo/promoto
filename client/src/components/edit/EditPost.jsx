import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditPost = (props) => {

  let navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState([{ 
    songId: '',
    title: '',
    image: '',
    description: ''
  }])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get('http://localhost:3001/posts')
      setPosts(posts.data.posts)
    }
    getPosts()
  }, [])

  const updatePost = async (e) => {
    e.preventDefault()
    setNewPost({ ...newPost, [e.target.name]: e.target.value })

    const updatedPost = {
      ...newPost
    }
    
    await axios({
      method: 'patch',
      url: `http://localhost:3001/post/edit/${props.postId}`,
      data: updatedPost
    })

    posts.push(updatedPost)
    setPosts(posts)
    setNewPost({ 
      songId: '',
      title: '',
      image: '',
      description: ''
    })

    navigate('/promoto')
  }

  
const handleChange = (e) => {
  setNewPost({ ...newPost, [e.target.name]: e.target.value })
}

return (
<div>
    <Link to="/">Home</Link>

    <div className="createPostContainer">
      <h1>Edit a Post</h1>
        <form>
        <input type="text" onChange={handleChange} value={props.songId} name={'songId'} placeholder={'songId'} required/> <br></br>
        <input type="text" onChange={handleChange} value={props.username} name={'username'} placeholder={'username'} required/> <br></br>
        <input type="text" onChange={handleChange} value={props.title} name={'title'} placeholder={'title'} required/> <br></br>
        <input type="text" onChange={handleChange} value={props.image} name={'image'} placeholder={'img src'} required/> <br></br>
        <input type="text-area" onChange={handleChange} value={props.description} name={'description'} placeholder={'description'} /> <br></br>
        <button onClick={updatePost}>Submit</button>
        </form>
      </div>
    </div>
    )
  }

  export default EditPost