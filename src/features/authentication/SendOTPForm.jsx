import {useState} from "react";
import NumberInput from "../../ui/NumberInput.jsx";
import {getOtp} from "../../services/authService.js";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";

function SendOtpForm({setStep , phoneNumber , setPhoneNumber  }) {
    const {isPending , error , data , mutateAsync} =useMutation({
        mutationFn: getOtp
    })

    async function handler(e){
        e.preventDefault();
        try {
            const response = await mutateAsync({
                phoneNumber
            })
            setStep(2)
            toast.success(response.message.status)
        }catch(error){
            console.log(error?.response.data.message)
            toast.error(error.response.data.message)
        }

    }

    return (
        <section>
            <NumberInput label={'شماره موبایل'} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} handler={handler} isLoading={isPending}/>

        </section>
    );
}

export default SendOtpForm;