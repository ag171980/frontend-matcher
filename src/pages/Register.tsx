import logo from "../assets/logoRegister.svg";
import { FaUser, FaHeart } from "react-icons/fa";
import { OnBoarding, Login, FullScreenLoader } from '../components/';
import { useState, useEffect } from 'react';

const Register = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showLogin, setShowLogin] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    })

    return (
        <>
        {isLoading ? <FullScreenLoader/>
        : 
        <>
        <div className='gradientBg h-screen w-full flex flex-col gap-12 items-center justify-center'>
            <img src={logo} alt="Matcher logo" className='w-56 block' />
            <div className='w-64 text-center font-bold text-xl textShadowRed'>
                <p className="text-[#ed3434] textShadowSm">
                    ¡Regístrate en Matcher y conoce un mundo de personas que te esperan en nuestra comunidad!
                </p>
            </div>
            <div className="flex flex-col gap-6">
                <button type="button" className="bg-[#ed3434] text-[#FFEAEA] rounded-lg min-w-[16rem] 
                py-4 flex justify-center gap-4 items-center shadow-md btnTransition btnHoverShadow"
                onClick={() => setShowModal(true)}>
                    <FaUser size={22} />
                    <p className="font-semibold">Quiero registrarme</p>
                </button>
                <button type="button" className="rounded-lg min-w-[16rem] py-4 flex justify-center
                items-center shadow-md gap-4 btnTransition bg-[#FFEAEA] btnHoverShadowRed btnGradient"
                onClick={() => setShowLogin(true)}>
                    <FaHeart color="#ed3434" size={20} />
                    <p className="font-semibold">Ya tengo una cuenta</p>
                </button>
            </div>
        </div>
        <OnBoarding modalState={showModal} setModalState={setShowModal} />
        <Login modalState={showLogin} setModalState={setShowLogin} />
        </>}
        </>
    )
}

export default Register;