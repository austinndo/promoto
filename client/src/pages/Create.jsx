import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Create = (props) => {
  
  let navigate = useNavigate()

  //Post data
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({
    //ref songId and username
      songId: '',
      username: '',
      title: '',
      image:
        '',
      description:
        '',
      likes: 0
  })

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get('http://localhost:3001/posts')

      setPosts(posts.data.posts)
    }
    getPosts()
  }, [])

  const addPost = (e) => {
    e.preventDefault()
    const currentPosts = posts
    const createdPost = {
      ...newPost
    }
    currentPosts.push(createdPost)
    setPosts(currentPosts)
    setNewPost({ id: '', name: '', img: '', description: '', price: '' })
  }

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    addPost(e)
    navigate('/promoto')
  }


  return (
    <div>
    <Link to="/promoto">Back</Link>
    <h1>Create a new post</h1>
      <form>
      <input type="text" songId={'name'} placeholder={'songId'} required/>
      <input type="text" username={'name'} placeholder={'username'} required/>
      <input type="text" title={'name'} placeholder={'title'} required/>
      <input type="text" image={'name'} placeholder={'img src'} required/>
      <input type="text" description={'name'} placeholder={'description'} />
      </form>
      <button>Submit</button>
    </div>
  );
}

{/* <input type="text" value={newBoat.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
<input type="text" value={newBoat.img} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
<input type="text-area" value={newBoat.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
<input type="text" value={newBoat.price} onChange={ props.handleChange} name={'price'} placeholder={'price'} />
<button>Submit</button> */}

export default Create