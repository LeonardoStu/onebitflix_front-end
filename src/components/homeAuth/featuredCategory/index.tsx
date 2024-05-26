import useSWR from 'swr';
import style from '../../../../styles/slideCategory.module.scss'
import courseServices from '@/services/courseService';
import SlideComponent from '@/components/common/slideComponent';

const FeaturedCategory = function () {
    const { data, error } = useSWR("/featured", courseServices.getFeatureCourses);

    if (error) return error;
    if (!data) return <p>Loading...</p>

    return<>
        <p className={style.titleCategory}>EM DESTAQUE</p>
        <SlideComponent course={data.data}/>
    </>
}

export default FeaturedCategory