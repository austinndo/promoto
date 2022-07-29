import { Link } from 'react-router-dom'
import Nav from "../../components/Nav"

const Edit = () => {

  return (
    <div className='Edit'>
      <div className="editNavbar">
        < Nav />
      </div>

      <div className='editRouter'>
        <div>
          <h2>Edit Song</h2> <br></br>
          <Link to="/promoto/edit/song"><i class="fa fa-music fa-2x" aria-hidden="true"></i></Link>
        </div>

        <div>
          <h2>Edit Post</h2> <br></br>
          <Link to="/promoto/edit/post"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>
        </div>
      </div>

      <div className='deleteRouter'>
        <div>
          <h2>Delete Song</h2> <br></br>
          <Link to="/promoto/delete/song"><i class="fa fa-music fa-2x" aria-hidden="true"></i></Link>
        </div>

        <div>
          <h2>Delete Post</h2> <br></br>
          <Link to="/promoto/delete/post"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Edit