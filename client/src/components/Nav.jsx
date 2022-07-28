import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <nav className="navbar">
      <h2 style={ {color: "black"} }>Promoto</h2>
      <div className='navbarLinks'>
        <Link to="/">Home</Link>
        <Link to="/promoto/search">Search</Link>
        <Link to="/promoto/spotlight">Spotlight</Link>
        <Link to="/promoto/add">Add</Link>
        <Link to="/promoto/edit">Edit</Link>
        <Link to="/promoto/login">Login</Link>
      </div>
    </nav>
  )
}

export default Nav