
function NumberInput({label, value, onChange , Handler}) {


    return (
        <form className={'flex flex-col gap-2'} onSubmit={Handler}  >
            <label
                htmlFor="phoneNumber"
                className={'font-thin'}
            >{label}</label>
            <input
                id={'phoneNumber'}
                type="number"
                value={value}
                onChange={onChange}
                className={'w-full numberInput'}
            />

            <button
                type="submit"
                className={' w-full btn btn--primary'}
            >ارسال کد تایید</button>
        </form>
    );
}

export default NumberInput;