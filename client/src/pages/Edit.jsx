import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Nav from "../components/Nav"
import EditPost from "../components/edit/EditPost"
import EditSong from "../components/edit/EditSong"

const Edit = () => {
  
  let navigate = useNavigate()

  //------------------------ Set state ------------------------//

  //1. search for song by id
  //2. display song through component. component will have button that links to edit page
  //3. pass song data as props to edit page, display edit page with form
  //4. same form handler logic as create... and run update on button click

  const [songs, setSongs] = useState([])
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get('http://localhost:3001/posts')
      setPosts(posts.data.posts)
    }
    getPosts()
  }, [])

  useEffect(() => {
    const getSongs = async () => {
      const songs = await axios.get('http://localhost:3001/songs')
      setSongs(songs.data.songs)
    }
    getSongs()
  }, [])

  const [songId, setSongId] = useState("")
  const [postId, setPostId] = useState("")

  const [selectedSong, setSelectedSong] = useState([])
  const [selectedPost, setSelectedPost] = useState([])

  useEffect(() => {

    // if (songId != songs.map((song) => song.id)) { 
    //   return alert(`Song does not exist`) }

    // else if (songId == songs.map((song) => song.id )) {
      const setSong = async () => {
        const song = await axios.get(`http://localhost:3001/song/${songId}`)
        console.log(song)
        setSelectedSong(song.data.songs)}
        console.log(selectedSong)
        setSong()

  }, [songId])

  useEffect(() => {
    //render post card of id = postId
  }, [postId])

  //------------------------ Form handlers ------------------------//

  const handleChangeSongId = (e) => {
    setSongId({ songId, [e.target.name]: e.target.value })
  }

  const handleChangePostId = (e) => {
    setPostId({ postId, [e.target.name]: e.target.value })
  }

  const goEditSong = (e) => {
    navigate("/promoto/edit/song")
  }

  return (
    <div>
      <div className="navbar">
        < Nav />
      </div>

      <div className='Edit'>
        <div className="editSelectSongIdForm">
          <form>
              <input type="number" onChange={handleChangeSongId} name={'id'} placeholder={"*Song Id Number"} required /> <br></br>
              <button onClick={goEditSong}>Select Song</button>
          </form>
        </div>

        <div className="editSelectPostIdForm">
          <form>
            <input type="text" onChange={handleChangePostId} name={'id'} placeholder={"*Post Id Number"} required /> <br></br>
            <button>Select Post</button>
          </form>
        </div>
        < EditSong selectedSong={selectedSong}/>
        < EditPost postId={postId} selectedPost={selectedPost} />
      </div>
    </div>
  )
}

export default Edit