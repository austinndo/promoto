import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Spotlight from './pages/Spotlight'
import Login from './pages/Login'
import Edit from './pages/edit/Edit'
import EditSongPage from './pages/edit/EditSongPage'
import EditPostPage from './pages/edit/EditPostPage'
import DeleteSongPage from './pages/edit/DeleteSongPage'
import DeletePostPage from './pages/edit/DeletePostPage'

import Songs from './components/Songs'
import Posts from './components/Posts'
import Users from './components/Users'
import Create from './components/Create'

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
        <Route path="/promoto/edit/song" element={<EditSongPage />} />
        <Route path="/promoto/edit/post" element={<EditPostPage />} />
        <Route path="/promoto/delete/song" element={<DeleteSongPage />} />
        <Route path="/promoto/delete/post" element={<DeletePostPage />} />
      </Routes>
    </div>
  )
}

export default App
