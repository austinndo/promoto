import './styles/App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Spotlight from './pages/Spotlight'
import Create from './pages/Create'
import LoginSignUp from './pages/LoginSignUp'

function App() {
  // const [songs, setSongs] = useState([])
  // const [newSong, setNewSong] = useState({
  //   id: songs.length + 1,
  //   name: '',
  //   artist: '',
  //   genre: [''],
  //   cover: ''
  // })

  // const [posts, setPosts] = useState([])
  // const [newPost, setNewPost] = useState({})

  // const [users, setUsers] = useState([])
  // const [newUser, setNewUser] = useState({})

  return (
    <div className="Promoto">
      <Routes>
        <Route path="/promoto" element={<Home />} />
        <Route path="/promoto/spotlight" element={<Spotlight />} />
        <Route path="/promoto/add" element={<Create />} />
        <Route path="/promoto/login-signup" element={<LoginSignUp />} />
      </Routes>
    </div>
  )
}

export default App
