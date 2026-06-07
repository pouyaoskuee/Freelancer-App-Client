import SendOtpForm from "../features/authentication/SendOTPForm.jsx";
import CheckOtpForm from "../features/authentication/CheckOTPForm.jsx";

function Auth() {
    return (
        <main className={'container max-w-[28rem]'}>
            <SendOtpForm/>
            <CheckOtpForm/>
        </main>
    );
}

export default Auth;