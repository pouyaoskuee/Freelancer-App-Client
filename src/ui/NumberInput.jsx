import Loading from "./Loading.jsx";

function NumberInput({label, value, onChange , handler , isLoading , loading}) {


    return (
        <form className={'flex flex-col gap-2'} onSubmit={e => handler(e)}  >
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