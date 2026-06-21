import {Switch} from "@headlessui/react";
import {useState} from "react";
import {useToggleProjectStatus} from "./useToggleStatus.js";
import Loading from "../../ui/Loading.jsx";

function ToggleProjectStatus({project}) {
    const [enabled, setEnabled] = useState(project.status==='OPEN'&&true);
    const {mutate , isPending} = useToggleProjectStatus()

    function handleChange () {
        const status = {
            status: enabled ? 'CLOSED' : 'OPEN',
        };
        mutate({ _id:project._id , status} ,
            {
                onSuccess: ()=> {
                setEnabled(!enabled)
                }
            })
    }

    return (
        <Switch.Group>
            <div className="flex items-center gap-x-2">
                {isPending ? (<Loading/>):
                <Switch
                    checked={enabled}
                    onChange={handleChange}
                    className={`${enabled ? "bg-primary-900" : "bg-secondary-200"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                >
                    <span

                        className={`${enabled ? "-translate-x-6" : "-translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
                    >{enabled&&<span  className={`${enabled ? "translate-x-5 text-secondary-0 text-sm"  : ""} inline-block -translate-y-1 transform transition-transform`}>باز</span>}
                    </span>
                </Switch>}
            </div>
        </Switch.Group>);
}

export default ToggleProjectStatus;