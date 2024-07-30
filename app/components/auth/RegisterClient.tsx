'use client'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link"

const RegisterClient = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    return (

        <AuthContainer>
            <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
                <Heading text="Register" center />
                <Input placeholder="Ad" type="text" id="name" register={register} errors={errors} required />
                <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
                <Input placeholder="Parola" type="password" id="password" register={register} errors={errors} required />
                <Button text="Kayıt Ol" onClick={handleSubmit(onSubmit)} />
                <div className="text-center my-2 text-sm text-red-400">Hesabın varsa <Link className="underline" href='/login'>buraya tıkla</Link></div>

                <div className="text-center my-2 text-lg font-bold">OR</div>
                <Button text="Google ile üye ol" icon={FaGoogle} outline onClick={() => []} />

            </div>
        </AuthContainer>

    )
}

export default RegisterClient