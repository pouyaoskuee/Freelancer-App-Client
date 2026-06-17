import {useEffect, useRef} from "react";

export default function useOutSideClick( onClose ) {
    const ref = useRef('');

    useEffect(() => {
        document.addEventListener("click", e => {
            if (ref.current && !ref.current.contains(e.target) ) {
                onClose();
            }
        }, true)
    } , [onClose])

    return ref
}