import Loading from "./Loading.jsx";

function NumberInput({label, value, onChange , otpHandler , isLoading}) {


    return (
        <form className={'flex flex-col gap-2'} onSubmit={e => otpHandler(e)}  >
            <label
                htmlFor="phoneNumber"
                className={'font-thin'}
            >{label}</label>
            <input
                dir={'ltr'}
                id={'phoneNumber'}
                type="number"
                value={value}
                onChange={onChange}
                className={'w-full numberInput'}
                placeholder={'۰۹...'}
            />

            {
                isLoading ? <Loading/>:
                    <button
                    type="submit"
                    className={' w-full btn btn--primary'}
                >ارسال کد تایید</button>
            }

        </form>
    );
}

export default NumberInput;