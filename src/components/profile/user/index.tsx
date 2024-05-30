import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import style from "../../../../styles/profile.module.scss"
import { FormEvent, useEffect, useState } from "react"
import profileServices from "@/services/profileService"
import ToasComponent from "@/components/common/toast"
import { useRouter } from "next/router"

const UserForm = function () {
    const router = useRouter()
    const [color, setColor] = useState("");
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [initalEmail, setInitialEmail] = useState('')
    const [ firstName, setFirstName] = useState('')
    const [ lastName, setlastName] = useState('')
    const [ phone, setPhone] = useState('')
    const [ email, setEmail] = useState('')
    const [ created_at, setCreated_at] = useState('')
    const date = new Date(created_at)
    const month = date.toLocaleDateString('default', { month: 'long'})

    useEffect(() => {
        profileServices.fetchCurrent().then((user) => {
            setFirstName(user.firstName)
            setlastName(user.lastName)
            setPhone(user.phone)
            setEmail(user.email)
            setInitialEmail(user.email)
            setCreated_at(user.createdAt)
        })
    }, [])

    const handleUserUpdate = async function (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const res = await profileServices.userUpdate({
            firstName,
            lastName,
            phone,
            email,
            created_at
        });

        if (res === 200) {
            setToastIsOpen(true);
            setErrorMessage("Informações alteradas com sucesso!");
            setColor("bg-success");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
            if(email != initalEmail) {
                sessionStorage.clear()
                router.push('/')
            }
        } else {
            setToastIsOpen(true);
            setErrorMessage("Você não pode mudar para esse email!");
            setColor("bg-danger");
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
        }
    }

    return<>
        <Form onSubmit={handleUserUpdate} className={style.form}>
            <div className={style.formName}>
                <p className={style.nameAbbreviation}>
                    {firstName.slice(0, 1)}
                    {lastName.slice(0, 1)}
                </p>
                <p className={style.userName}>{`${firstName} ${lastName}`}</p>
            </div>
            <div className={style.memberTime}>
                <img className={style.memberTimeImg} src="/profile/iconUserAccount.svg" alt="iconProfile" />
                <p className={style.memberTimeText}>
                    Membro des <br /> {`${date.getDate()} de ${month} de ${date.getFullYear()}`}
                </p>
            </div>
            <hr />
            <div className={style.inputFlexDiv}>
                <FormGroup>
                    <Label className={style.label} for="firstName">NOME</Label>
                    <Input name="firstName" type="text" id="firstName" placeholder="Qual o seu primeiro nome?" required maxLength={20} className={style.inputFlex} value={firstName} onChange={(ev) => setFirstName(ev.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label className={style.label} for="lastName">SOBRENOME</Label>
                    <Input name="lastName" type="text" id="lastName" placeholder="Qual o seu último nome?" required maxLength={20} className={style.inputFlex} value={lastName} onChange={(ev) => setlastName(ev.target.value)}/>
                </FormGroup>
            </div>
            <div className={style.inputNormalDiv}>
                <FormGroup>
                    <Label className={style.label} for="phone">WHATSAPP / TELEGRAM</Label>
                    <Input name="phone" type="tel" id="phone" placeholder="(xx) xxxxx-xxxx" required maxLength={20} className={style.input} value={phone} onChange={(ev) => setPhone(ev.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label className={style.label} for="email">EMAIL</Label>
                    <Input name="email" type="text" id="email" placeholder="Coloque seu email" required className={style.input} value={email} onChange={(ev) => setEmail(ev.target.value)}/>
                </FormGroup>
                <Button className={style.formBtn}>Salvar alterações</Button>
            </div>
        </Form>
        <ToasComponent color={color} isOpen={toastIsOpen} message={errorMessage} />
    </>
}

export default UserForm