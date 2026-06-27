import {useForm} from "react-hook-form";
import Input from "../../ui/Input.jsx";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import ButtonDanger from "../../ui/ButtonDanger.jsx";
import {useProposal} from "../freelancer/useProposal.js";

function CreateProposal({onClose , projectId}) {

    const {handleSubmit , register , formState:{errors}} = useForm()
    const {isPending , mutate } = useProposal()


    function submitProposal(data){
        const newProposal = {...data ,projectId }
        mutate(newProposal , {
            onSuccess: ()=> {
                onClose()
            }
        })

    }

    return (
            <form onSubmit={handleSubmit(submitProposal)}>
                    <Input register={register} label={'توضیحات'} id={'description'} errors={errors} required validationSchema={{required:'ضروری است' , minLength:{value:10, message:'حداقل کارکتر ۱۰ میباشد'}}} />
                <Input register={register} label={'مدت زمان پیشنهادی'} id={'duration'} errors={errors} type={'number'} required validationSchema={{required:'ضروری است' , minLength:{value:1, message:'حداقل یک روز میباشد'}}}  />
                <Input register={register} label={'مبلغ پیشنهادی'} id={'price'} errors={errors} type={'number'} required validationSchema={{required:'ضروری است' , minLength:{value:6, message:'حداقل قیمت ۱۰۰,۰۰۰ تومان میباشد'}}}  />
                <div className={'flex justify-center gap-4 m-4'}>
                    <ButtonPrimary label={'تایید'} isLoading={isPending}/>
                    <ButtonDanger label={'لغو'} onClick={onClose}  />
                </div>
            </form>
    );
}

export default CreateProposal;