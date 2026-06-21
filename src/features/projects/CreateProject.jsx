import Input from "../../ui/Input.jsx";
import {useForm} from "react-hook-form";
import Select from "../../ui/Select.jsx";
import {TagsInput} from "react-tag-input-component";
import {useEffect, useState} from "react";
import DatePickerField from "../../ui/DatePickerField.jsx";
import {useCategories} from "../../hooks/useCategories.js";
import {useCreateProject} from "./useCreateProject.js";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import {useEditProject} from "./useEditProject.js";

function CreateProject({onClose , project={}}) {

    const {title , description , budget , category:prevCategory , deadline , tags:prevTags , _id} = project;




    const editeValue = {
        title,
        description,
        budget,
        category: prevCategory?._id,
    }




    const [tags, setTags] = useState(prevTags || []);
    const [date, setDate] = useState(new Date(deadline || ''))
    const {categories , isPending} = useCategories();
    const {handleSubmit, register, formState: {errors} , reset} = useForm({defaultValues:editeValue})
    const {isCreating , creating} = useCreateProject()
    const {editing , isEditing} = useEditProject()



    function onSubmit(data) {
        const newProject = {
        ...data,tags, deadline: new Date(date).toISOString(),
        }
        if (project.title) {
            editing({_id , newProject} , {onSuccess:()=>{
                    reset();
                    onClose()
                }})
        }else {
            creating(newProject, {onSuccess:()=>{
                    reset();
                    onClose()
            }   })
        }

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
                   id={'budget'}
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

            <Select id={'category'} register={register} options={categories} isPending={isPending} />
            <div>
                <label htmlFor="">تگ ها</label>
                <TagsInput value={tags} onChange={setTags} name={'tags'} />
            </div>
            <DatePickerField date={date} setDate={setDate} label="ددلاین" />

            <ButtonPrimary label={'ثبت پروژه جدید'} isLoading={isCreating}/>
        </form>
    );
}

export default CreateProject;