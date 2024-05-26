import categoryService, { CategoryType } from "@/services/categoriesServices";
import useSWR from "swr";
import ListCategoriesSlides from "../listCategoriesSlide";

const ListCategories = function () {
    const { data, error } = useSWR("/listCategories", categoryService.getCategories);
    
    if (error) return error;
    if (!data) return <p>Loading...</p>;

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