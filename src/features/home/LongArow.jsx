import {HiArrowLongLeft} from "react-icons/hi2";

function LongArow() {
    return (
        <div className={'flex items-center pt-5 pr-0.5 text-sm text-secondary-400 dark:text-secondary-700 sm:text-lg'}>
            <HiArrowLongLeft/>
            <HiArrowLongLeft/>
            <div className={'hidden sm:flex'}>
                <HiArrowLongLeft/>
                <HiArrowLongLeft/>
                <HiArrowLongLeft/>
                <HiArrowLongLeft/>
                <HiArrowLongLeft/>
                <HiArrowLongLeft/>
                <HiArrowLongLeft/>
            </div>
        </div>
    );
}

export default LongArow;