import {toPersianNumbersWithComma} from "../../utils/toPersianNumber.js";
import {useNavigate} from "react-router-dom";

function WorkBox({label , src,numOfFreelancer}) {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate('/not-build')} className={'flex flex-col gap-2 py-4 items-center bg-secondary-0 shadow-sm shadow-secondary-300  rounded-lg cursor-pointer w-full sm:items-start sm:pr-4 '}>
            <img className={'rounded-sm'} src={`/pictures/${src}`} alt={`${src}`} />
            <p className={'font-semibold'}>{label}</p>
            <p className={'text-secondary-700'}>{toPersianNumbersWithComma(numOfFreelancer)} فریلنسر </p>
        </div>
    );
}

export default WorkBox;