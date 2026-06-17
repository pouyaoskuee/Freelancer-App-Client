
function Input({label , id , type , placeholder='' , register ,validationSchema , errors ,required}) {
    return (
        <div>
            <div className={'flex items-center gap-1'}>
                <label
                    htmlFor={id}
                    className={'font-normal'}
                >{label}</label>
                <p className={'text-error text-center h-4'}>{required && '*'}</p>
            </div>

            <input
                dir={type==='number'? 'ltr' : 'rtl'}
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(id , validationSchema)}
                className={'w-full mt-2 font-thin  border border-secondary-200 bg-secondary-0  rounded-2xl p-2 hover:border-primary-500 focus:outline-none focus:bg-white focus:border-primary-500 focus:shadow-lg focus:shadow-primary-200 '}
            />
            {
                errors && errors[id] && (
                    <span  className={'text-error text-sm font-thin'}>
                        {errors[id]?.message}
                    </span>
                )
            }
        </div>
    );
}

export default Input;