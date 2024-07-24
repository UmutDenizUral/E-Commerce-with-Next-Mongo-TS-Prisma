import { IconType } from "react-icons"

interface ButtonProps {
    text: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    small?: boolean
    outline?: boolean
    icon?: IconType
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, small, outline, disabled, icon: Icon }) => {
    
    return (
        <div>

            <button disabled={disabled}
                className={` mt-2 rounded-lg p-3 ${small ? 'w-[250px]' : 'w-full'} ${outline ? 'border hover:text-orange-500 text-black' : 'bg-black text-white'}`}
                onClick={onClick}>
                {Icon && <Icon />}
                {text}
            </button>
        </div>

    )
}

export default Button