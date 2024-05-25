import FeaturesSection from "@/components/homeAuth/featuresSections"
import Head from "next/head"

const Home = function () {
    return <>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <FeaturesSection/>
        </main>
    </>
}

export default Home