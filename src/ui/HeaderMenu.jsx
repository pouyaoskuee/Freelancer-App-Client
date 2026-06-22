import DarkModeToggle from "./DarkModeToggle.jsx";
import LogOut from "../features/authentication/LogOut.jsx";

function HeaderMenu() {
    return (
        <nav>
            <ul className={'flex justify-center items-center gap-4'}>
                <li><DarkModeToggle /></li>
                <li><LogOut/></li>
            </ul>
        </nav>
    );
}

export default HeaderMenu;