import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Spotlight from './pages/Spotlight'
import Login from './pages/Login'
import Edit from './pages/Edit'

import Songs from './components/search/Songs'
import Posts from './components/search/Posts'
import Users from './components/search/Users'
import Create from './components/Create'
import EditSong from './components/edit/EditSong'
import EditPost from './components/edit/EditPost'

function App() {
  return (
    <div className="Promoto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promoto/search" element={<Search />} />
        <Route path="/promoto/search/songs" element={<Songs />} />
        <Route path="/promoto/search/posts" element={<Posts />} />
        <Route path="/promoto/search/users" element={<Users />} />
        <Route path="/promoto/spotlight" element={<Spotlight />} />
        <Route path="/promoto/add" element={<Create />} />
        <Route path="/promoto/login" element={<Login />} />
        <Route path="/promoto/edit" element={<Edit />} />
        <Route path="/promoto/edit/song" element={<EditSong />} />
        <Route path="/promoto/edit/post" element={<EditPost />} />
      </Routes>
    </div>
  )
}

export default App
