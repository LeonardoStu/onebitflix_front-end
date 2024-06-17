import Head from 'next/head'
import style from '../styles/profile.module.scss'
import UserForm from '@/components/profile/user'
import HeaderAuth from '@/components/common/headerAuth'
import { Button, Col, Container, Row } from 'reactstrap'
import Footer from '@/components/common/footer'
import { useEffect, useState } from 'react'
import PasswordForm from '@/components/profile/password'
import { useRouter } from 'next/router'
import PageSpinner from '@/components/common/spinner'

const UserInfo = function () {
    const router = useRouter()
    const [form, setForm] = useState('userForm')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!sessionStorage.getItem("onebitflix-token")) {
          router.push("/login");
        } else {
          setLoading(false);
        }
    }, []);

    if (loading) {
        return <PageSpinner />;
    }

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
                        <Button className={style.renderForm} style={{color: form === 'userForm' ? '#ff0044' : "white"}} onClick={() => {setForm('userForm')}}>DADOS PESSOAIS</Button>
                        <Button className={style.renderForm} style={{color: form === 'passwordForm' ? '#ff0044' : "white"}} onClick={() => {setForm('passwordForm')}}>SENHA</Button>
                    </Col>
                    <Col md>
                        {form === 'userForm' ? <UserForm/> : <PasswordForm/>}
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