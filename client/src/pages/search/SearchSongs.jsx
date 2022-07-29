import { useState, useEffect } from 'react'
import axios from 'axios'
import Songs from '../../components/Songs'
import SearchedNav from '../../components/SearchedNav'


const SearchSongs = () => {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    const getSongs = async () => {
      const songs = await axios.get('http://localhost:3001/songs')
      setSongs(songs.data.songs)
    }
    getSongs()
  }, [])

  return (
    <div className='searchSongs'>
      <SearchedNav />
      <div>
        <Songs songs={songs} />
      </div>
    </div>
  )

}

export default SearchSongs