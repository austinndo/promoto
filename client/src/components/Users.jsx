const Users = (props) => {

  if(!props.users) {
    return <h2> Checking tickets... </h2>
  }

  else return (
      <div className='searchUsersContainer'>
        {props.users.map((user) => (
        <div key={user._id} className="searchUsers">
        <h4>{user.username}</h4>
        <h5>Favorite Genres: {user.favoriteGenres}</h5>
        </div>))}
      </div>
    )
  }
  
  export default Users