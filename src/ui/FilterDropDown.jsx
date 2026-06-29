import {useSearchParams} from "react-router-dom";

function FilterDropDown({options , filterField}) {
    const [searchParams , setSearchParams] = useSearchParams()
    const value = searchParams.get(filterField) || '';

    function handleChange (e) {
        searchParams.set(filterField, e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <select className={'bg-secondary-0 rounded-lg p-1 text-secondary-800 '} value={value} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}

export default FilterDropDown;