import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import style from "../../../../styles/profile.module.scss"

const UserForm = function () {
    return<>
        <Form className={style.form}>
            <div className={style.formName}>
                <p className={style.nameAbbreviation}>NT</p>
                <p className={style.userName}>Name Test</p>
            </div>
            <div className={style.memberTime}>
                <img className={style.memberTimeImg} src="/profile/iconUserAccount.svg" alt="iconProfile" />
                <p className={style.memberTimeText}>
                    Membro des <br /> 20 de Abril de 2020
                </p>
            </div>
            <hr />
            <div className={style.inputFlexDiv}>
                <FormGroup>
                    <Label className={style.label} for="firstName">NOME</Label>
                    <Input name="firstName" type="text" id="firstName" placeholder="Qual o seu primeiro nome?" required maxLength={20} className={style.inputFlex} value={"Name"} />
                </FormGroup>

                <FormGroup>
                    <Label className={style.label} for="lastName">SOBRENOME</Label>
                    <Input name="lastName" type="text" id="lastName" placeholder="Qual o seu último nome?" required maxLength={20} className={style.inputFlex} value={"Test"} />
                </FormGroup>
            </div>
            <div className={style.inputNormalDiv}>
                <FormGroup>
                    <Label className={style.label} for="phone">WHATSAPP / TELEGRAM</Label>
                    <Input name="phone" type="tel" id="phone" placeholder="(xx) xxxxx-xxxx" required maxLength={20} className={style.input} value={"Name"} />
                </FormGroup>

                <FormGroup>
                    <Label className={style.label} for="email">EMAIL</Label>
                    <Input name="email" type="text" id="email" placeholder="Coloque seu email" required className={style.input} value={"test@email.com"} />
                </FormGroup>
                <Button className={style.formBtn}>Salvar alterações</Button>
            </div>
        </Form>
    </>
}

export default UserForm