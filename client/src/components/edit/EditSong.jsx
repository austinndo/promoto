import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditSong = (props) => {

  let navigate = useNavigate()

  const [songs, setSongs] = useState([])
  const [newSong, setNewSong] = useState([{ 
    name: '',
    artist: '',
    genre: [''],
    cover: '',
  }])

  useEffect(() => {
    const getSongs = async () => {
      const songs = await axios.get('http://localhost:3001/songs')
      setSongs(songs.data.songs)
    }
    getSongs()
  }, [])

  const updateSong = async (e) => {
    e.preventDefault()
    setNewSong({ ...newSong, [e.target.name]: e.target.value })

    const updatedSong = {
      ...newSong
    }
    
    await axios({
      method: 'patch',
      url: `http://localhost:3001/song/edit/${props.selectedSong.id}`,
      data: updatedSong
    })

    songs.push(updatedSong)
    setSongs(songs)
    setNewSong({ 
      name: '',
      artist: '',
      genre: [''],
      cover: '',
    })

    navigate('/promoto')
  }

  
const handleChange = (e) => {
  setNewSong({ ...newSong, [e.target.name]: e.target.value })
}

return (
<div>
    <Link to="/">Home</Link>

    <div className="addSongContainer">
      <h1>Edit Song</h1>
        <form>
        <input type="text" onChange={handleChange} value={props.selectedSong.name} name={'name'} placeholder={'*name'} required/> <br></br>
        <input type="text" onChange={handleChange} value={props.selectedSong.artist} name={'artist'} placeholder={'*artist'} required/> <br></br>
        <input type="text" onChange={handleChange} value={props.selectedSong.cover} name={'cover'} placeholder={'*cover art'} required/> <br></br>
        <input type="text" onChange={handleChange} value={props.selectedSong.genre} name={'genre'} placeholder={'*genre'} required/> <br></br>
        <p> * indicates a required field</p> <br></br>
        <button>Submit</button>
        </form>
      </div>
    </div>
    )
  }

  export default EditSong