import { Container } from 'reactstrap'
import style from './style.module.scss'

const CardsSection = function () {
    return <>
        <p className={style.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
        <Container className='d-flex flex-wrap justify-content-center gap-4 pb-4'>
            <div className={style.card1}>
                <p className={style.cardTitle}>FRONT-END</p>
                <p className={style.cardDescription}>
                O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
				ter acesso às práticas avançadas de programação, atualizações de
				tecnologias e todo o suporte técnico necessário para ser um sênior na programação.
                </p>
            </div>
            <div className={style.card2}>
                <p className={style.cardTitle}>BACK-END</p>
                <p className={style.cardDescription}>
                O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
				ter acesso às práticas avançadas de programação, atualizações de
				tecnologias e todo o suporte técnico necessário para ser um sênior na programação.
                </p>
            </div>
            <div className={style.card3}>
                <p className={style.cardTitle}>MOBILE</p>
                <p className={style.cardDescription}>
                O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
				ter acesso às práticas avançadas de programação, atualizações de
				tecnologias e todo o suporte técnico necessário para ser um sênior na programação.
                </p>
            </div>
            <div className={style.card4}>
                <p className={style.cardTitle}>GIT E GITHUB</p>
                <p className={style.cardDescription}>
                O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
				ter acesso às práticas avançadas de programação, atualizações de
				tecnologias e todo o suporte técnico necessário para ser um sênior na programação.
                </p>
            </div>
            <div className={style.card5}>
                <p className={style.cardTitle}>PROJETOS</p>
                <p className={style.cardDescription}>
                O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
				ter acesso às práticas avançadas de programação, atualizações de
				tecnologias e todo o suporte técnico necessário para ser um sênior na programação.
                </p>
            </div>
            <div className={style.card6}>
                <p className={style.cardTitle}>CARREIRA</p>
                <p className={style.cardDescription}>
                O Onebitcode Black é o lugar para você evoluir. Para isso, você vai
				ter acesso às práticas avançadas de programação, atualizações de
				tecnologias e todo o suporte técnico necessário para ser um sênior na programação.
                </p>
            </div>
        </Container>
    </>
}

export default CardsSection