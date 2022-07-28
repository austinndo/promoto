const Songs = (props) => {

  if(!props.songs) {
    return <h2> Preparing the setlist... </h2>
  }

  else return (
    <div className="songsContainer">
        {props.songs.map((song) => (
        <div key={song.id} className="songsContainerContent">
        <img className="songContainerCover" src={song.cover} alt="album-cover"/>
        <h2>"{song.name}"</h2>
        <h4>{song.artist}</h4>
        </div>))}
    </div>
  )
}

export default Songs