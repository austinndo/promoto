import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchedNav from './SearchedNav'

const Songs = () => {

const [songs, setSongs] = useState([])

  useEffect(() => {
    const getSongs = async () => {
      const songs = await axios.get('http://localhost:3001/songs')
      
      setSongs(songs.data.songs)
    }
    getSongs()
  }, [])

  return (
    <div>
      <SearchedNav />
      <div className='searchSongsContainer'>
        {songs.map((song) => (
        <div key={song.id} className="searchSongs">
        <img className="songCover" src={song.cover} alt="album-cover"/>
        <h4>{song.name}</h4>
        <h4>{song.artist}</h4>
        </div>))}
      </div>
    </div>
  )
}

export default Songs