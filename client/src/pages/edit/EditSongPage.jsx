import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from "../../components/Nav"

const EditSongPage = () => {

  let navigate = useNavigate()

  const [songId, setSongId] = useState({id: 0})
  const [newSong, setNewSong] = useState([{ 
    name: '',
    artist: '',
    genre: [''],
    cover: '',
  }])

  const updateSong = (e) => {
    e.preventDefault()
    setSongId({...songId,[e.target.name]: e.target.value })
    setNewSong({ ...newSong, [e.target.name]: e.target.value })

    const id = songId.id
    const updatedSong = { ...newSong }

    const patchSong = async () => {
      await axios({
      method: 'patch',
      url: `http://localhost:3001/song/edit/${id}`,
      data: updatedSong
    })}
    patchSong()

    setNewSong({ 
      name: '',
      artist: '',
      genre: [''],
      cover: '',
    })

    navigate('/promoto/search/songs')
  }

    const handleChange = (e) => {
      setSongId({...songId,[e.target.name]: e.target.value })
      setNewSong({ ...newSong, [e.target.name]: e.target.value })
    }

  return (
    <div>
      <div className="navbar">
        < Nav />
      </div>

      <div className="updateSongContainer">
      <h1>Edit Song</h1>
        <form>
        <input type="number" onChange={handleChange} name={'id'} placeholder={"*Song Id Number"} required /> <br></br>
        <input type="text" onChange={handleChange} name={'name'} placeholder={'name'} /> <br></br>
        <input type="text" onChange={handleChange} name={'artist'} placeholder={'artist'} /> <br></br>
        <input type="text" onChange={handleChange} name={'cover'} placeholder={'cover art'} /> <br></br>
        <input type="text" onChange={handleChange} name={'genre'} placeholder={'genre'} /> <br></br>
        <p> * indicates a required field</p> <br></br>
        <button onClick={updateSong}>Submit</button>
        </form>
      </div>
    
    </div>
  )
}

export default EditSongPage

