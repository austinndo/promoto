import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <nav className="navbar">
      <h4>Promoto</h4>
      <div>
        <Link to="/promoto">Home</Link>
        <Link to="/promoto/search">Search</Link>
        <Link to="/promoto/setlist">Setlist</Link>
        <Link to="/promoto/add">Add</Link>
        <Link to="/promoto/login-signup">Login/Sign Up</Link>
      </div>
    </nav>
  )
}

export default Nav