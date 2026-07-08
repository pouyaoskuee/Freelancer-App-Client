
function WorkWithoutBox({label , src , number}) {
    return (
        <div className={'flex flex-col items-center gap-2'}>
            <img src={`/pictures/${src}`} alt={`${src}`} />
            <p>{number}</p>
            <p>{label}</p>
        </div>
    );
}

export default WorkWithoutBox;