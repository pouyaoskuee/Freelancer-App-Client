function HowWorkBox({src,title,description}) {
    return (
        <div className={'flex items-start'}>
            <div className={'flex flex-col items-center gap-1.5 text-center text-[9px] sm:text-base '}>

                <img className={'size-15 dark:bg-secondary-900 rounded-full'} src={`/pictures/${src}`} alt={`${src}`}/>
                <h4 className={'font-semibold'}>{title}</h4>
                <p className={'text-secondary-400 '}>{description}</p>
            </div>
        </div>

    );
}

export default HowWorkBox;