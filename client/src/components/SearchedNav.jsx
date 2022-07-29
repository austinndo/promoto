import { Link } from 'react-router-dom'

const SearchedNav = () => {
  
  return (
    <nav className="searchNavbar">
      <div className='searchNavbarTitle'>
        <h2>Search</h2>
      </div>

      <div className='searchNavbarHome'>
        <Link to="/promoto">Back Home</Link>
      </div>

      <div className='searchNavbarLinks'>

        <Link to="/promoto/search/songs">
        <i class="fa fa-music fa-2x" aria-hidden="true"></i>
        </Link>
        
        <Link to="/promoto/search/posts">
        <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
        </Link>

        <Link to="/promoto/search/users">
        <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
        </Link>
      </div>
    </nav>
  )
}

export default SearchedNav