import {useEffect, useState} from "react";

export function useLocalStore(key , initialValue) {
    const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key) ?? initialValue));


    useEffect(() => {
        localStorage.setItem(key , JSON.stringify(value))
    }, [value  , setValue ]);

    return [value , setValue]
}