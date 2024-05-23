import { Container } from 'reactstrap'
import style from './style.module.scss'

const Footer = function () {
    return <>
        <Container className={style.footer}>
            <img src="/logoOnebitcode.svg" alt="logoFooter" className={style.footerLogo}/>
            <a href="/http://onebitcode.com" target={'_blank'} className={style.footerLink}>ONEBITCODE.COM</a>
        </Container>
    </>
}

export default Footer