import './styles/App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

function App() {
  const [songs, setSongs] = useState([])
  const [newSong, setNewSong] = useState({
    id: songs.length + 1,
    name: '',
    artist: '',
    genre: [''],
    cover: ''
  })

  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({})

  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/promoto" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
