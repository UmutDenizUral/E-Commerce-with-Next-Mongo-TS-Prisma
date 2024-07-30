'use client'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link"

const LoginClient = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>()
    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        console.log(data)
    }
    return (

        <AuthContainer>
            <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
                <Heading text="Login" center />
                <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
                <Input placeholder="Parola" type="password" id="password" register={register} errors={errors} required />
                <Button text="Giriş Yap" onClick={handleSubmit(onSubmit)} />
                <div className="text-center my-2 text-sm text-red-400">Daha önce Kayıt olmadıysa <Link className="underline" href='/register'>buraya tıkla</Link></div>
                <div className="text-center my-2 text-lg font-bold">OR</div>
                <Button text="Google ile Giriş Yap" icon={FaGoogle} outline onClick={() => []} />

            </div>
        </AuthContainer>

    )
}

export default LoginClient