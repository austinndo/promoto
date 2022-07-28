import { Link } from 'react-router-dom'

const Login = (props) => {
  
  return (
    <div>
      <Link to="/">Home</Link>
      <div className="Login"> 
      <h1>Login / Sign Up</h1>
        <form>
        <input type="text" username={'name'} placeholder={'username'} />
        <input type="text" password={'name'} placeholder={'password'} />
        <button>Login</button>
        </form>
      </div>

        <div className="Signup">
          <h2>New to Promoto? Sign up here:</h2>
          <Link to="/promoto/signup">Signup</Link>
        </div>
    </div>
  )
}

export default Login