import {HiOutlinePhone} from "react-icons/hi";
import Input from "../../ui/Input.jsx";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";


function SendOtpForm({ phoneNumber , setPhoneNumber ,otpHandler , isLoading }) {


    return (
        <section className={'flex items-center justify-center h-screen'}>
            <div className={'w-full max-w-md  bg-secondary-50 p-8 rounded-lg shadow-primary-300 shadow-lg'}>
                <form className={'flex flex-col gap-4'} onSubmit={e => otpHandler(e)}  >
                    <HiOutlinePhone className={' mx-auto mb-2  text-primary-900 border bg-secondary-0 border-gray-200 rounded-full p-4 size-18'} />
                    <p className={'font-medium text-center text-secondary-700'}>شماره موبایل خود را وارد کنید</p>
                    <Input onChange={ e=> setPhoneNumber(e.target.value)} value={phoneNumber} type={'number'} label={'شماره موبایل'} id={'phoneNumber'} placeholder={'۰۹...'}/>
                    <ButtonPrimary isLoading={isLoading} label={'ارسال کد تایید'}/>
                </form>
            </div>
        </section>
    );
}

export default SendOtpForm;