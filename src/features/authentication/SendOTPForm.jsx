import Loading from "../../ui/Loading.jsx";
import {HiOutlinePhone} from "react-icons/hi";


function SendOtpForm({ phoneNumber , setPhoneNumber ,otpHandler , isLoading }) {


    return (
        <section className={'flex items-center justify-center h-screen'}>
            <div className={'w-full max-w-md  bg-secondary-50 p-8 rounded-lg shadow-primary-300 shadow-lg'}>
                <form className={'flex flex-col gap-4'} onSubmit={e => otpHandler(e)}  >
                    <HiOutlinePhone className={' mx-auto mb-2  text-primary-900 border bg-secondary-0 border-gray-200 rounded-full p-4 size-18'} />
                    <p className={'font-medium text-center text-secondary-700'}>شماره موبایل خود را وارد کنید</p>
                    <label
                        htmlFor="phoneNumber"
                        className={'font-light'}
                    >شماره موبایل</label>
                    <input
                        dir={'ltr'}
                        id={'phoneNumber'}
                        type="number"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        className={'w-full font-thin  border border-secondary-200 bg-secondary-0  rounded-2xl p-2 hover:border-primary-500 focus:outline-none focus:bg-white focus:border-primary-500 focus:shadow-lg focus:shadow-primary-200 '}
                        placeholder={'۰۹...'}
                    />

                    {
                        isLoading ? <Loading/>:
                            <button
                                type="submit"
                                className={' w-full btn btn--primary mt-1 rounded-xl py-2'}
                            >ارسال کد تایید</button>
                    }

                </form>
            </div>
        </section>
    );
}

export default SendOtpForm;