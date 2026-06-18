
function Select({id, options, register , validationSchema , errors}) {
    return (
        <div>
            <select className={'w-full input'} id={id} {...register(id , validationSchema)}>
                {options.map(option => (
                    <option key={option.id} value={option.value}>{option.title}</option>
                ))}
            </select>
        </div>

    );
}

export default Select;