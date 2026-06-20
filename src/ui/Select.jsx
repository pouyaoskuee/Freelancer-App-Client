
function Select({id, options, register , validationSchema , errors}) {
    console.log(options)
    return (
        <div>
            <label htmlFor={id}>دسته بندی</label>
            <select className={'w-full input mt-2'} id={id} {...register(id , validationSchema)}>
                <option value={''}>یک دسته بندی انتخاب کنید</option>
                {options.map(option => (
                    <option key={option.id} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>

    );
}

export default Select;