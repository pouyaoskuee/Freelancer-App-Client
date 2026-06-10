
function RadioInput({label, id, name , value , onChange}) {
    return (
        <div className={'flex gap-1'}>
            <label htmlFor={id}>{label}</label>
            <input name={name} id={id} type="radio" value={value} onChange={e=> onChange(e)} />
        </div>
    );
}

export default RadioInput;