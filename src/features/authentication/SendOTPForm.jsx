import {useState} from "react";
import NumberInput from "../../ui/NumberInput.jsx";
import {getOtp} from "../../services/authService.js";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";

function SendOtpForm() {
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
            toast.success(response.message.status)
        }catch(err){
            console.log(err)
        }

    }

    return (
        <section>
            <NumberInput label={'شماره موبایل'} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} handler={handler}/>
        </section>
    );
}

export default SendOtpForm;