import style from "../styles/seach.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseServices, { CourseType } from "@/services/courseService";
import { Container } from "reactstrap";
import SearchCard from "@/components/searchCard";
import Footer from "@/components/common/footer";
import PageSpinner from "@/components/common/spinner";

const Search = function () {
  const router = useRouter();
  const searchName: any = router.query.name;
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const searchCourses = async () => {
      if (searchName) {
        const res = await courseServices.getSearch(searchName);
        setSearchResult(res.data.courses);
      }
    };
    searchCourses();
  }, [searchName]);

  if (loading) {
    return <PageSpinner />;
  }

  return (
    <>
      <Head>
        <title>Onebitflix - {searchName}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div className={style.headerFooterBg}>
          <HeaderAuth />
        </div>
        {searchResult.length >= 1 ? (
          <div className={style.searchResult}>
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
              {searchResult?.map((course) => (
                <SearchCard key={course.id} course={course} />
              ))}
            </Container>
          </div>
        ) : (
          <div className={style.searchResult}>
            <p className={style.noSearchText}>Nenhum resultado encontrado!</p>
          </div>
        )}
        <div className={style.headerFooterBg}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;
