import useSWR from 'swr';
import style from '../../../../styles/slideCategory.module.scss'
import courseServices from '@/services/courseService';
import SlideComponent from '@/components/common/slideComponent';
import PageSpinner from '@/components/common/spinner';

const FeaturedCategory = function () {
    const { data, error } = useSWR("/featured", courseServices.getFeatureCourses);

    if (error) return error;
    if(!data) return <PageSpinner/>

    return<>
        <p className={style.titleCategory}>EM DESTAQUE</p>
        <SlideComponent course={data.data}/>
    </>
}

export default FeaturedCategory