import Input from "../../ui/Input.jsx";
import {useState} from "react";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import RadioInput from "../../ui/RadioInput.jsx";
import {useMutation} from "@tanstack/react-query";
import {completeProfile} from "../../services/authService.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function CompleteProfileForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState()
    const navigate = useNavigate()

    const {mutateAsync , isPending} = useMutation({
        mutationFn: completeProfile,
    })

    async function handleCompleteProfile (e) {
        e.preventDefault();
        try {
            const {message , user } = await mutateAsync({
                name,
                email,
                role
            })
            if (user.status!==2){
                toast.custom('حساب کاربری شما در انتظار تایید از سمت ادمین قرار گرفت' , {icon:'ℹ️'})
                return navigate("/")
            }
            toast.success(message)
        }catch(error){
            toast.error(error.response.data.message)
        }
    }



    return (
        <div>
            <form className={'space-y-2'} onSubmit={(e)=>handleCompleteProfile(e)}>
                <Input label={'نام و نام خانوادگی'} type={'text'} id={'name'} value={name} onChange={e=> setName(e.target.value)}/>
                <Input label={'ایمیل'} type={'email'} id={'email'} value={email} onChange={e=> setEmail(e.target.value)}/>
                <div className={'flex gap-4'}>
                    <RadioInput label={'کارفرما'} id={'OWNER'} name={'role'} value={'OWNER'} onChange={e=> setRole(e.target.value)} />
                    <RadioInput label={'فریلنسر'} id={'FREELANCER'} name={'role'} value={'FREELANCER'} onChange={e=> setRole(e.target.value)} />
                </div>
                <ButtonPrimary label={'تکمیل پروفایل'} isLoading={isPending}/>
            </form>
        </div>
    );
}

export default CompleteProfileForm;