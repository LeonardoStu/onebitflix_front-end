import categoryService, { CategoryType } from "@/services/categoriesServices";
import useSWR from "swr";
import ListCategoriesSlides from "../listCategoriesSlide";
import PageSpinner from "@/components/common/spinner";

const ListCategories = function () {
    const { data, error } = useSWR("/categories", categoryService.getCategories);
    
    if (error) return error;
    if(!data) return <PageSpinner/>

    return <>
        {data.data.categories?.map((category: CategoryType) => (
            // <div key={category.id}>
            //     <p>{category.name}</p>
            // </div>

            <ListCategoriesSlides key={category.id} categoryId={category.id} categoryName={category.name}/>
        ))}
    </>;
  };
  
export default ListCategories;