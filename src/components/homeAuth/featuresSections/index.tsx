import style from './style.module.scss'
import useSWR from 'swr'
import courseServices, { CourseType } from '@/services/courseService'
import HeaderAuth from '@/components/common/headerAuth'
import { Button, Container } from 'reactstrap'
import Link from 'next/link'

const FeaturesSection = function (){
    const { data, error } = useSWR('/featured', courseServices.getFeatureCourses)

    if(error) return error
    if(!data) return<><p>Loanding...</p></>

    return <>
        {data.data?.map((course: CourseType) =>(
            <div 
            style=
                {{backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '480px'
            }} key={course.id}>
                <HeaderAuth/>
                <Container className='pt-4'>
                    <p className={style.title}>{course.name}</p>
                    <p className={style.description}>{course.synopsis}</p>
                    <Link href={`/course/${course.id}`}>
                        <Button outline color='light' className={style.button}>  
                            ACESSE AGORA!
                            <img src="/buttonPlay.svg" alt="buttonImg" className={style.buttonImg}/>
                        </Button>
                    </Link>
                </Container>
            </div>
        ))[0]}
    </>
}

export default FeaturesSection