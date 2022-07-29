import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EditPostPage = () => {

  let navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState({postId:""})
  const [newPost, setNewPost] = useState([{ 
    songId: 0,
    username: '',
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
    setPostId({...postId, [e.target.name]: e.target.value})
    setNewPost({ ...newPost, [e.target.name]: e.target.value })

    const updatedPost = {
      ...newPost
    }
    
    await axios({
      method: 'patch',
      url: `http://localhost:3001/post/edit/${postId}`,
      data: updatedPost
    })

    posts.push(updatedPost)
    setPosts(posts)
    setNewPost({ 
      songId: 0,
      username: '',
      title: '',
      image: '',
      description: ''
    })

    navigate('/promoto/posts')
  }

const handleChange = (e) => {
  setPostId({...postId, [e.target.name]: e.target.value})
  setNewPost({ ...newPost, [e.target.name]: e.target.value })
  console.log(postId)
}
  return (
    <div className="editPostPage">
      <div className="editPostPageTitle">
       <h1>Edit Post</h1>
      </div>
      <div className="backToEdit">
        < Link to="/promoto/edit">Back</Link>
      </div>

      <div className="updatePostContainer">
        <form className="updatePostForm">
        <input type="text" onChange={handleChange} name={'postId'} placeholder={"*Post Id"} required/> <br></br>
        <input type="number" onChange={handleChange} name={'songId'} placeholder={"Song Number"} /> <br></br>
        <input type="text" onChange={handleChange} name={'username'} placeholder={'username'} /> <br></br>
        <input type="text" onChange={handleChange} name={'title'} placeholder={'title'} /> <br></br>
        <input type="text" onChange={handleChange} name={'image'} placeholder={'image url'} /> <br></br>
        <input type="text-area" onChange={handleChange} name={'description'} placeholder={'description'} /> <br></br>
        <p> * indicates a required field</p> <br></br>
        <button onClick={updatePost}>Submit</button>
        </form>
      </div>

      <div className='editPostsContainer'>
        {posts.map((post) => (
        <div key={post._id} className="searchPosts">
        <img className="searchPostImage" src={post.image} alt="post-content"/>
        <h4>{post.username}</h4>
        <h4>Post Id:{post._id}</h4>
      </div>))}
    </div>
    
    </div>
  )
}

export default EditPostPage