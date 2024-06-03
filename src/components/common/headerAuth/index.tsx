import { Container, Form, Input } from 'reactstrap'
import style from './style.module.scss'
import Link from 'next/link'
import Modal from 'react-modal'
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import profileServices from '@/services/profileService'

Modal.setAppElement('#__next')

const HeaderAuth = function () {
    const router = useRouter()
    const [OpenModal, setOpenModal] = useState(false)
    const [initial, setInitial] = useState('')
    const [searchName, setSearchName] = useState('')


    useEffect(() => {
        profileServices.fetchCurrent().then((user) => {
            const firstName = user.firstName.slice(0, 1)
            const lastName = user.lastName.slice(0, 1)
            setInitial(firstName + lastName)
        })
    },[])

    const handleOpenModal = function () {
        setOpenModal(true)
    }

    const handleCloseModal = function () {
        setOpenModal(false)
    }

    const handleLogout = function () {
        sessionStorage.clear()

        router.push('/')
    }

    const heandleSearch = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault() 

        router.push(`/search?name=${searchName}`)
        setSearchName('')
    }

    const heandleSearchClick = async () => {
        router.push(`/search?name=${searchName}`)
        setSearchName('')
    }

    return <>
        <Container className={style.nav}>
            <Link href='/home'>
                <img src="/logoOnebitflix.svg" alt="logoOneBitFlix"  className={style.imgLogoNav}/>
            </Link>
            <div className='d-flex align-items-center  '>
                <Form onSubmit={heandleSearch}>
                    <Input name='search' type='search' placeholder='Pesquisar' className={style.input} value={searchName} onChange={(ev) => {setSearchName(ev.currentTarget.value.toLocaleLowerCase())}}/>
                </Form>
                <img src="/homeAuth/iconSearch.svg" alt="Lupa" className={style.searchImg} onClick={heandleSearchClick}/>
                <p className={style.userProfile} onClick={handleOpenModal}>{initial}</p>
            </div>
            <Modal isOpen={OpenModal} onRequestClose={handleCloseModal} shouldCloseOnEsc={true} className={style.modal} overlayClassName={style.overlayModal}>
                <Link href='/profile' className={style.link}>
                    <p className={style.modalLink}>Meus dados</p>
                </Link>
                <p className={style.modalLink} onClick={handleLogout}>Sair</p>
            </Modal>
        </Container>
    </>
}

export default HeaderAuth