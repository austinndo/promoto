import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const Login = (props) => {
  
//   let navigate = useNavigate()

//   //Post data
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     const getPosts = async () => {
//       const posts = await axios.get('http://localhost:3001/posts')

//       setPosts(posts.data.posts)
//     }
//     getPosts()
//   }, [])
// //

//   const handleSubmit = (e) => {
//     addPost(e)
//     navigate('/promoto')
//   }

//   const [newPost, setNewPost] = useState({
//     //ref songId and username
//       songId: '',
//       username: '',
//       title: '',
//       image:
//         '',
//       description:
//         '',
//       likes: 0
//   })

//   const addPost = (e) => {
//     e.preventDefault()
//     const currentPosts = posts
//     const createdPost = {
//       ...newPost,
//       id: parseInt(posts.length + 1)
//     }
//     currentPosts.push(createdPost)
//     setPosts(currentPosts)
//     setNewPost({ id: '', name: '', img: '', description: '', price: '' })
//   }

//   const handleChange = (e) => {
//     setNewPost({ ...newPost, [e.target.name]: e.target.value })
//   }


  return (
    <div>
    <Link to="/promoto">Back</Link>
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
  );
}

{/* <input type="text" value={newBoat.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
<input type="text" value={newBoat.img} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
<input type="text-area" value={newBoat.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
<input type="text" value={newBoat.price} onChange={ props.handleChange} name={'price'} placeholder={'price'} />
<button>Submit</button> */}

export default Login