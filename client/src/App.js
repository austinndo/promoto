import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Search from './pages/search/Search'
import SearchSongs from './pages/search/SearchSongs'
import SearchPosts from './pages/search/SearchPosts'
import SearchUsers from './pages/search/SearchUsers'
import Spotlight from './pages/Spotlight'
import Create from './pages/Create'
import Edit from './pages/edit/Edit'
import EditSongPage from './pages/edit/EditSongPage'
import EditPostPage from './pages/edit/EditPostPage'
import DeleteSongPage from './pages/edit/DeleteSongPage'
import DeletePostPage from './pages/edit/DeletePostPage'

function App() {
  return (
    <div className="Promoto">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/promoto/signup" element={<Signup />} />
        <Route path="/promoto" element={<Home />} />
        <Route path="/promoto/search" element={<Search />} />
        <Route path="/promoto/search/songs" element={<SearchSongs />} />
        <Route path="/promoto/search/posts" element={<SearchPosts />} />
        <Route path="/promoto/search/users" element={<SearchUsers />} />
        <Route path="/promoto/spotlight" element={<Spotlight />} />
        <Route path="/promoto/add" element={<Create />} />
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
