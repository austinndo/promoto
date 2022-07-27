
//Reference for Adding Post or Song

// const [boats, setBoats] = useState(boatsArray)
// const [newBoat, setNewBoat] = useState({
//   id: '',
//   name: '',
//   img: '',
//   description: '',
//   price: ''
// })

// const addBoat = (e) => {
//   e.preventDefault()
//   const currentBoats = boats
//   const createdBoat = {
//     ...newBoat,
//     id: parseInt(boats.length + 1),
//     price: parseInt(newBoat.price)
//   }
//   currentBoats.push(createdBoat)
//   setBoats(currentBoats)
//   setNewBoat({ id: '', name: '', img: '', description: '', price: '' })
// }

// const handleChange = (e) => {
//   setNewBoat({ ...newBoat, [e.target.name]: e.target.value })
// }

// return (
//   <div className="App">
//     <header>
//       <Nav />
//     </header>
//     <main>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="new"
//           element={
//             <BoatForm
//               newBoat={newBoat}
//               handleChange={handleChange}
//               addBoat={addBoat}
//             />
//           }
//         />