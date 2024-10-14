import { useForm, SubmitHandler } from "react-hook-form"

type FormInputs = {
    email: string;
    password: string;
}

const onSubmit = (myForm: FormInputs) => {
    console.log({ myForm });
}


const Formspage = () => {

    const { register,

    } = useForm<FromInputs>({
        defaultValues: {
            email: 'rqm@outlook.es',
            password: '123456',
        }
    });
    return (
        <>
            <form>
                <h3>Formularios</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="text" placeholder="Email" {...register('email')} />
                    <input type="text" placeholder="password" {...register('password')} />
                    <button type="submit">Ingresar</button>
                </div>
            </form>
        </>
    )
}

export default Formspage