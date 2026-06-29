import OTPInput from "react-otp-input";
import {useEffect, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {checkOtp} from "../../services/authService.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";

function CheckOtpForm({phoneNumber ,onBack , handleSubmit , time , setTime , isLoading}) {

    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
    const {mutateAsync} = useMutation({
        mutationFn: checkOtp
    })


    async function checkOtpHandler (e){
        e.preventDefault();
        try {
            const {message ,user } = await mutateAsync({
                phoneNumber,
                otp
            })
            toast.success(message)

            if(!user.isActive) return navigate("/complete-profile")
            if (user.status!==2){
                toast.custom('حساب کاربری شما در انتظار تایید از سمت ادمین قرار گرفت' , {icon:'ℹ️'})
                return navigate("/")
            }
            if (user.role === "OWNER") navigate("/owner")
            if (user.role === "FREELANCER") navigate("/freeLancer")
            if (user.role === "ADMIN") navigate("/admin")
        }catch(err){
            toast.error(err.response.data.message)
        }
    }


    useEffect(() => {
        const timer = time>0 && setInterval(()=>{
            setTime((t)=>t-1)
        },1000)

        return () => {
            if (timer) clearInterval(timer)
        }

    }, [time , setTime])





    return (
       <section className={''}>
           <button onClick={onBack} className={'text-primary-800'}><HiOutlineArrowRightCircle size={30}/></button>
           <div className={'my-1'}>
               <p className={'font-thin text-secondary-400 text-sm mb-1'}>کد تایید برای شماره موبایل {phoneNumber} ارسال گردید </p>
               <div>{time>0?(<p className={'text-secondary-500 text-md'}>{time}ثانیه تا ارسال مجدد کد تایید</p>): (<button onClick={handleSubmit} className={'text-primary-700'}>ارسال مجدد کد</button>)}</div>
           </div>
           <form onSubmit={checkOtpHandler} >
               <p className={'font-medium text-secondary-600'}>کد تایید را وارد کنید</p>
               <p></p>
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
               <ButtonPrimary label={'تایید'} isLoading={isLoading}/>
           </form>
       </section>
    );
}

export default CheckOtpForm;