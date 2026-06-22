
function Select({id, options, register , validationSchema , errors , isPending}) {

    if (!isPending) return (
        <div>
            <label htmlFor={id}>دسته بندی</label>
            <select className={'w-full input mt-2'} id={id} {...register(id , validationSchema)}>
                <option value={''}>یک دسته بندی انتخاب کنید</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>

    );

}

export default Select;