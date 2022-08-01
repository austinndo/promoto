import axios from 'axios'

const Post = (props) => {

  if(!props.posts) {
    return <h2> Posts are late to the gig... </h2>
  }

  else return (
    <div className="postsContainer">
      {props.posts.map((post) => (
      <div key={post._id} className="postsContainerContent">
      <img className="postContainerImage" src={post.image} alt="post-content"/>
      <div className="postContainerUsernameLikes">
      <h4 className="postUsername">{post.username}</h4>
      <h5 className="postLikes">{post.likes}<i class="fa fa-thumbs-up" aria-hidden="true" style={{cursor:"pointer"}} onClick={async () => {
        await axios({
          method: 'patch',
          url: `http://localhost:3001/post/edit/${post._id}`,
          data: {likes: post.likes + 1}
          })}}>
      </i></h5>
      </div>
      <h5 className="postDescription">{post.description}</h5>
      <button style={{cursor:"pointer"}} className="deletePostButton" onClick={async () => {
            await axios({
            method: 'delete',
            url: `http://localhost:3001/post/${post._id}`
            })
      }}>Delete</button>
      </div>))}
    </div>
  )
}

export default Post

