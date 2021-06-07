import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
function Nav({ libraryStatus, setLibraryStatus, theme, setTheme }) {
    return (
        <nav>
            <h1
                onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                }}
            >
                Fudge
            </h1>
            <button id="libButton" onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon id="libSvg" icon={faMusic} />
            </button>
        </nav>
    );
}

export default Nav;
