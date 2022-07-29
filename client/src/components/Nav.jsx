import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <div>
      <div className='navbarTitle'>
        <h2 style={ {color: "black"} }>Promoto</h2>
      </div>
      <div className='navbarLinks'>
        <Link to="/promoto" alt="Home"><i class="fa fa-home fa-2x"></i></Link>
        <Link to="/promoto/search" alt="Search"><i class="fa fa-search fa-2x" aria-hidden="true"></i></Link>
        <Link to="/promoto/spotlight" alt="Spotlight"><i class="fa fa-calendar fa-2x" aria-hidden="true"></i></Link>
        <Link to="/promoto/add" alt="Add/Create"><i class="fa fa-plus-square fa-2x" aria-hidden="true"></i></Link>
        <Link to="/promoto/edit" alt="Edit"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>
      </div>
    </div>
  )
}

export default Nav