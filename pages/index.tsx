import Head from "next/head"
import style from '../styles/HomeNoAuth.module.scss'
import HeaderNoAuth from "@/components/homeNoAuth/hearderNoAuth"
import PresententionSection from "@/components/homeNoAuth/presentationSection"

export const homeNoAuth = function () {
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
    </main>
  </>
}

export default homeNoAuth