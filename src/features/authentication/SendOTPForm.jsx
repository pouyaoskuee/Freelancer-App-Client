import {useState} from "react";
import NumberInput from "../../ui/NumberInput.jsx";
import {getOtp} from "../../services/authService.js";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";

function SendOtpForm({ phoneNumber , setPhoneNumber ,otpHandler , isLoading }) {


    return (
        <section>
            <NumberInput label={'شماره موبایل'} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} otpHandler={otpHandler} isLoading={isLoading}/>

        </section>
    );
}

export default SendOtpForm;