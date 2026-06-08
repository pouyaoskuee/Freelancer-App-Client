import {useState} from "react";
import NumberInput from "../../ui/NumberInput.jsx";
import {getOtp} from "../../services/authService.js";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading.jsx";

function SendOtpForm({setStep}) {
    const [phoneNumber, setPhoneNumber] = useState('')
    const {isPending , error , data , mutateAsync} =useMutation({
        mutationFn: getOtp
    })

    async function handler(e){
        e.preventDefault();
        try {
            const response = await mutateAsync({
                phoneNumber
            })
            console.log(response)
            setStep(2)
            toast.success(response.message.status)
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }

    }

    return (
        <section>
            <NumberInput label={'شماره موبایل'} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} handler={handler} isLoading={isPending}/>

        </section>
    );
}

export default SendOtpForm;