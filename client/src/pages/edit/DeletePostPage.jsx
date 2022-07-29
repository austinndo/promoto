import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DeletePostPage = () => {

  let navigate = useNavigate()

  const [postId, setPostId] = useState({_id: 0})
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get('http://localhost:3001/posts')

      setPosts(posts.data.posts)
    }
    getPosts()
  }, [])


  const deletePost = (e) => {
    e.preventDefault()
    setPostId({...postId,[e.target.name]: e.target.value })

    const id = postId._id

    const axiosDeletePost = async () => {
      await axios({
      method: 'delete',
      url: `http://localhost:3001/post/${id}`
    })}
    axiosDeletePost()

    setPostId({ 
      _id: 0
    })

    navigate('/promoto/search/posts')
  }

    const handleChange = (e) => {
      setPostId({...postId,[e.target.name]: e.target.value })
      console.log(postId)
    }

  return (
    <div className="deletePostPage">
      <div className="backToEdit">
        < Link to="/promoto/edit">Back</Link>
      </div>

      <div className="deletePostContainer">
      <div className="deletePostTitle">
      <h1>Select Post</h1>
      </div>
        <form className="deletePostForm">
        <input type="text" onChange={handleChange} name={'_id'} placeholder={"*Post Id Number"} required /> <br></br>
        <button onClick={deletePost}>Remove Post</button>
        </form>
      </div>

      <div className='deletePagePosts'>
        {posts.map((post) => (
        <div key={post._id} className="deletePosts">
        <img className="deletePostImage" src={post.image} alt="post-content"/>
        <h4>{post.username}</h4>
        <h4>Post Id:{post._id}</h4>
      </div>))}
    </div>
    
    </div>
  )
}

export default DeletePostPage