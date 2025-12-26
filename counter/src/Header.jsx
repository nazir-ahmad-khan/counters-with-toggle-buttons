import { Link } from "react-router-dom";

function Header({onOpenCounter, onOpenNamesCounter}) {
    return (
        <>
            <div className="header">
                <ul>
                    <li>
                        <button onClick={onOpenCounter} to="/">Toggle Counter</button>

                    </li>

                    <li>
                        <button onClick={onOpenNamesCounter} to="togglenamescounter"> Toggle Names Counter </button>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Header;