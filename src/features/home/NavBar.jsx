import {HiArrowLeft} from "react-icons/hi";

function NavBar({label}) {
    return (
        <div className={'flex justify-between'}>
            <h2 className={'font-bold text-xl '}>{label}</h2>
            <p className={'flex items-center gap-1 text-sm text-secondary-500'}>مشاهده همه <span><HiArrowLeft/></span></p>
        </div>
    );
}

export default NavBar;