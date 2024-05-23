import Head from 'next/head'
import style from '../styles/registerLogin.module.scss'
import HeaderGeneric from '@/components/common/headerGeneric'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import Footer from '@/components/common/footer'

const Register = function () {
    return <>
        <Head>
            <title>Onebitflix - Registro</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            <script src="https://jsuites.net/v4/jsuites.js"></script>
        </Head>
        <main className={style.main}>
            <HeaderGeneric logoUrl='/' btnUrl='/login' btnContent='Quero fazer login'/>
        <Container className='py-5'>
            <p className={style.formTitle}>Bem vindo(a) ao OneBitFlix!</p>
            <Form className={style.form}>
                <p className='text-center'><strong>Faça a sua conta!</strong></p>
                {/* name */}
                <FormGroup>
                    <Label for='firstName' className={style.label}>NOME</Label>
                    <Input id='firstName' name='firstName' type='text' placeholder='Qual é o seu nome?' required maxLength={20} className={style.inputName}/>
                </FormGroup>
                {/* lestname */}
                <FormGroup>
                    <Label for='lastName' className={style.label}>SOBRENOME</Label>
                    <Input id='lastName' name='lastName' type='text' placeholder='Qual é o seu sobrenome?' required maxLength={20} className={style.inputName}/>
                </FormGroup>
                {/* phone */}
                <FormGroup>
                    <Label for='phone' className={style.label}>WHATSAPP / TELAGRAM</Label>
                    <Input id='phone' name='phone' type='tel' placeholder='(xx) 9xxxx-xxxx'  data-mask="[-]+55 (00) 00000-0000" required className={style.input}/>
                </FormGroup>
                {/* email */}
                <FormGroup>
                    <Label for='email' className={style.label}>E-MAIL</Label>
                    <Input id='email' name='email' type='email' placeholder='Digite seu email' required className={style.input}/>
                </FormGroup>
                {/* birth */}
                <FormGroup>
                    <Label for='birth' className={style.label}>DATA DE NASCIMENTO</Label>
                    <Input id='birth' name='birth' type='date' min='1930-01-01' max='2024-12-31' required className={style.input}/>
                </FormGroup>
                {/* password */}
                <FormGroup>
                    <Label for='password' className={style.label}>SENHA</Label>
                    <Input id='password' name='password' type='password' placeholder='Digite seu senha (Min: 6 | max: 20)' required minLength={6} maxLength={20} className={style.input}/>
                </FormGroup>
                {/* confirmpassword */}
                <FormGroup>
                    <Label for='password' className={style.label}>CONFIRME SUA SENHA</Label>
                    <Input id='password' name='password' type='password' placeholder='Confirme a sua senha' required minLength={6} maxLength={20} className={style.input}/>
                </FormGroup>
                <Button type='submit' outline className={style.formBtn}>Cadastrar</Button>
            </Form>
        </Container>
        <Footer/>
        </main>
    </>
}

export default Register