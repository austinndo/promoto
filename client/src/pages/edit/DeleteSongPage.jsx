import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from "../../components/Nav"

const DeleteSongPage = () => {

  let navigate = useNavigate()

  const [songs, setSongs] = useState([])
  const [songId, setSongId] = useState({id: 0})

  useEffect(() => {
    const getSongs = async () => {
      const songs = await axios.get('http://localhost:3001/songs')
      setSongs(songs.data.songs)
    }
    getSongs()
  }, [])

  const deleteSong = (e) => {
    e.preventDefault()
    setSongId({...songId,[e.target.name]: e.target.value })

    const id = songId.id

    const axiosDeleteSong = async () => {
      await axios.delete(`http://localhost:3001/song/${id}`)
    }
    axiosDeleteSong()

    setSongId({ 
      id: 0
    })

    navigate('/promoto/search/songs')
  }

    const handleChange = (e) => {
      setSongId({...songId,[e.target.name]: e.target.value })
    }

  return (
    <div>
      <div className="navbar">
        < Nav />
      </div>

      <div className="updateSongContainer">
      <h1>Select Song</h1>
        <form>
        <input type="number" onChange={handleChange} name={'id'} placeholder={"*Song Id Number"} required /> <br></br>
        <button onClick={deleteSong}>Remove Song</button>
        </form>
      </div>

      <div className='searchSongsContainer'>
        {songs.map((song) => (
        <div key={song.id} className="searchSongs">
        <img className="songCover" src={song.cover} alt="album-cover"/>
        <h2>"{song.name}"</h2>
        <h4>Song #{song.id}</h4>
        </div>))}
      </div>
    
    </div>
  )
}

export default DeleteSongPage