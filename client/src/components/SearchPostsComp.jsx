const SearchPostsComp = (props) => {

  if(!props.posts) {
    return <h2> Posts are late to the gig... </h2>
  }

  else return (
    <div className="searchPostsContainer">
      {props.posts.map((post) => (
      <div key={post._id} className="searchPostsContainerContent">
      <img className="searchPostContainerImage" src={post.image} alt="post-content"/>
      <div className="searchPostContainerUsernameLikes">
      <h4 className="searchPostUsername">{post.username}</h4>
      <h5 className="searchPostLikes">{post.likes}<i class="fa fa-thumbs-up" aria-hidden="true"></i></h5>
      </div>
      <h5 className="searchPostDescription">{post.description}</h5>
      </div>))}
    </div>
  )
}

export default SearchPostsComp