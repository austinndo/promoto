import { Link } from 'react-router-dom'


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
      <Link to="/promoto/search/songs"><i class="fa fa-music fa-3x" aria-hidden="true"></i></Link>
      </div>

      <div>
      <h2>Posts</h2> <br></br>
      <Link to="/promoto/search/posts"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>
      </div>

      <div>
      <h2>Users</h2> <br></br>
      <Link to="/promoto/search/users"><i class="fa fa-user-circle fa-2x" aria-hidden="true"></i></Link>
      </div>
    </div>
  </div>
  )
}

export default Search