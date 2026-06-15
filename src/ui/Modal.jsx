import {HiOutlineX} from "react-icons/hi";

function Modal({open, onClose , title, children}) {
    if (open) return (
        <div className={'bg-secondary-800/40 h-screen w-full fixed top-0 left-0 backdrop-blur-sm flex justify-center items-center '}>
            <div className={'bg-secondary-0 rounded-lg shadow-lg shadow-secondary-600 p-2 transition-all duration-500 ease-out max-w-9/12'}>
                <div className={'flex justify-between items-center border-b border-secondary-200 p-2'}><h3>{title}</h3><button  onClick={onClose}><HiOutlineX/></button></div>
                <div className={'p-2 overflow-hidden text-wrap'}>{children}</div>
            </div>
        </div>
    )
}

export default Modal;