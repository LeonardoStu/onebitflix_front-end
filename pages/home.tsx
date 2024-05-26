import FavoriteCourse from "@/components/homeAuth/faforiteCategory"
import FeaturedCategory from "@/components/homeAuth/featuredCategory"
import FeaturesSection from "@/components/homeAuth/featuresSections"
import NewestCategory from "@/components/homeAuth/newestCategory"
import Head from "next/head"

const Home = function () {
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
        </main>
    </>
}

export default Home