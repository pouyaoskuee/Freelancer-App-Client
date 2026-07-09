
function FreelancerCard({name , stack , star , price , src}) {
    return (
        <div className={'flex flex-col items-center bg-secondary-0 rounded-2xl  shadow-2xl dark:shadow-md shadow-secondary-300 text-secondary-500'}>
            <img src={`/pictures/${src}`} alt={`${src}`} />
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