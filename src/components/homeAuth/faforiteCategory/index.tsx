import useSWR from 'swr';
import style from '../../../../styles/slideCategory.module.scss'
import courseServices from '@/services/courseService';
import SlideComponent from '@/components/common/slideComponent';
import PageSpinner from '@/components/common/spinner';

const FavoriteCourse = function () {
    const { data, error } = useSWR("/favorites", courseServices.getFavCourse);

    if (error) return error;
    if(!data) return <PageSpinner/>

    return<>
        <p className={style.titleCategory}>MINHA LISTA</p>
        {data.data.courses.length >= 1 ? (
            <SlideComponent course={data.data.course}/>
        ) : (
            <p className='text-center pt-3 h5'>
                <strong>Você não tem nenhum curso na lista!</strong>
            </p>
        )}
    </>
}

export default FavoriteCourse