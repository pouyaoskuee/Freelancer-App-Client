
function WorkWithoutBox({label , src , number}) {
    return (
        <div className={'flex flex-col items-center gap-2 sm:flex-row '}>
            <img className={'dark:bg-secondary-900 rounded-full'} src={`/pictures/${src}`} alt={`${src}`} />
            <div>
                <p className={'font-bold text-sm text-center sm:text-start sm:text-lg'}>{number}</p>
                <p className={'text-secondary-500 font-semibold text-center  sm:text-start'}>{label}</p>
            </div>
        </div>
    );
}

export default WorkWithoutBox;