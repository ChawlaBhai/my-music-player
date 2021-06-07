import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Nav from "./components/Nav";
import Library from "./components/Library";
import { useEffect, useRef, useState } from "react";

function themeChange(primary, secondary, boxShadow, track) {
    document.querySelector("body").style.background = primary;
    document.querySelectorAll("svg").forEach((one) => {
        one.style.color = secondary;
    });
    document.querySelectorAll("h1").forEach((one) => {
        one.style.color = secondary;
    });
    document.querySelectorAll("h2").forEach((one) => {
        one.style.color = secondary;
    });
    document.querySelectorAll("h3").forEach((one) => {
        one.style.color = secondary;
    });
    document.querySelectorAll("h4").forEach((one) => {
        one.style.color = secondary;
    });
    document.querySelector(".animate-track").style.background = track;
    let libButton = document.getElementById("libButton");
    libButton.style.color = secondary;
    libButton.style.border = `2px solid ${secondary}`;
    libButton.onmouseover = () => {
        libButton.style.background = secondary;
        libButton.style.color = primary;
        document.getElementById("libSvg").style.color = primary;
    };
    libButton.onmouseleave = () => {
        libButton.style.background = "transparent";
        libButton.style.color = secondary;
        document.getElementById("libSvg").style.color = secondary;
    };
    document.querySelector(".library").style.background = primary;
    document.querySelector(".library").style.boxShadow = boxShadow;
    document.querySelector(".time-container").style.color = secondary;
}

function App() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark") {
            themeChange(
                "rgb(9,9,9)",
                "white",
                "5px 5px 130px rgb(0, 0, 0)",
                "#3b3b3b"
            );
        } else {
               themeChange("white", "rgb(65,65,65)", "2px 2px 50px rgb(204, 204, 204)", "rgb(204, 204, 204)");
        }
    }, [theme]);

    const audioRef = useRef(null);

    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[2]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);

    const timeUpdateHandler = (e) => {
        setSongInfo({
            ...songInfo,
            currentTime: e.target.currentTime,
            duration: e.target.duration,
            animationPercentage: (
                (e.target.currentTime / e.target.duration) *
                100
            ).toFixed(3),
        });
    };

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        if (isPlaying) audioRef.current.play();
    };

    return (
        <div className={`App ${libraryStatus ? "library-active" : ""}`}>
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
                theme={theme}
                setTheme={setTheme}
            />
            <Song currentSong={currentSong} />
            <Player
                audioRef={audioRef}
                setSongInfo={setSongInfo}
                songInfo={songInfo}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
            />
            <Library
                audioRef={audioRef}
                isPlaying={isPlaying}
                songs={songs}
                setSongs={setSongs}
                setCurrentSong={setCurrentSong}
                libraryStatus={libraryStatus}
            />
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}

export default App;
