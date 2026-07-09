import {toPersianNumbersWithComma} from "../../utils/toPersianNumber.js";

function ProjectCard({src , budge , title , price  }) {
    return (
        <div className={' shadow-2xl shadow-secondary-300 rounded-2xl '}>
            <img src={`/pictures/${src}`} alt={`${src}`} />
            <div className={'p-2 text-center space-y-3 flex flex-col '}>
                <div className={'bg-primary-50 rounded-2xl p-1 w-1/2 self-end text-primary-900 '}>{budge}</div>
                <p className={'self-end font-semibold'}>{title}</p>
                <p className={'self-start font-semibold text-secondary-700'}>{toPersianNumbersWithComma(price)}</p>
                <div className={'flex justify-between items-center w-full text-[7px] text-secondary-500'}>
                    <p>۱۲ پیشنهاد</p>
                    <p>توسط سپیده احمدی</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;