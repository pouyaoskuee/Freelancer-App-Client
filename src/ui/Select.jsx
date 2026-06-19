
function Select({id, options, register , validationSchema , errors}) {
    return (
        <div>
            <label htmlFor={id}>دسته بندی</label>
            <select className={'w-full input mt-2'} id={id} {...register(id , validationSchema)}>
                {options.map(option => (
                    <option key={option.id} value={option.value}>{option.title}</option>
                ))}
            </select>
        </div>

    );
}

export default Select;