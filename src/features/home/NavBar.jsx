import {HiArrowLeft} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

function NavBar({label}) {
    const navigate=useNavigate();

    return (
        <div className={'flex justify-between'}>
            <h2 className={'font-bold text-xl '}>{label}</h2>
            <button onClick={()=>navigate('/not-build')} className={'flex items-center gap-1 text-sm text-secondary-500'}>مشاهده همه <span><HiArrowLeft/></span></button>
        </div>
    );
}

export default NavBar;