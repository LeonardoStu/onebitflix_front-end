import FavoriteCourse from "@/components/homeAuth/faforiteCategory"
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
        </main>
    </>
}

export default Home