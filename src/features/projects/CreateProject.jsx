import Input from "../../ui/Input.jsx";
import {useForm} from "react-hook-form";

function CreateProject() {
    const {handleSubmit , register , formState:{errors}} =useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <form className={'space-y-4'} onSubmit={handleSubmit(onSubmit)}>
            <Input
                label={'عنوان پروژه'}
                id={'title'}
                type={'text'}
                register={register}
                errors={errors}
                required={true}
                validationSchema={{
                    required:'عنوان پروژه اجباری است',
                    minLength: { value: 5 , message:'طول عنوان پرژه نا معتبر است'},
                }}
            />
            <Input
                label={'توضیحات'}
                id={'description'}
                type={'text'}
                register={register}
                errors={errors}
                required={true}
                validationSchema={{
                    required:'عنوان پروژه اجباری است',
                    minLength: { value: 5 , message:'طول عنوان پرژه نا معتبر است'},
                }}
            />
            <button type={"submit"} className={'btn btn--primary'}>تایید</button>
        </form>
    );
}

export default CreateProject;