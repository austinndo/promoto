import axios from 'axios'

const Post = (props) => {

  if(props.posts.length < 3) {

    const postsData = [
      {
        songId: 1,
        username: 'mjbfan',
        title: 'Family Affair Tote',
        image:
          'https://ctl.s6img.com/society6/img/9uze1MHfvOpGksmCZF87Uv_PlFo/w_700/bags/small/close/~artwork,fw_3500,fh_3500,fx_174,fy_174,iw_3150,ih_3150/s6-original-art-uploads/society6/uploads/misc/89628a8360364357a7280234a6e95df3/~~/no-hateration-holleration-in-this-dancery-mary-j-blige-street-sign-bags.jpg',
        description: `Now everyone at Trader Joe's will know that I don't tolerate any hateration or holleration in this dancery`,
        likes: 0
      },
      {
        songId: 2,
        username: 'stevieee',
        title: 'Dove Tattoo',
        image:
          'https://ih1.redbubble.net/image.739857896.6358/fposter,small,wall_texture,product,750x1000.jpg',
        description:
          'My Edge of Seventeen inspired tattoo! Love how the template turned out. So excited to get this done. Check out the parlor if you are in the area!',
        likes: 0
      },
      {
        songId: 3,
        username: 'yellowstonebear',
        title: 'Double Rainbow!',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMavwmWEvr19Cv6TOWmQIuBVNUOjvdv9IQjw&usqp=CAU',
        description:
          'This must be what Kermit meant by the Rainbow Connection. Double rainbow all the way!',
        likes: 0
      },
      {
        songId: 4,
        username: 'puprock',
        title: 'Rockin out with Orpheus',
        image:
          'https://media.gettyimages.com/photos/playing-guitar-to-dog-picture-id1215014948?s=2048x2048',
        description:
          'This is MY sweet child listening to me play some tunes in the living room. Starting to think he loves music more than I do!',
        likes: 0
      },
      {
        songId: 5,
        username: 'tracyjordan',
        title: 'Werewolf Bar Mitzvah',
        image:
          'https://scpr.brightspotcdn.com/legacy/i/55435327daed337cc745e816c2929797/5bcf792ed217300008df8143-eight.jpg',
        description: `Tribute to my favorite artist Michael Jackson! Here's a sneak peek at the Thriller inspired music video for my new song 'Werewolf Bar Mitzvah`,
        likes: 0
      },
      {
        songId: 6,
        username: 'okstop',
        title: 'Here I Go Again...',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZdDqHRgEqt3_4cfWGW8MspbUtaklgYb3cg&usqp=CAU',
        description:
          'Would not recommend trying to recreate the music video at home...',
        likes: 0
      }
    ]


    return (
      <div className="postsContainer">
        {postsData.map((post) => (
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
        </div>))}
      </div>
    )
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

