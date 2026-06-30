import {useForm} from "react-hook-form";
import {useQueryClient} from "@tanstack/react-query";
import Select from "../../ui/Select.jsx";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import {useChangeUserStatus} from "./useChangeUserStatus.jsx";

function ChangeUserStatus({userId , onClose}) {
    const {register , handleSubmit } = useForm()
    const {mutate , isPending} = useChangeUserStatus()
    const queryClient = useQueryClient();

    const options = [
        {
            label:'رد شده',
            value: 0
        },
        {
            label:'در انتظار تایید',
            value: 1
        },
        {
            label:'تایید شده',
            value: 2
        },
    ]

    function onSubmit(status) {
        mutate({ userId , status } , {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey:['all-users']})
                onClose()
            }
        })

    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Select register={register} id={'status'} options={options}  />
            <ButtonPrimary label={'تایید'} isLoading={isPending} />
        </form>
    );
}

export default ChangeUserStatus;