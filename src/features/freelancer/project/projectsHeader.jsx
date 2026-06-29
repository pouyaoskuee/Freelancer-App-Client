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
        <div className={'flex justify-between items-center mb-8'}>
            <h2 className={'font-normal text-lg'}>پروژه های باز شما</h2>
            <div className={'flex gap-4'}>
                <Filter filterField={'status'} options={statusOption} />
                <FilterDropDown filterField={'category'} options={[{label: 'همه' , value: 'ALL'} , ...transformedCategory]}/>
                <FilterDropDown filterField={'sort'} options={sortOption}/>
            </div>
        </div>
    );
}

export default ProjectsHeader;