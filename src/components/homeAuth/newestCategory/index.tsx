import useSWR from "swr";
import courseService from "../../../services/courseService";
import SlideComponent from "@/components/common/slideComponent";
import style from '../../../../styles/slideCategory.module.scss'

const NewestCategory = function () {
    const { data, error } = useSWR("/newest", courseService.getNewestCourse);

    if (error) return error;
    if (!data) return <p>Loading...</p>

    return <>
        <p className={style.titleCategory}>LANÇAMENTOS</p>
        <SlideComponent course={data.data}/>
    </>;
      
}

export default NewestCategory;