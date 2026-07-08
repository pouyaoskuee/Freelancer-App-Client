
function FreelancerCard({name , stack , star , price , src}) {
    return (
        <div className={'flex flex-col items-center bg-secondary-0 rounded-2xl  shadow-2xl shadow-secondary-300'}>
            <img src={`/pictures/${src}`} alt={`${src}`} />
            <div className={'p-2 text-center space-y-2'}>
                <p>{name}</p>
                <p>{stack}</p>
                <p>{star}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default FreelancerCard;