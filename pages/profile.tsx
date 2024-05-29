import Head from 'next/head'
import style from '../styles/profile.module.scss'
import UserForm from '@/components/profile/user'
import HeaderAuth from '@/components/common/headerAuth'
import { Button, Col, Container, Row } from 'reactstrap'
import Footer from '@/components/common/footer'

const UserInfo = function () {
    return <>
        <Head>
            <title>Onebitflix - Meus Dados</title>
        </Head>
        <main>
            <div className={style.header}>    
                <HeaderAuth/>
             </div>
            <Container className="py-5">
                <p className={style.title}>Minha Conta</p>
                <Row className='pt-3 pb-5'>
                    <Col md={4} className={style.btnColumn}>
                        <Button className={style.renderForm}>DADOS PESSOAIS</Button>
                        <Button className={style.renderForm}>SENHA</Button>
                    </Col>
                    <Col md>
                        <UserForm/>
                    </Col>
                </Row>
            </Container>
            <div className={style.footer}>
                <Footer/>
            </div>
        </main>
    </>
}

export default UserInfo