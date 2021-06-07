const LibrarySong = ({
    audioRef,
    song,
    setCurrentSong,
    songs,
    isPlaying,
    setSongs,
}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        const newSongs = songs.map((eachSong) => {
            if (eachSong.id === song.id) {
                return {
                    ...eachSong,
                    active: true,
                };
            } else {
                return {
                    ...eachSong,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        if (isPlaying) audioRef.current.play();
    };

    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? "selected" : ""}`}
        >
            <img
                src={song.cover}
                alt={song.name + " : Image could'nt be loaded"}
            ></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
