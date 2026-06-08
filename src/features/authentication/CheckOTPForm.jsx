import OTPInput from "react-otp-input";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {checkOtp} from "../../services/authService.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function CheckOtpForm({phoneNumber}) {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
    const {isPending , isSuccess , error ,data , mutateAsync} = useMutation({
        mutationFn: checkOtp
    })

    async function checkOtpHandler (e){
        e.preventDefault();
        try {
            const {message ,user , err } = await mutateAsync({
                phoneNumber,
                otp
            })
            toast.success(message)
            if (user.isActive){
                if (user.role === "OWNER") navigate("/owner-projects")

            }else {
                navigate("/complete-profile")
            }

        }catch(err){
            toast.error(err.response.data.message)

        }

    }


    return (
       <section className={''}>
           <form onSubmit={checkOtpHandler} >
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