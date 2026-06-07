import OTPInput from "react-otp-input";
import {useState} from "react";

function CheckOtpForm() {
    const [otp, setOtp] = useState('')
    return (
       <section className={''}>
           <form action="">
               <p className={'font-thin'}>کد تایید را وارد کنید</p>
               <OTPInput
                   value={otp}
                   onChange={e => setOtp(e)}
                   renderInput={(props)=> <input {...props} />}
                   inputType={'number'}
                   numInputs={6}
                   renderSeparator={<span>-</span>}
                   containerStyle={'flex flex-row-reverse gap-2 justify-center'}
                   inputStyle={'m-2 border border-primary-400 rounded-sm size-8 text-center'}
                   skipDefaultStyles={true}
               />

               <button className={' w-full btn btn--primary'}>تایید</button>
           </form>
       </section>
    );
}

export default CheckOtpForm;