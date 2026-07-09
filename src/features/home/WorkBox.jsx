import {toPersianNumbersWithComma} from "../../utils/toPersianNumber.js";

function WorkBox({label , src,numOfFreelancer}) {
    return (
        <div className={'flex flex-col gap-2 py-4 items-center bg-secondary-0 shadow-sm shadow-secondary-300  rounded-lg '}>
            <img className={'rounded-sm'} src={`/pictures/${src}`} alt={`${src}`} />
            <p className={'font-semibold'}>{label}</p>
            <p className={'text-secondary-700'}>{toPersianNumbersWithComma(numOfFreelancer)} فریلنسر </p>
        </div>
    );
}

export default WorkBox;