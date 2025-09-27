import type { UseFormRegister, RegisterOptions } from "react-hook-form";

interface InputProps{
    placeholder: string;
    name: string;
    type: string;
    error?: string;
    register: UseFormRegister<any>;
    rules?: RegisterOptions;
}
export function Input({placeholder, name, type, register, rules, error}: InputProps){
    return (
        <div>
            <input 
                className="w-full border-2 rounded-md h-11 px-2"
                placeholder={placeholder} 
                type={type}
                {...register(name, rules)}
                id={name}
            />
            {error && <p className="my-1 text-red-500">{ error }</p>}
        </div>
    )
}