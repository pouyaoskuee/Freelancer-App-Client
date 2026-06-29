import {useSearchParams} from "react-router-dom";

function Filter({filterField , options}) {

    const [searchParams , setSearchParams] = useSearchParams()
    const currentFilter = searchParams.get(filterField) || options.at[0]?.value;


    function handleChange (value) {
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    }


    return (
        <div className={'flex items-center gap-4 text-xs'}>
            <span>وضعیت</span>
            <div className={'flex items-center gap-4 bg-secondary-0 p-2 rounded-lg'}>
                {options.map(item => {
                    const isActive = currentFilter === item.value;
                    return (
                        <button
                            disabled={isActive}
                            className={` ${isActive ? 'bg-primary-900 text-white' : 'bg-secondary-0 text-secondary-800'} rounded-lg px-4 py-2 font-bold transition-all duration-300`}
                            onClick={() => handleChange(item.value)}
                            key={item.value}>
                            {item.label}
                        </button>
                        )
                })}
            </div>
        </div>
    );
}

export default Filter;