import { Link } from 'react-router-dom'
import musicRecord from '../assets/musicRecord.png'
import postIcon from '../assets/postIcon.png'
import userIcon from '../assets/userIcon.png'

const SearchedNav = () => {
  
  return (
    <nav className="searchNavbar">
      <div className='searchNavbarTitle'>
        <h2>Search</h2>
      </div>

      <div className='searchedNavbarLinks'>
        <Link to="/promoto">Home</Link> <br></br>
        
        <h2>Songs:</h2>
        <Link to="/promoto/search/songs">
          <img className='musicRecordIcon' src={musicRecord} alt="music-record" />
        </Link>
        
        <h2>Posts:</h2>
        <Link to="/promoto/search/posts">
          <img className='postIcon' src={postIcon} alt="post-icon" />
        </Link>

        <h2>Users:</h2>
        <Link to="/promoto/search/users">
          <img className='userIcon' src={userIcon} alt="user-icon" />
        </Link>
      </div>
    </nav>
  )
}

export default SearchedNav