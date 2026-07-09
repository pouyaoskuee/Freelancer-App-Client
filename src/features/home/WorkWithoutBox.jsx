
function WorkWithoutBox({label , src , number}) {
    return (
        <div className={'flex flex-col items-center gap-2'}>
            <img src={`/pictures/${src}`} alt={`${src}`} />
            <p className={'font-bold text-sm'}>{number}</p>
            <p className={'text-secondary-500 font-semibold'}>{label}</p>
        </div>
    );
}

export default WorkWithoutBox;