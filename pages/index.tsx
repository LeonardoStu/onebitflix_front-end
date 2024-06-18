import Head from "next/head"
import style from '../styles/HomeNoAuth.module.scss'
import HeaderNoAuth from "@/components/homeNoAuth/hearderNoAuth"
import PresententionSection from "@/components/homeNoAuth/presentationSection"
import CardsSection from "@/components/homeNoAuth/cardSection"
import SlideSection from "@/components/homeNoAuth/slideSection"
import { GetStaticProps } from "next"
import courseServices, { CourseType } from "@/services/courseService"
import { ReactNode, useEffect } from "react"
import Footer from "@/components/common/footer"
import 'aos/dist/aos.css'
import AOS from 'aos'

interface IndexPageProps {
  chrildren?: ReactNode
  course: CourseType[]
}

export const HomeNoAuth = function ({ course }: IndexPageProps) {

  useEffect(()=> {
    AOS.init()
  }, [])

  return<>
    <Head>
      <title>Onebitflix</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <meta property="og:title" content="Onebitflix" key="title" />
      <meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."></meta>
    </Head>

    <main>
      <div className={style.sectionBackground} data-aos='fade-zoom-in' data-aos-duration='1600'>
          <HeaderNoAuth/> 
          <PresententionSection/>
        </div>
        <div data-aos='fade-right' data-aos-duration='1200'>
          <CardsSection />
        </div>
        <div data-aos='fade-up' data-aos-duration='1350'>
          <SlideSection newestCourses={course}/>
        </div> 
        <Footer/>
    </main>
  </>
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseServices.getNewestCourse()
  return {
    props: {
      course: res.data
    },
    revalidate: 3600 * 24
  }
}

export default HomeNoAuth