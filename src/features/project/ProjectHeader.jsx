import {HiArrowRight} from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack.js";

function ProjectHeader({project}) {

    console.log(project.title)

    const moveBack = useMoveBack()

    return (
        <div className={'flex items-center'}>
            <button className={'text-primary-900'} onClick={moveBack}> <HiArrowRight className={'size-5'}/> </button>
            <h1 className={'font-normal mx-auto text-nowrap'}>پیشنهاد های ثبت شده برای پروژه <span className={'text-primary-600'}>{project.title}</span></h1>
        </div>
    );
}

export default ProjectHeader;