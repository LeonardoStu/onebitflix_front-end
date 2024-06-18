import Head from 'next/head'
import style from '../styles/registerLogin.module.scss'
import HeaderGeneric from '@/components/common/headerGeneric'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import Footer from '@/components/common/footer'
import { FormEvent, useEffect, useState } from 'react'
import authService from '@/services/authService'
import { useRouter } from 'next/router'
import ToasComponent from '@/components/common/toast'
import Script from 'next/script'

const Register = function () {
    const router = useRouter()
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    useEffect(() => {
        if(sessionStorage.getItem('onebitflix-token')){
            router.push('/home')
        }
    }, [])

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const firstName = formData.get('firstName')!.toString()
        const lastName = formData.get('lastName')!.toString()
        const phone = formData.get('phone')!.toString()
        const birth = formData.get('birth')!.toString()
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        const confirmpassword = formData.get('confirmpassword')!.toString()
        const params = { firstName, lastName, phone, birth, email, password}

        if(password !== confirmpassword) {
           setToastIsOpen(true)
           setTimeout(() => {
            setToastIsOpen(false)
           }, 1000 * 3)
           setToastMessage('Senha e confimação diferentes')
           return
        }

        const {data, status} = await authService.register(params)

        if(status === 201){
            router.push('/login?registred=true')

        }else{
            setToastIsOpen(true)
            setTimeout(() => {
                setToastIsOpen(false)
           }, 1000 * 3)
           setToastMessage(data.message)
           return
        }
    }

    return <>
        <Head>
            <title>Onebitflix - Registro</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main className={style.main}>
        <Script src="https://jsuites.net/v4/jsuites.js" strategy="afterInteractive" />
            <HeaderGeneric logoUrl='/' btnUrl='/login' btnContent='Quero fazer login'/>
        <Container className='py-5'>
            <p className={style.formTitle}>Bem vindo(a) ao OneBitFlix!</p>
            <Form className={style.form} onSubmit={handleRegister}>
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
                    <Label for='confirmpassword' className={style.label}>CONFIRME SUA SENHA</Label>
                    <Input id='confirmpassword' name='confirmpassword' type='password' placeholder='Confirme a sua senha' required minLength={6} maxLength={20} className={style.input}/>
                </FormGroup>
                <Button type='submit' outline className={style.formBtn}>Cadastrar</Button>
            </Form>
        </Container>
        <Footer/>
        <ToasComponent color='bg-danger' isOpen={toastIsOpen} message={toastMessage}/>
        </main>
    </>
}

export default Register