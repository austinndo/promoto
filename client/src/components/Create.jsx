import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Create = (props) => {
  
  let navigate = useNavigate()

  //------------------------ Set state ------------------------//

  const [songs, setSongs] = useState([])
  const [newSong, setNewSong] = useState({
    id: songs.length + 1,
    name: '',
    artist: '',
    genre: [''],
    cover: '',
    //Posts will be empty array
    posts: ['']
  })

  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({
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
    console.log(posts)
  }, [])

  useEffect(() => {
    const getSongs = async () => {
      const songs = await axios.get('http://localhost:3001/songs')

      setSongs(songs.data.songs)
    }
    getSongs()
    console.log(songs)
  }, [])

 //------------------------ Functions to Update Database ------------------------//

  const addPost = async (e) => {
    e.preventDefault()
    setNewPost({ ...newPost, [e.target.name]: e.target.value })

    const createdPost = {
      ...newPost
    }
    
    await axios({
      method: 'post',
      url: 'http://localhost:3001/post',
      data: createdPost
    })

    posts.push(createdPost)
    setPosts(posts)
    setNewPost({ 
      songId: '',
      username: '',
      title: '',
      image: '',
      description: '',
      likes: 0 })

    navigate('/promoto')
  }

  const addSong = async (e) => {
    e.preventDefault()
    setNewSong({ ...newSong, [e.target.name]: e.target.value })
    const createdSong = {
      ...newSong
    }

    await axios({
      method: 'post',
      url: 'http://localhost:3001/song',
      data: createdSong
    }) 

    songs.push(createdSong)
    setSongs(songs)
    setNewSong({ 
      id: songs.length + 1,
      name: '',
      artist: '',
      genre: [''],
      cover: '',
      //Posts will be empty array
      posts: [''] })

      navigate('/promoto')
  }

  //------------------------ Form handlers ------------------------//

  const handleChangeSong = (e) => {
    setNewSong({ ...newSong, [e.target.name]: e.target.value })
  }

  const handleChangePost = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
    console.log(newPost)
  }

  return (
    <div className="Create">
    <Link to="/">Back</Link>
    <div className="addSongContainer">
      <h1>Add a new song</h1>
        <form>
        <input type="text" onChange={handleChangeSong} name={'name'} placeholder={'*name'} required/> <br></br>
        <input type="text" onChange={handleChangeSong} name={'artist'} placeholder={'*artist'} required/> <br></br>
        <input type="text" onChange={handleChangeSong} name={'cover'} placeholder={'*cover art'} required/> <br></br>
        <input type="text" onChange={handleChangeSong} name={'genre'} placeholder={'*genre'} required/> <br></br>
        <p> * indicates a required field</p> <br></br>
        <button onClick={addSong}>Submit</button>
        </form>
      </div>

    <div className="createPostContainer">
      <h1>Create a new post</h1>
        <form>
        <input type="text" onChange={handleChangePost} name={'songId'} placeholder={'*song id'} required/> <br></br>
        <input type="text" onChange={handleChangePost} name={'username'} placeholder={'*username'} required/> <br></br>
        <input type="text" onChange={handleChangePost} name={'title'} placeholder={'*title'} required/> <br></br>
        <input type="text" onChange={handleChangePost} name={'image'} placeholder={'*image source'} required/> <br></br>
        <input type="text" onChange={handleChangePost} name={'description'} placeholder={'description'} /> <br></br>
        <p> * indicates a required field</p> <br></br>
        <button onClick={addPost}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create