import Input from "../../ui/Input.jsx";
import {useForm} from "react-hook-form";
import Select from "../../ui/Select.jsx";
import {TagsInput} from "react-tag-input-component";
import {useState} from "react";
import DatePickerField from "../../ui/DatePickerField.jsx";

function CreateProject() {
    const [tag, setTag] = useState()
    const [date, setDate] = useState()
    const {handleSubmit, register, formState: {errors}} = useForm()

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
                    required: 'عنوان پروژه اجباری است',
                    minLength: {value: 5, message: 'طول عنوان پرژه نا معتبر است'},
                }}/>
            <Input
                label={'توضیحات'}
                id={'description'}
                type={'text'}
                register={register}
                errors={errors}
                required={true}
                validationSchema={{
                    required: 'توضیحات پروژه اجباری است',
                    minLength: {value: 5, message: 'طول توضیحات پرژه نا معتبر است'},
                }}/>
            <Input label={'بودجه'}
                   type={'number'}
                   id={'number'}
                   register={register}
                   errors={errors}
                   required={true}
                   validationSchema={{
                       required: "بودجه ضروری است",
                       minLength: {
                           value: 6,
                           message: "بودجه نامعتبر است",
                       },
                   }}/>

            <Select id={'category'} register={register} options={[]}/>
            <div>
                <label htmlFor="">تگ ها</label>
                <TagsInput value={tag} onChange={setTag} name={'tag'} />
            </div>
    
            <DatePickerField date={date} setDate={setDate} label="ددلاین" />

            <button type={"submit"} className={'btn btn--primary'}>تایید</button>
        </form>
    );
}

export default CreateProject;