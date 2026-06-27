import {useCategories} from "../../../hooks/useCategories.js";
import FilterDropDown from "../../../ui/FilterDropDown.jsx";

function ProjectsHeader() {

    const {transformedCategory} = useCategories()


    return (
        <div className={'flex justify-between items-center mb-8'}>
            <h2 className={'font-normal text-lg'}>پروژه های باز شما</h2>
            <div>
                <FilterDropDown options={[{label: 'همه' , value: 'ALL'} , ...transformedCategory]}/>
            </div>
        </div>
    );
}

export default ProjectsHeader;