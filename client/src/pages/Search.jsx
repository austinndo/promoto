import { Link } from 'react-router-dom'
import musicRecord from '../assets/musicRecord.png'

const Search = () => {

  return (
  <div>
    <nav className="searchNavbar">
      <h2 style={ {color: "black"} }>Search</h2>
      <div className='searchNavbarLinks'>
        <Link to="/promoto">Back</Link>
        <Link to="/promoto/spotlight">Spotlight</Link>
        <Link to="/promoto/add">Add</Link>
        <Link to="/promoto/login-signup">Login/Sign Up</Link>
      </div>
    </nav>

    <div className='search'>
      <Link to="/promoto/search/songs"><img src={musicRecord} alt="music-record" /></Link>
      <Link to="/promoto/search/posts">Posts</Link>
      <Link to="/promoto/search/users">Users</Link>
    </div>
  </div>
  )
}

export default Search