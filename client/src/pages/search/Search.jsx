import { Link } from 'react-router-dom'
import musicRecord from '../../assets/musicRecord.png'
import postIcon from '../../assets/postIcon.png'
import userIcon from '../../assets/userIcon.png'
import Nav from '../../components/Nav'

const Search = () => {

  return (
  <div>
    <nav className="searchNavbar">
      <h2 style={ {color: "black"} }>Search</h2>
      <Link to="/promoto">Home</Link>
    </nav>

    <div className='search'>
      <div>
      <h2>Songs</h2> <br></br>
      <Link to="/promoto/search/songs"><img className='musicRecordIcon' src={musicRecord} alt="music-record" /></Link>
      </div>

      <div>
      <h2>Posts</h2> <br></br>
      <Link to="/promoto/search/posts"><img className='postIcon' src={postIcon} alt="post-icon" /></Link>
      </div>

      <div>
      <h2>Users</h2> <br></br>
      <Link to="/promoto/search/users"><img className='userIcon' src={userIcon} alt="user-icon" /></Link>
      </div>
    </div>
  </div>
  )
}

export default Search