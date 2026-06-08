import SendOtpForm from "../features/authentication/SendOTPForm.jsx";
import CheckOtpForm from "../features/authentication/CheckOTPForm.jsx";
import {useState} from "react";

function Auth() {
    const [step, setStep] = useState(1)

    function renderStep() {
        switch(step) {
            case 1:
              return <SendOtpForm setStep={setStep} />
            case 2:
                return <CheckOtpForm/>
        }
    }

    return (
        <main className={'container max-w-[28rem]'}>
            {renderStep()}
        </main>
    );
}

export default Auth;