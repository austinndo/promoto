import { Link } from 'react-router-dom'
import "../styles/App.css"

const Landing = () => {
  
  return (
    <div className="landingPage">
      <div className="landingPageContainer">
        <div className="landingPageTitle">
        <h1>Promoto</h1>
        </div>
        <div className="login"> 
          <h3>Login</h3>
          <form>
          <input type="text" name={'username'} placeholder={'username'} />
          <input type="password" name={'password'} placeholder={'password'} />
          <button><Link to="/promoto"><i class="fa fa-play"></i></Link></button>
          </form>
        </div>

        <div className="signupLink">
          <h4>New? Sign up <Link to="/promoto/signup">here</Link> </h4>
        </div>
      </div>
    </div>
  )
}

export default Landing