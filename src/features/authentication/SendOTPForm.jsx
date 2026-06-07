import {useState} from "react";
import NumberInput from "../../ui/NumberInput.jsx";
import {getOtp} from "../../services/authService.js";

function SendOtpForm() {
    const [phoneNumber, setPhoneNumber] = useState('')

    function handler(e){
        e.preventDefault();
        getOtp({'phoneNumber': phoneNumber})
    }

    return (
        <section>
            <NumberInput label={'شماره موبایل'} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} handler={handler}/>
        </section>
    );
}

export default SendOtpForm;