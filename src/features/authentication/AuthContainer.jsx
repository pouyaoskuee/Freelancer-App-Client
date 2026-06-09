import CheckOtpForm from "./CheckOTPForm.jsx";
import SendOtpForm from "./SendOTPForm.jsx";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {getOtp} from "../../services/authService.js";
import toast from "react-hot-toast";

function AuthContainer() {
    const [step, setStep] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState('')


    const {isPending ,  mutateAsync} =useMutation({
        mutationFn: getOtp
    })

    async function otpHandler(e){
        e.preventDefault();
        try {
            const response = await mutateAsync({
                phoneNumber
            })
            setStep(2)
            toast.success(response.message.status)
        }catch(error){
            // console.log(error.response.data.message)
            // toast.error(error?.response?.data?.data?.message)
            toast.error(error?.response?.data?.message)
            // toast.error(error?.message)


        }

    }



    function renderStep() {
        switch(step) {
            case 1:
                return <SendOtpForm setStep={setStep} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} otpHandler={otpHandler} isLoading={isPending}  />
            case 2:
                return <CheckOtpForm phoneNumber={phoneNumber} onBack={()=> setStep(s=>s-1)} otpHandler={otpHandler} />
        }
    }

    return (
        <main className={'container max-w-[28rem]'}>
            {renderStep()}
        </main>
    );
}

export default AuthContainer;