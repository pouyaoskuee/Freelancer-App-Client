import {useNavigate} from "react-router-dom";

function FreelancerCard({name , stack , star , price , src}) {
    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate('/not-build')} className={'flex flex-col items-center bg-secondary-0 rounded-2xl overflow-hidden  shadow-2xl dark:shadow-md shadow-secondary-300 text-secondary-500 cursor-pointer w-full'}>
            <img className={'w-full bg-white'} src={`/pictures/${src}`} alt={`${src}`} />
            <div className={'p-2 text-center space-y-2'}>
                <p className={'font-bold text-sm text-secondary-800'}>{name}</p>
                <p>{stack}</p>
                <p>{star}</p>
                <p className={'text-xs'}>{price}</p>
            </div>
        </div>
    );
}

export default FreelancerCard;