import Input from "../../ui/Input.jsx";
import {useState} from "react";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import RadioInput from "../../ui/RadioInput.jsx";

function CompleteProfileForm() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState()
    console.log(role)

    return (
        <div>
            <form className={'space-y-2'}>
                <Input label={'نام'} type={'text'} id={'name'} value={name} onChange={e=> setName(e.target.value)}/>
                <Input label={'نام خانوادگی'} type={'text'} id={'lastName'} value={lastName} onChange={e=> setLastName(e.target.value)}/>
                <Input label={'ایمیل'} type={'email'} id={'email'} value={email} onChange={e=> setEmail(e.target.value)}/>
                <div className={'flex gap-4'}>
                    <RadioInput label={'کارفرما'} id={'OWNER'} name={'role'} value={'OWNER'} onChange={e=> setRole(e.target.value)} />
                    <RadioInput label={'فریلنسر'} id={'FREELANCER'} name={'role'} value={'FREELANCER'} onChange={e=> setRole(e.target.value)} />
                </div>
                <ButtonPrimary label={'تکمیل پروفایل'}/>
            </form>
        </div>
    );
}

export default CompleteProfileForm;