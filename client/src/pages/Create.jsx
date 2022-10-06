import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from "../components/Nav"

const Create = () => {
  
  let navigate = useNavigate()

  //------------------------ Set state ------------------------//

  const [songs, setSongs] = useState([])
  const [newSong, setNewSong] = useState({
    id: 0,
    name: '',
    artist: '',
    genre: [''],
    cover: '',
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
    console.log(newSong)
  }, [])

 //------------------------ Functions to Update Database ------------------------//

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

    navigate('/promoto/search/songs')
}

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

    navigate('/promoto/search/posts')
  }

  //------------------------ Form handlers ------------------------//

  const handleChangeSong = (e) => {
    setNewSong({ ...newSong, [e.target.name]: e.target.value })
    console.log(newSong)
  }

  const handleChangePost = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  const nextSongId = songs.length + 1

  return (
    <div className="Create">
      <div className="homeNavbar">
        < Nav />
      </div>
      <div className="createFormContainers">
        <div className="addSongContainer">
        <h1>Add Song #{nextSongId}</h1>
          <form className="addSongForm">
          <input type="number" onChange={handleChangeSong} name={'id'} placeholder={'*song number, copy from above!'} required/> <br></br>
          <input type="text" onChange={handleChangeSong} name={'name'} placeholder={'*name'} required/> <br></br>
          <input type="text" onChange={handleChangeSong} name={'artist'} placeholder={'*artist'} required/> <br></br>
          <input type="text" onChange={handleChangeSong} name={'cover'} placeholder={'*cover art'} required/> <br></br>
          <input type="text" onChange={handleChangeSong} name={'genre'} placeholder={'*genre'} required/> <br></br>
          <p> * indicates a required field</p>
          <button onClick={addSong} >Submit</button>
          </form>
        </div>

        <div className="createPostContainer">
          <div className="createPostTitle">
            <h1>Create a new post</h1>
          </div>
          <form className="createPostForm">
          <input type="number" onChange={handleChangePost} name={'songId'} placeholder={'*song id'} required/> <br></br>
          <input type="text" onChange={handleChangePost} name={'username'} placeholder={'*username'} required/> <br></br>
          <input type="text" onChange={handleChangePost} name={'title'} placeholder={'*title'} required/> <br></br>
          <input type="text" onChange={handleChangePost} name={'image'} placeholder={'*image source'} required/> <br></br>
          <input type="text-area" onChange={handleChangePost} name={'description'} placeholder={'description'} /> <br></br>
          <p> * indicates a required field</p>
          <button onClick={addPost}>Submit</button>
          </form>
          </div>
        </div>
    </div>
  );
}

export default Create