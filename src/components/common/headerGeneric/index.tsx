
import { Button, Container } from 'reactstrap'
import style from './style.module.scss'
import Link from 'next/link'

interface props {
    logoUrl: string
    btnUrl: string
    btnContent: string
}

const HeaderGeneric = function ({ logoUrl, btnUrl, btnContent}: props) {
    return <>
        <div className={style.header}>
            <Container className={style.headerContainer}>
                <Link href={logoUrl}>
                    <img src="/logoOnebitflix.svg" alt="logoRegister" className={style.headerLogo} />
                </Link>
                <Link href={btnUrl}>
                    <Button outline color='light' className={style.headerBtn}>{btnContent}</Button>
                </Link>
            </Container>
        </div>
    </>
}

export default HeaderGeneric