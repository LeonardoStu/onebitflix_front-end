import categoryService, { CategoryType } from "@/services/categoriesServices";
import useSWR from "swr";
import style from '../../../../styles/slideCategory.module.scss'
import SlideComponent from "@/components/common/slideComponent";
import PageSpinner from "@/components/common/spinner";

interface props {
    categoryId: number
    categoryName: string
}

const ListCategoriesSlides = function ({ categoryId, categoryName}: props) {
    const { data, error } = useSWR(`/categories/${categoryId}`, () => categoryService.getCourses(categoryId));
    
    if (error) return error;
    if(!data) return <PageSpinner/>

    return <>
        <p className={style.titleCategory}>{categoryName}</p>
       <SlideComponent course={data.data.courses}/>
    </>;
  };
  
export default ListCategoriesSlides;