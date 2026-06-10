
function Input({label , id , type , value , onChange , placeholder=''}) {
    return (
        <div>
            <label
                htmlFor={id}
                className={'font-light'}
            >{label}</label>
            <input
                dir={'ltr'}
                id={id}
                type={type}
                value={value}
                onChange={e => onChange(e)}
                className={'w-full font-thin  border border-secondary-200 bg-secondary-0  rounded-2xl p-2 hover:border-primary-500 focus:outline-none focus:bg-white focus:border-primary-500 focus:shadow-lg focus:shadow-primary-200 '}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;