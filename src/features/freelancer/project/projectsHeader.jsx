import {useCategories} from "../../../hooks/useCategories.js";
import FilterDropDown from "../../../ui/FilterDropDown.jsx";
import Filter from "../../../ui/Filter.jsx";

function ProjectsHeader() {

    const {transformedCategory} = useCategories()
    const sortOption = [
        {
            label: "جدید ترین",
            value:'latest'
        },
        {
            label: "قدیمی ترین",
            value:'earliest'
        },
    ]

    const statusOption = [
        {
            label: "همه",
            value:'ALL'
        },
        {
            label: "باز",
            value:'OPEN'
        },
        {
            label: "بسته",
            value:'CLOSED'
        },
    ]


    return (
        <div className={'flex flex-col justify-between items-center mb-4'}>
            <h2 className={'text-center font-semibold mb-10 text-base sm:text-xl'}>همه پروژه ها</h2>
            <div className={'flex flex-col items-center gap-4 w-full px-4 font-medium'}>
                <Filter filterField={'status'} options={statusOption} />
                <div className={'w-full flex justify-between gap-4'}>
                    <FilterDropDown label={'دسته بندی'} filterField={'category'} options={[{label: 'همه' , value: 'ALL'} , ...transformedCategory]}/>
                    <FilterDropDown label={'بر اساس'} filterField={'sort'} options={sortOption}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectsHeader;