import CheckOtpForm from "./CheckOTPForm.jsx";
import SendOtpForm from "./SendOTPForm.jsx";
import {useState} from "react";

function AuthContainer() {
    const [step, setStep] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState('')



    function renderStep() {
        switch(step) {
            case 1:
                return <SendOtpForm setStep={setStep} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}  />
            case 2:
                return <CheckOtpForm phoneNumber={phoneNumber} />
        }
    }

    return (
        <main className={'container max-w-[28rem]'}>
            {renderStep()}
        </main>
    );
}

export default AuthContainer;