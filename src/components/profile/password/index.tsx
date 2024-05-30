import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import style from '../../../../styles/profile.module.scss'
import { FormEvent, useEffect, useState } from 'react'
import profileServices from '@/services/profileService'
import ToasComponent from '@/components/common/toast'

const PasswordForm = function () {
    const [color, setColor] = useState("");
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    useEffect(() => {
        profileServices.fetchCurrent().then((password) => {
            setCurrentPassword(password.currentPassword)
            setNewPassword(password.newPassword)
        })
    }, [])

    const handlePasswordUpdate = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        if(newPassword !== confirmNewPassword){
            setToastIsOpen(true);
            setErrorMessage("Senha e confirmação de senha diferentes!");
            setColor("bg-danger");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
            return;
        }
        if (currentPassword === newPassword) {
            setToastIsOpen(true);
            setErrorMessage("Não coloque a nova senha igual a senha antiga!");
            setColor("bg-danger");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
            return;
        }

        const res = await profileServices.passwordUpdate({currentPassword, newPassword})

        if (res === 204) {
            setToastIsOpen(true);
            setErrorMessage("Senha alterada com sucesso!");
            setColor("bg-success");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
      
            setCurrentPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
        }

        if (res === 400) {
            setToastIsOpen(true);
            setErrorMessage("Senha atual incorreta!");
            setColor("bg-danger");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
        }
    }



    return <>
        <Form onSubmit={handlePasswordUpdate} className={style.form}>
            <div className={style.inputNormalDiv}>
                <FormGroup>
                    <Label className={style.label} for="currentPassword">SENHA ATUAL</Label>
                    <Input name='currentPassword' type='password' id='currentPassword' placeholder='******' required minLength={6} maxLength={12} className={style.input} value={currentPassword} onChange={(ev) => {setCurrentPassword(ev.target.value)}} />
                </FormGroup>
            </div>
            <div className={style.inputFlexDiv}>
                <FormGroup>
                    <Label className={style.label} for="newPassword">NOVA SENHA</Label>
                    <Input name='newPassword' type='password' id='newPassword' placeholder='******' required minLength={6} maxLength={12} className={style.inputFlex} value={newPassword} onChange={(ev) => {setNewPassword(ev.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label className={style.label} for="confirmNewPassword">CONFIRME NOVA SENHA</Label>
                    <Input name='confirmNewPassword' type='password' id='confirmNewPassword' placeholder='******' required minLength={6} maxLength={12} className={style.inputFlex} value={confirmNewPassword} onChange={(ev) => {setConfirmNewPassword(ev.target.value)}}/>
                </FormGroup>
            </div>
            <Button type='submit' outline className={style.formBtn}>
                Salvar alterações
            </Button>
        </Form>
        <ToasComponent color={color} isOpen={toastIsOpen} message={errorMessage} />
    </>
}

export default PasswordForm