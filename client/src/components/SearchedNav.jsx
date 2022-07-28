import { Link } from 'react-router-dom'

const SearchedNav = () => {
  
  return (
    <nav className="searchedNavbar">
      <h2 style={ {color: "black"} }>Search</h2>
      <div className='searchedNavbarLinks'>
        <Link to="/">Back</Link>
        <Link to="/promoto/search/songs">Songs</Link>
        <Link to="/promoto/search/posts">Posts</Link>
        <Link to="/promoto/search/users">Users</Link>
      </div>
    </nav>
  )
}

export default SearchedNav