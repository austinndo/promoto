import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchedNav from './SearchedNav'

const Users = () => {

  const [users, setUsers] = useState([])
  
    useEffect(() => {
      const getUsers = async () => {
        const users = await axios.get('http://localhost:3001/users')
  
        setUsers(users.data.users)
      }
      getUsers()
    }, [])
  
  return (
    <div>
      <SearchedNav />
      <div className='searchUsersContainer'>
        {users.map((user) => (
        <div key={user._id} className="searchUsers">
        <h4>{user.username}</h4>
        <h5>Favorite Genres: {user.favoriteGenres}</h5>
        </div>))}
      </div>
    </div>)
  }
  
  export default Users