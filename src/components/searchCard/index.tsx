import { CourseType } from '@/services/courseService';
import style from './style.module.scss';
import Link from 'next/link';

interface props {
    course: CourseType
}

const SearchCard = function ({course}: props) {
    return <>
        <Link href={`/courses/${course.id}`} className='text-decoration-none'>
            <div className={style.searchCard}>
                <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} className={style.searchImg}/>
                <p className={style.searchCardTitle}>{course.name}</p>
                <p className={style.searchCardDescription}>{course.synopsis}</p>
            </div>
        </Link>
    </>
}

export default SearchCard