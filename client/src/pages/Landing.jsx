import { Link } from 'react-router-dom'
import "../styles/Landing.css"

const Landing = () => {
  
  return (
    <div classname="landingPage">
      <div classname="login"> 
        <h1>Login</h1>
        <form>
        <input type="text" name={'username'} placeholder={'username'} />
        <input type="password" name={'password'} placeholder={'password'} />
        <button><Link to="/promoto">Login</Link></button>
        </form>
      </div>

        <div className="signupLink">
          <h2>New to Promoto? Sign up here:</h2>
          <Link to="/promoto/signup">Signup</Link>
        </div>
    </div>
  )
}

export default Landing