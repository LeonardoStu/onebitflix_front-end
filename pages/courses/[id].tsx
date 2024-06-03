import HeaderAuth from "@/components/common/headerAuth";
import style from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseServices, { CourseType } from "@/services/courseService";
import { Button, Container } from "reactstrap";
import PageSpinner from "@/components/common/spinner";
import EpisodeList from "@/components/episodeList";

const CoursePage = function () {
    const [course, setCourse] = useState<CourseType>() 
    const [like, setLike] = useState(false)
    const [favorited, setFavorited] = useState(false)
    const router = useRouter()
    const { id } = router.query

    const getCourse = async function () {
        if (typeof id !== "string") return;

        const res = await courseServices.getEpisodes(id);

        if (res.status === 200) {
            setCourse(res.data);
            setLike(res.data.liked)
            setFavorited(res.data.favorite)
        }
    };

    useEffect(() => {
        getCourse();
    }, [id]);
    
    const handleLikeCourse = async () => {
        if (typeof id !== "string") return

        if (like === true) {
          await courseServices.removeLike(id);
        setLike(false);
      } else {
          await courseServices.like(id);
        setLike(true);
      }
    };

    const handleFavCourse = async () => {
        if (typeof id !== "string") return

        if (favorited === true) {
          await courseServices.removeFav(id);
        setFavorited(false);
      } else {
          await courseServices.addToFav(id);
        setFavorited(true);
        }
    };

    if(course === undefined) return <PageSpinner/>

  return (
    <>
        <Head>
            <title>Onebitflix - {course?.name}</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <div style={{backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "450px"}}>
                <HeaderAuth />
            </div>
            <Container className={style.courseInfo}>
                <p className={style.courseTitle}>{course?.name}</p>
                <p className={style.courseDescription}>{course?.synopsis}</p>
                <Button className={style.courseBtn} outline>
                    ASSISTIR AGORA!
                    <img src="/buttonPlay.svg" alt="buttonImg" className={style.buttonImg}/>
                </Button>
                <div className={style.interactions}>
                    {like === false ? (<img src="/course/iconLike.svg" alt="Like" className={style.interactionImg} onClick={handleLikeCourse} />) : (<img src="/course/iconLiked.svg" alt="Like" className={style.interactionImg} onClick={handleLikeCourse} />)}
                    {favorited === false ? (<img src="/course/iconAddFav.svg" alt="Like" className={style.interactionImg} onClick={handleFavCourse}/>) : (<img src="/course/iconFavorited.svg" alt="Like" className={style.interactionImg} onClick={handleFavCourse}/>)}
                </div>
            </Container>
            <Container className={style.episodeInfo}>
              <p className={style.episodeDivision}>EPISÓDIOS</p>
              <p className={style.episodeLenght}>
                {course?.episodes?.length} episódios
              </p>
              {course?.episodes?.map((episode) => (
                <EpisodeList key={episode.id} episode={episode}/>
              ))}
            </Container>
        </main>
    </>
  );
};

export default CoursePage;