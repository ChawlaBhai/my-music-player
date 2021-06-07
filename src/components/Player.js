import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
    isPlaying,
    setIsPlaying,
    currentSong,
    setCurrentSong,
    songInfo,
    setSongInfo,
    audioRef,
    songs,
    setSongs,
}) => {
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        if (direction === "skip-back") {
            if (currentIndex - 1 === -1) {
                currentIndex += songs.length;
            }
            await setCurrentSong(songs[currentIndex - 1]);
            activeLibraryHandler(songs[currentIndex - 1]);
        } else {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if (isPlaying) audioRef.current.play();
    };
    const activeLibraryHandler = (pushedSong) => {
        const newSongs = songs.map((eachSong) => {
            if (eachSong.id === pushedSong.id) {
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
    };
    const getTime = (time) => {
        //var minutes = Math.floor(time / 60);
        //var seconds = Math.floor(time % 60);
        //if (minutes.toString().length === 1) {
        //    minutes = "0" + minutes
        //}
        //if (seconds.toString().length === 1) {
        //    seconds = "0" + seconds
        //}
        //return (minutes+":"+seconds);
        return (
            ("0" + Math.floor(time / 60)).slice(-2) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    return (
        <div className="player">
            <div className="time-container">
                <p>{getTime(songInfo.currentTime)}</p>
                <div
                    style={{
                        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
                    }}
                    className="track"
                >
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                        type="range"
                    />
                    <div
                        className="animate-track"
                        style={{
                            transform: `translateX(${songInfo.animationPercentage}%)`,
                        }}
                    ></div>
                </div>
                <p>
                    {songInfo.duration ? getTime(songInfo.duration) : "00:00"}
                </p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-back")}
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    size="2x"
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-forward")}
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
        </div>
    );
};

export default Player;
