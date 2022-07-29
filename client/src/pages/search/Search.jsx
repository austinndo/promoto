import { Link } from 'react-router-dom'


const Search = () => {

  return (
  <div className='search'>
    <div className="searchTitle">
      <h2>Search</h2>
    </div>
    <div className='searchHome'>
      <Link to="/promoto">Home</Link>
    </div>

    <div className='searchPageLinks'>
      <div>
      <h2>Songs</h2> <br></br>
      <Link to="/promoto/search/songs"><i class="fa fa-music fa-3x" aria-hidden="true"></i></Link>
      </div>

      <div>
      <h2>Posts</h2> <br></br>
      <Link to="/promoto/search/posts"><i class="fa fa-pencil-square-o fa-3x" aria-hidden="true"></i></Link>
      </div>

      <div>
      <h2>Users</h2> <br></br>
      <Link to="/promoto/search/users"><i class="fa fa-user-circle fa-3x" aria-hidden="true"></i></Link>
      </div>
    </div>
  </div>
  )
}

export default Search