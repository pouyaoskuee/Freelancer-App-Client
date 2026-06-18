
function RadioInput({label, id, name , value , register ,validationSchema , errors}) {
    return (
        <div className={'flex flex-col'}>
            <div className={'flex gap-1'}>
                <label htmlFor={id}>{label}</label>
                <input value={value} name={name} id={id} type="radio" {...register(name , validationSchema)} />
            </div>
            {
                errors && errors[name] && (
                    <span  className={'text-error text-sm font-thin'}>
                        {errors[name]?.message}
                    </span>
                )
            }
        </div>

    );
}

export default RadioInput;