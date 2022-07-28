const Songs = (props) => {

  if(!props.songs) {
    return <h2> Preparing the setlist... </h2>
  }

  else return (
    <div>
        {props.songs.map((song) => (
        <div key={song.id} className="searchSongs">
        <img className="songCover" src={song.cover} alt="album-cover"/>
        <h2>"{song.name}"</h2>
        <h4>{song.artist}</h4>
        </div>))}
      </div>
  )
}

export default Songs