
function WorkBox({label , src}) {
    return (
        <div className={'flex flex-col p-4 gap-4 rounded-4xl items-center bg-secondary-0'}>
            <img src={`/pictures/${src}`} alt={`${src}`} />
            <p>{label}</p>
        </div>
    );
}

export default WorkBox;