import DarkModeToggle from "./DarkModeToggle.jsx";
import LogOut from "../features/authentication/LogOut.jsx";
import useUser from "../features/authentication/useUser.js";

function HeaderMenu() {
    const {user} = useUser()
    return (
        <nav>
            <ul className={'flex justify-center items-center gap-4'}>
                <li><DarkModeToggle /></li>
                {user && (<li><LogOut/></li>)}

            </ul>
        </nav>
    );
}

export default HeaderMenu;