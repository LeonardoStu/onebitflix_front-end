import Link from 'next/link'
import styles from './styles.module.scss'
import { Button, Container} from 'reactstrap'

const HeaderNoAuth = function () {
    return (
        <>
        <div className={styles.ctaSection}>
            <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
            <p>Se cadastre para ter acesso aos cursos</p>
            <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
        </div>
        <Container className={styles.nav}>
            <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav}/>
            <div>
                <Link href="/login"><Button outline className={styles.navBtn}>Entrar</Button></Link>
                <Link href='register'><Button outline className={styles.navBtn}>Quero fazer parte</Button></Link>
            </div>
        </Container>
        </>
    )
}

export default HeaderNoAuth