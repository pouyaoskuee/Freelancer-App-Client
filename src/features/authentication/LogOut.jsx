import {HiArrowRightOnRectangle} from "react-icons/hi2";
import {useLogOut} from "./useLogOut.js";
import Loading from "../../ui/Loading.jsx";

function LogOut() {
    const {isPending , mutate} = useLogOut();
    if (isPending) return  <Loading />;
    return (
        <button onClick={mutate}>
            <HiArrowRightOnRectangle className={'size-6 text-primary-900'} />
        </button>
    );
}

export default LogOut;