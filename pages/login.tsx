import Head from 'next/head'
import style from '../styles/registerLogin.module.scss'
import HeaderGeneric from '@/components/common/headerGeneric'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import Footer from '@/components/common/footer'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import ToasComponent from '@/components/common/toast'
import authService from '@/services/authService'

const Login = function () {
    const router = useRouter()
    const [toastColor, setToastColor] = useState('')
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    useEffect(()=> {
        const registerSucess = router.query.registred
        if(registerSucess === 'true'){
            setToastColor('bg-success')
            setToastIsOpen(true)
            setTimeout(() => {
                setToastIsOpen(false)
           }, 1000 * 3)
           setToastMessage("Cadatro feito com sucesso!")
        }
    }, [router.query])

    const handleLogin = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        const params = { email, password }

        const { status } = await authService.login(params)

        if(status === 200) {
            router.push('/home')
        }else{
            setToastColor('bg-danger')
            setToastIsOpen(true)
            setTimeout(() => {
                setToastIsOpen(false)
           }, 1000 * 3)
           setToastMessage("Email ou senha incorretos")
        }
    }

    return <>
        <Head>
            <title>Onebitflix - Login</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main className={style.main}>
            <HeaderGeneric logoUrl='/' btnUrl='/register' btnContent='Quero fazer parte'/>

            <Container className='py-5'>
                    <p className={style.formTitle}><strong>Bem vindo(a) de volta!</strong></p>
                <Form className={style.form} onSubmit={handleLogin}>
                    <p className='text-center'><strong>Bem vindo(a) ao OneBitFlix!</strong></p>
                    <FormGroup>
                        <Label for='email' className={style.label}>E-MAIL</Label>
                        <Input id='email' name='email' type='email' placeholder='Digite seu email' required className={style.input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password' className={style.label}>SENHA</Label>
                        <Input id='password' name='password' type='password' placeholder='Digite sua senha?' required minLength={6} maxLength={20} className={style.input}/>
                    </FormGroup>
                    <Button outline className={style.formBtn} type='submit'>Entrar</Button>
                </Form>
                <ToasComponent color={toastColor} isOpen={toastIsOpen} message={toastMessage} /> 
            </Container>
            <Footer/>
        </main>
    </>
}

export default Login