import {useState} from "react";

function SendOtpForm() {

    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <section>
            <form className={'flex flex-col gap-2'} >
                <label
                    htmlFor="phoneNumber"
                    className={'font-thin'}
                >شماره موبایل</label>
                <input
                    id={'phoneNumber'}
                    type="number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className={'w-full border border-gray-200 bg-gray-100 text-secondary-900 rounded-lg p-1 hover:border-primary-500 focus:outline-none focus:bg-white focus:border-primary-500 focus:shadow-lg focus:shadow-primary-200'}
                />

                <button
                    type="submit"
                    className={' w-full rounded-lg bg-primary-900 text-white py-1'}
                >ارسال کد تایید</button>
            </form>
        </section>
    );
}

export default SendOtpForm;