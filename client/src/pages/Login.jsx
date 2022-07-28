import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const Login = (props) => {
  

  return (
    <div>
    <Link to="/">Back</Link>
    <div className="Login"> 
    <h1>Login / Sign Up</h1>
      <form>
      <input type="text" username={'name'} placeholder={'username'} />
      <input type="text" password={'name'} placeholder={'password'} />
      </form>
      <button>Submit</button>
    </div>

    <div className="Signup">
      <Link to="/promoto/signup">Signup</Link>
    </div>
    </div>
  )
}

export default Login