import {useForm} from "react-hook-form";
import Input from "../../ui/Input.jsx";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import ButtonDanger from "../../ui/ButtonDanger.jsx";

function CreateProposal({onClose , projectId}) {

    const {handleSubmit , register , formState:{errors}} = useForm()


    function submitProposal(data){
        console.log(data)
    }

    return (
            <form onSubmit={handleSubmit(submitProposal)}>
                    <Input register={register} label={'توضیحات'} id={'description'} errors={errors} required validationSchema={{required:'ضروری است' , minLength:{value:10, message:'حداقل کارکتر ۱۰ میباشد'}}} />
                <Input register={register} label={'مدت زمان پیشنهادی'} id={'duration'} errors={errors} type={'number'} required validationSchema={{required:'ضروری است' , minLength:{value:10, message:'حداقل کارکتر ۱۰ میباشد'}}}  />
                <Input register={register} label={'مبلغ پیشنهادی'} id={'price'} errors={errors} type={'number'} required validationSchema={{required:'ضروری است' , minLength:{value:10, message:'حداقل کارکتر ۱۰ میباشد'}}}  />
                <div className={'flex justify-center gap-4 m-4'}>
                    <ButtonPrimary label={'تایید'}/>
                    <ButtonDanger label={'لغو'} onClick={onClose}  />
                </div>


            </form>
    );
}

export default CreateProposal;