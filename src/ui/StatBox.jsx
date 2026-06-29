import {toPersianNumbersWithComma} from "../utils/toPersianNumber.js";

function StatBox({icon,label, count , color}) {

    console.log(count)

    const styleColor = {
        primary: 'bg-primary-300 text-primary-700',
        secondary: 'bg-secondary-300 text-secondary-700',
        green: 'bg-green-300 text-green-700',
        olive: 'bg-olive-300 text-olive-700',
    }


    return (
        <div className={' *:mx-auto bg-secondary-0 grid grid-cols-1 gap-2 p-2 sm:grid-cols-[5rem_1fr] '}>
            <div className={` ${styleColor[color]} rounded-full m-auto p-2 sm:row-span-2 `}>
                {icon}
            </div>
            <div className={'sm:mx-1'}>
                {label}
            </div>
            <div className={'sm:mx-1'}>
                {toPersianNumbersWithComma(count)}
            </div>
        </div>
    );
}

export default StatBox;