function ProjectCard({src , budge , title , price  }) {
    return (
        <div className={' shadow-2xl shadow-secondary-300 rounded-2xl '}>
            <img src={`/pictures/${src}`} alt={`${src}`} />
            <div className={'p-2 text-center space-y-2 flex flex-col '}>
                <div className={'bg-primary-100 rounded-2xl p-1 w-1/2 self-end '}>{budge}</div>
                <p className={'self-end'}>{title}</p>
                <p className={'self-start'}>{price}</p>
                <div className={'flex justify-between items-center w-full'}>
                    <p>۱۲ پیشنهاد</p>
                    <p>توسط سپیده احمدی</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;