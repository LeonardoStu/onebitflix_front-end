import { Container, Form, Input } from 'reactstrap'
import style from './style.module.scss'
import Link from 'next/link'


const HeaderAuth = function () {
    return <>
        <Container className={style.nav}>
            <Link href='/home'>
                <img src="/logoOnebitflix.svg" alt="logoOneBitFlix"  className={style.imgLogoNav}/>
            </Link>
            <div className='d-flex align-items-center  '>
                <Form>
                    <Input name='search' type='search' placeholder='Pesquisar' className={style.input}/>
                </Form>
                <img src="/homeAuth/iconSearch.svg" alt="Lupa" className={style.searchImg}/>
                <p className={style.userProfile}>AB</p>
            </div>
        </Container>
    </>
}

export default HeaderAuth