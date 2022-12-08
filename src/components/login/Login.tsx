import { FaTimesCircle } from 'react-icons/fa';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios'

//http://localhost:8000/validateUser

type Props = {
    modalState: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
};

type FormType = {
    email: string
    password: string
};
type FormData =  {
    user: any
  }
const Login = ({ modalState, setModalState }: Props) => {
    const [activeClass, SetActiveClass] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormType>({
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(
            { ...formData, [e.target.name]: e.target.value }
        )
    }
    const validateUser = async (dataToSend: any) => {
        try {
            const response = await axios.post<FormData>(
                'https://backend-matcher-production.up.railway.app/validateUser',
                dataToSend,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );
    
            if (response.status === 200) {
                console.log(response.data)
                localStorage.setItem("userLoged", JSON.stringify(response.data.user))
                navigate("/feed")
            }
        } catch (e) {
            console.error(e)
        }
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        validateUser(formData)
        
    }

    const handleClose = () => {
        SetActiveClass(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
    }

    return (
        <>
        {modalState ?
        <>
        <div className='w-full h-full fixed top-0 left-0 bg-black/50 flex flex-col
        items-center justify-center'>
            <div className={activeClass ? "loginModal fadeInModal active"
            : "loginModal fadeInModal"}>
                <button type='button' className='top-4 right-4 absolute text-[#2346e3] iconShadowSm
                transition-all hover:scale-105' onClick={() => handleClose()}>
                    <FaTimesCircle className="text-[2.15rem]" />
                </button>
                <form onSubmit={handleSubmit} className="grid place-items-center">
                    <div className='grid place-items-center'>
                        <div className='flex justify-center gap-2'>
                            <p className='text-xl font-bold text-[#FFEAEA] imgShadow'>Login</p>
                            <FaHeart size={18} className='mt-[0.425rem] text-[#FFEAEA] imgShadow'/>
                        </div>
                        <div className='h-[3.55px] bg-[#ed3434] imgShadow rounded-full w-[110%] textShadow mt-1'/>
                    </div>
                    <div className='grid place-items-center gap-4 mt-5'>
                        <div className='flex flex-col items-center justify-center'>
                            <label htmlFor="email" className='font-bold text-[#ed3434]'>
                                Correo electrónico
                            </label>
                            <input required placeholder="Tu email" name="email" type="email" onChange={getData}
                            className='mt-2 bg-white/90 rounded-md p-3 shadow-sm w-[205px]'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <label htmlFor="password" className='font-bold text-[#ed3434]'>
                                Contraseña
                            </label>
                            <input required placeholder="Tu contraseña" name="password" onChange={getData}
                            type="password" className='mt-2 bg-white/90 rounded-md p-3 shadow-sm w-[205px]'/>
                        </div>
                    </div>
                    <button type="submit" className='btnSubmitGradient textShadowSm btnTransition btnShadow
                    shadow-md font-bold tracking-wider text-lg text-[#FFEAEA] rounded-full mt-8 px-6 py-2'>
                        Continuar
                    </button>
                </form>
            </div>
        </div>
        </>
        : null }
        </>
    )
}

export default Login;
