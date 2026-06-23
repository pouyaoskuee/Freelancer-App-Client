import {HiOutlineMoon} from "react-icons/hi";
import {useDarkMode} from "../context/DarkMode.jsx";
import {HiOutlineSun} from "react-icons/hi2";

function DarkModeToggle() {
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? <HiOutlineSun className={'size-7 text-yellow-500'}/> : <HiOutlineMoon className={'size-6 text-primary-900'}/>}
        </button>
    );
}

export default DarkModeToggle;