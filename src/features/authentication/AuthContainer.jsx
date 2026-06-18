import CheckOtpForm from "./CheckOTPForm.jsx";
import SendOtpForm from "./SendOTPForm.jsx";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {getOtp} from "../../services/authService.js";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";

function AuthContainer() {
    const [step, setStep] = useState(1)
    const [time, setTime] = useState(5)
    const {handleSubmit , register , getValues} = useForm()

    const {isPending ,  mutateAsync} =useMutation({
        mutationFn: getOtp
    })

    async function otpHandler(data){
        // console.log(data)

        try {
            const {message} = await mutateAsync(data)
            setStep(2)
            setTime(5)
            toast.success(message.status)
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
                return <SendOtpForm register={register} handleSubmit={handleSubmit(otpHandler)} isLoading={isPending}  />
            case 2:
                return <CheckOtpForm phoneNumber={getValues("phoneNumber")} onBack={()=> setStep(s=>s-1)} handleSubmit={handleSubmit(otpHandler)} setTime={setTime} time={time} isLoading={isPending} />
        }
    }

    return (
        <main >
            {renderStep()}
        </main>
    );
}

export default AuthContainer;