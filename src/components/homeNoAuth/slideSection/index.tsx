import SlideComponent from "@/components/common/slideComponent"
import Link from "next/link"
import { Button, Container } from "reactstrap"
import style from './style.module.scss'
import { CourseType } from "@/services/courseService"

interface props {
    newestCourses: CourseType[]
}

const SlideSection = function ({ newestCourses }: props){
    return <>
        <Container className='d-flex flex-column align-items-center py-5'>
            <p className={style.sectionTitle}>AULAS JÁ DISPONIVES</p>
            <SlideComponent course={newestCourses}/>
            <Link href='/register'> 
                <Button className={style.slideSectionBtn} outline color='light'>Se cadastre para acessar!</Button> 
            </Link>
        </Container>
    </>
}

export default SlideSection