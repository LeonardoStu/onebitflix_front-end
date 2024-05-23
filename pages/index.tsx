import Head from "next/head"
import style from '../styles/HomeNoAuth.module.scss'
import HeaderNoAuth from "@/components/homeNoAuth/hearderNoAuth"
import PresententionSection from "@/components/homeNoAuth/presentationSection"
import CardsSection from "@/components/homeNoAuth/cardSection"
import SlideSection from "@/components/homeNoAuth/slideSection"
import { GetStaticProps } from "next"
import courseServices, { CourseType } from "@/services/courseService"
import { ReactNode } from "react"

interface IndexPageProps {
  chrildren?: ReactNode
  course: CourseType[]
}

export const homeNoAuth = function ({ course }: IndexPageProps) {
  return<>
    <Head>
      <title>Onebitflix</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <meta property="og:title" content="Onebitflix" key="title" />
      <meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."></meta>
    </Head>

    <main>
      <div className={style.sectionBackground}>
        <HeaderNoAuth/>
        <PresententionSection/>
      </div>
      <CardsSection/>
      <SlideSection newestCourses={course}/> 
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

export default homeNoAuth