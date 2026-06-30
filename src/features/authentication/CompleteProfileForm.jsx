import Input from "../../ui/Input.jsx";
import {useEffect, useState} from "react";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import RadioInput from "../../ui/RadioInput.jsx";
import {useMutation} from "@tanstack/react-query";
import {completeProfile} from "../../services/authService.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import useUser from "./useUser.js";

function CompleteProfileForm() {
    const navigate = useNavigate()
    const {user} = useUser()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {mutateAsync , isPending} = useMutation({
        mutationFn: completeProfile,
    })


    useEffect(() => {
        if (user) navigate("/")
    } , [user])

    async function handleCompleteProfile({name, email, role}) {
        try {
            const {message, user} = await mutateAsync({
                name,
                email,
                role
            })
            if (user.status !== 2) {
                toast.custom('حساب کاربری شما در انتظار تایید از سمت ادمین قرار گرفت', {icon: 'ℹ️'})
                return navigate("/")
            }
            toast.success(message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    return (
        <div>
            <form className={'space-y-2'} onSubmit={handleSubmit(handleCompleteProfile)}>
                <Input label={'نام و نام خانوادگی'} type={'text'} id={'name'} register={register} errors={errors}
                       validationSchema={{
                           required: 'این فیلد اجباری است',
                           minLength: {value: 5, message: 'نام و نام خانوادگی معتبر نیست'}
                       }}/>
                <Input label={'ایمیل'} type={'email'} id={'email'} register={register} errors={errors}
                       validationSchema={{
                           required: "ایمیل ضروری است",
                           pattern: {
                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                               message: "ایمیل نامعتبر است",
                           },
                       }}/>
                <div className={'flex gap-4'}>
                    <RadioInput label={'کارفرما'} id={'OWNER'} name={'role'} value={'OWNER'} register={register}
                                errors={errors} validationSchema={{required: 'این فیلد اجباری است'}}/>
                    <RadioInput label={'فریلنسر'} id={'FREELANCER'} name={'role'} value={'FREELANCER'}
                                register={register}/>
                </div>
                <ButtonPrimary label={'تکمیل پروفایل'} isLoading={isPending}/>
            </form>
        </div>
    );
}

export default CompleteProfileForm;