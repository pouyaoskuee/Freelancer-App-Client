
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
                className={'w-full mt-2 font-thin input '}
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