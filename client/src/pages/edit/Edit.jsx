import { Link } from 'react-router-dom'
import musicRecord from '../../assets/musicRecord.png'
import postIcon from '../../assets/postIcon.png'
import Nav from "../../components/Nav"

const Edit = () => {

  return (
    <div>
      <div className="navbar">
        < Nav />
      </div>

      <div className='editRouter'>
        <div>
          <h2>Edit Song</h2> <br></br>
          <Link to="/promoto/edit/song"><img className='musicRecordIcon' src={musicRecord} alt="music-record" /></Link>
        </div>

        <div>
          <h2>Edit Post</h2> <br></br>
          <Link to="/promoto/edit/post"><img className='postIcon' src={postIcon} alt="post-icon" /></Link>
        </div>
      </div>

      <div className='deleteRouter'>
        <div>
          <h2>Delete Song</h2> <br></br>
          <Link to="/promoto/delete/song"><img className='musicRecordIcon' src={musicRecord} alt="music-record" /></Link>
        </div>

        <div>
          <h2>Delete Post</h2> <br></br>
          <Link to="/promoto/delete/post"><img className='postIcon' src={postIcon} alt="post-icon" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Edit