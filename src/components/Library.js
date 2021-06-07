import LibrarySong from "./LibrarySong";

const Library = ({ audioRef, songs, setCurrentSong, isPlaying, setSongs, libraryStatus }) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        songs={songs}
                        setSongs={setSongs}
                        setCurrentSong={setCurrentSong}
                        song={song}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
