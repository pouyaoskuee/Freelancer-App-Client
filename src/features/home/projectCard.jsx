import {toPersianNumbersWithComma} from "../../utils/toPersianNumber.js";
import {useNavigate} from "react-router-dom";

function ProjectCard({src , budge , title , price  }) {
    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate('/not-build')} className={'dark:shadow-md shadow-2xl shadow-secondary-300 rounded-2xl cursor-pointer w-full '}>
            <img className={'w-full'} src={`/pictures/${src}`} alt={`${src}`} />
            <div className={'p-2 text-center space-y-3 flex flex-col '}>
                <div className={'bg-primary-50 rounded-2xl p-1 w-1/2 self-end text-primary-900 '}>{budge}</div>
                <p className={'self-end font-semibold'}>{title}</p>
                <p className={'self-start font-semibold text-secondary-700'}>{toPersianNumbersWithComma(price)}</p>
                <div className={'flex justify-between items-center w-full text-[7px] text-secondary-500 sm:text-xs'}>
                    <p>۱۲ پیشنهاد</p>
                    <p>توسط سپیده احمدی</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;