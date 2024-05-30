import { Container, Form, Input } from 'reactstrap'
import style from './style.module.scss'
import Link from 'next/link'
import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import profileServices from '@/services/profileService'

Modal.setAppElement('#__next')

const HeaderAuth = function () {
    const router = useRouter()
    const [OpenModal, setOpenModal] = useState(false)
    const [initial, setInitial] = useState('')

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
                <p className={style.userProfile} onClick={handleOpenModal}>{initial}</p>
            </div>
            <Modal isOpen={OpenModal} onRequestClose={handleCloseModal} shouldCloseOnEsc={true} className={style.modal} overlayClassName={style.overlayModal}>
                <Link href='/profile'>
                    <p className={style.modalLink}>Meus dados</p>
                </Link>
                <p className={style.modalLink} onClick={handleLogout}>Sair</p>
            </Modal>
        </Container>
    </>
}

export default HeaderAuth