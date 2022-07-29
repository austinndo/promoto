import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <div>
      <h2 style={ {color: "black"} }>Promoto</h2>
      <div className='navbarLinks'>
        <Link to="/promoto">Home</Link>
        <Link to="/promoto/search">Search</Link>
        <Link to="/promoto/spotlight">Spotlight</Link>
        <Link to="/promoto/add">Add</Link>
        <Link to="/promoto/edit">Edit</Link>
      </div>
    </div>
  )
}

export default Nav