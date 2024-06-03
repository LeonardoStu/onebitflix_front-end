import { CourseType } from '@/services/courseService'
import style from './style.module.scss'
import Link from 'next/link'

interface props {
    course: CourseType
}

const SlideCard = function ({ course }: props) {
    return <>
        <Link href={`/courses/${course.id}`} className={style.link}>
            <div className={style.slide}>
                <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} className={style.slideImg}/>
                <p className={style.slideTitle}>{course.name}</p>
                <p className={style.slideDescription}>{course.synopsis}</p>
            </div>
        </Link>
    </>
}

export default SlideCard