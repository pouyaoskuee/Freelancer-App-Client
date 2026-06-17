import {HiOutlineX} from "react-icons/hi";
import useOutSideClick from "../hooks/useOutSideClick.js";

function Modal({open, onClose , title, children}) {
    const ref = useOutSideClick(onClose);

    if (open) return (
        <div className={'fixed top-0 right-0 flex justify-center items-center w-screen h-screen bg-secondary-800/40 backdrop-blur-sm'}>
            <div ref={ref} className={'bg-secondary-0 rounded-lg shadow-lg shadow-secondary-600 p-2 transition-all duration-500 ease-out max-w-9/12 z-10'}>
                <div className={'flex justify-between items-center border-b border-secondary-200 p-2'}><h3>{title}</h3><button  onClick={onClose}><HiOutlineX/></button></div>
                <div className={'p-2 overflow-hidden text-wrap'}>{children}</div>
            </div>
        </div>
    )
}

export default Modal;