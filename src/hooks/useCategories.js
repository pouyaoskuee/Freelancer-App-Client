import {getAllCategories} from "../services/categoryServices.js";
import {useQuery} from "@tanstack/react-query";

export function useCategories() {
    const {isPending,data} = useQuery({
        queryFn: getAllCategories,
        queryKey: ['categories'],
    })

    const {categories:rowCategories=[]} =  data || {}

    const categories = rowCategories.map(category => {
        return {
            label: category.title,
            value: category._id,
        }
    })

    return {categories , isPending}
}

