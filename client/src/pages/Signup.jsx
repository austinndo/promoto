import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
import Nav from "../components/Nav"

const Signup = () => {
  
  let navigate = useNavigate()


  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({
      name:'',
      email:'',
      username:'',
      password:'',
      favoriteGenres: ['']
    })
  
  useEffect(() => {
    const getUsers = async () => {
      const posts = await axios.get('http://localhost:3001/users')

      setUsers(users.data.users)
    }
    getUsers()
  }, [])



 //------------------------ Functions to Update Database ------------------------//

 const addUser = async (e) => {
  e.preventDefault()
  setNewUser({ ...newUser, [e.target.name]: e.target.value })
  const user = {
    ...newUser
  }

  await axios({
    method: 'post',
    url: 'http://localhost:3001/user',
    data: user
  }) 

  users.push(user)
  setUsers(users)
  setNewUser({ 
    name:'',
    email:'',
    username:'',
    password:'',
    favoriteGenres: ['']
  })

    navigate('/promoto/search/users')
}


  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  return (
    <div className="Create">
      <div className="navbar">
        < Nav />
      </div>
        <div className="signup">
        <h1>Account Details</h1>
          <form>
          <input type="text" onChange={handleChange} name={'name'} placeholder={'*name'} required/> <br></br>
          <input type="text" onChange={handleChange} name={'email'} placeholder={'*email'} required/> <br></br>
          <input type="text" onChange={handleChange} name={'username'} placeholder={'*username'} required/> <br></br>
          <input type="password" onChange={handleChange} name={'password'} placeholder={'*password'} required/> <br></br>
          <input type="text" onChange={handleChange} name={'favoriteGenres'} placeholder={'Favorite Genre(s)'} /> <br></br>
          <p> * indicates a required field</p> <br></br>
          <button onClick={addUser}>Signup</button>
          </form>
        </div>

    </div>
  )
}

export default Signup