import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import style from '../../../../styles/profile.module.scss'

const PasswordForm = function () {
    return <>
        <Form className={style.form}>
            <div className={style.inputNormalDiv}>
                <FormGroup>
                    <Label className={style.label} for="currentPassword">SENHA ATUAL</Label>
                    <Input name='currentPassword' type='password' id='currentPassword' placeholder='******' required minLength={6} maxLength={12} className={style.input} />
                </FormGroup>
            </div>
            <div className={style.inputFlexDiv}>
                <FormGroup>
                    <Label className={style.label} for="newPassword">NOVA SENHA</Label>
                    <Input name='newPassword' type='password' id='newPassword' placeholder='******' required minLength={6} maxLength={12} className={style.inputFlex} />
                </FormGroup>
                <FormGroup>
                    <Label className={style.label} for="confirmNewPassword">CONFIRME NOVA SENHA</Label>
                    <Input name='confirmNewPassword' type='password' id='confirmNewPassword' placeholder='******' required minLength={6} maxLength={12} className={style.inputFlex} />
                </FormGroup>
            </div>
            <Button outline className={style.formBtn}>
                Salvar alterações
            </Button>
        </Form>
    </>
}

export default PasswordForm