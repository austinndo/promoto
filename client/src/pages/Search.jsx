import { Link } from 'react-router-dom'
import musicRecord from '../assets/musicRecord.png'
import postIcon from '../assets/postIcon.png'
import userIcon from '../assets/userIcon.png'

const Search = () => {

  return (
  <div>
    <nav className="searchNavbar">
      <h2 style={ {color: "black"} }>Search</h2>
      <div className='searchNavbarLinks'>
        <Link to="/">Back</Link>
        <Link to="/promoto/spotlight">Spotlight</Link>
        <Link to="/promoto/add">Add</Link>
        <Link to="/promoto/login-signup">Login/Sign Up</Link>
      </div>
    </nav>

    <div className='search'>
      <Link to="/promoto/search/songs"><img className='musicRecordIcon' src={musicRecord} alt="music-record" /></Link>
      <Link to="/promoto/search/posts"><img className='postIcon' src={postIcon} alt="post-icon" /></Link>
      <Link to="/promoto/search/users"><img className='userIcon' src={userIcon} alt="user-icon" /></Link>
    </div>
  </div>
  )
}

export default Search