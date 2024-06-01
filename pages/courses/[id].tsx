import HeaderAuth from "@/components/common/headerAuth";
import style from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseServices, { CourseType } from "@/services/courseService";

const CoursePage = function () {
    const [course, setCourse] = useState<CourseType>() 
    const router = useRouter()
    const { id } = router.query

    const getCourse = async function () {
        if (typeof id !== "string") return;

        const res = await courseServices.getEpisodes(id);

        if (res.status === 200) {
            setCourse(res.data);
        }
    };

    useEffect(() => {
        getCourse();
    }, [id]);

  return (
    <>
        <Head>
            <title>Onebitflix - {course?.name}</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <HeaderAuth />
            <p>{course?.name}</p>
        </main>
    </>
  );
};

export default CoursePage;