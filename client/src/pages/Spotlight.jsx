import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from "../components/Nav"

const Spotlight = () => {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    const getSongs = async () => {
      const songs = await axios.get('http://localhost:3001/songs')
      
      setSongs(songs.data.songs)
    }
    getSongs()
  }, [])

  return (
  <div className='Spotlight'>
    <div className="spotlightNavbar">
      < Nav />
    </div>
    <div className='spotlightHeader'>Featured Songs:</div>
    <div className='spotlight'>
      {songs.map((song) => (
      <div key={song.id} className="songList">
      <h4>"{song.name}"</h4>
      <h5>-{song.artist}</h5>
      </div>))}
    </div>
  </div>
  )
}

export default Spotlight