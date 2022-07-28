const Post = (props) => {

  if(!props.posts) {
    return <h2> Posts are late to the gig... </h2>
  }

  else return (
    <div className="postsContainer">
      {props.posts.map((post) => (
      <div key={post._id} className="postsContainerContent">
      <img className="postContainerImage" src={post.image} alt="post-content"/>
      <h4>{post.username}</h4>
      <h5>Likes: {post.likes}</h5>
      <h5>{post.description}</h5>
      </div>))}
    </div>
  )
}

export default Post