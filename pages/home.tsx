import Footer from "@/components/common/footer"
import PageSpinner from "@/components/common/spinner"
import FavoriteCourse from "@/components/homeAuth/faforiteCategory"
import FeaturedCategory from "@/components/homeAuth/featuredCategory"
import FeaturesSection from "@/components/homeAuth/featuresSections"
import ListCategories from "@/components/homeAuth/listCategories"
import NewestCategory from "@/components/homeAuth/newestCategory"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Home = function () {
    const router = useRouter()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!sessionStorage.getItem("onebitflix-token")) {
          router.push("/login");
        } else {
          setLoading(false);
        }
    }, []);

    if (loading) {
        return <PageSpinner />;
    }

    return <>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <FeaturesSection/>
            <NewestCategory/>
            <FavoriteCourse/>
            <FeaturedCategory/>
            <ListCategories/>
            <Footer/>
        </main>
    </>
}

export default Home