import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { SwiperDescription } from '../';
import { RiCloseCircleLine } from 'react-icons/ri';
import { IoHeartCircleOutline } from 'react-icons/io5';
import "./swiper.css"
import axios from 'axios'


type Props = {
    swiperSlides: Array<{url: string}>
    user: any
    indice:number
    
};

const Swiper = ({ swiperSlides ,user,indice}: Props) => {
    const [userLoged, setUserLoged] = useState(JSON.parse(localStorage.getItem("userLoged")|| '{}'))
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [sliderBtnPressed, setSliderBtnPressed] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showUi, setShowUi] = useState<boolean>(true)

    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? swiperSlides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === swiperSlides.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }
    
    const handleSetShowModal = () => {
        setShowModal(true)
        setShowUi(false)
    }
    const matchToUser = async(dataToSend:any, userId:number)=>{
        try {
            const response = await axios.post<FormData>(
                'https://backend-matcher-production.up.railway.app/createMatch',dataToSend);
            
            if (response.status === 200) {
                //aca deberia de haber un codigo para ocultar la card
                

                console.log(response.data)
            }
        } catch (e) {
            console.error(e)
        }
    
    }
const matchear = (matchear: boolean, indice:number, userId: number)=>{
    if(matchear){
        // alert(`${userLoged.id} likeo a ${userId}. Card: ${indice}`)
        let dataToSend = {
            id_user_matchA: userLoged.id,
            id_user_matchB: userId
        }
        matchToUser(dataToSend, userId)
        
    }
    document.querySelectorAll(".card-user")[indice].classList.add(`-z-${indice}`)
}
    return (
        <>
        {showUi ?
        <div className="relative top-[0.9rem] left-1/2 -translate-x-1/2 flex justify-between
        items-center px-4 md:px-6 z-10">
            <div className={currentIndex === 0 ? "sliderCounter bg-white imgShadow"
            : "sliderCounter bg-white/70 shadow-md"} />
            <div className={currentIndex === 1 ? "sliderCounter bg-white imgShadow"
            : "sliderCounter bg-white/70 shadow-md"} />
            <div className={currentIndex === 2 ? "sliderCounter bg-white imgShadow"
            : "sliderCounter bg-white/70 shadow-md"} />
            <div className={currentIndex === 3 ? "sliderCounter bg-white imgShadow"
            : "sliderCounter bg-white/70 shadow-md"} />
        </div> : null}
        <div style={{backgroundImage: `url(${swiperSlides[currentIndex].url})`}} className="bg-cover bg-center
        bg-no-repeat absolute top-0 left-0 h-full w-full rounded-2xl" />
        {showUi ?
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 justify-between items-center
        gap-48 md:gap-[18.5rem] flex">
            <HiOutlineChevronLeft size={40} className="cursor-pointer text-white/70 hover:text-white
            transition-colors noSelect" onClick={prevSlide} />
            <HiOutlineChevronRight size={40} className="cursor-pointer text-white/70 hover:text-white
            transition-colors noSelect" onClick={nextSlide} />
        </div> : null}
        {!sliderBtnPressed ? (
            (<div className="absolute top-6 left-[33.5%] md:left-[28.5%] -translate-x-1/2 text-white">
                <div className="swiperInfoContainer w-full flex flex-col items-start gap-[0.15rem]
                md:gap-1 noSelect">
                    <h1 className='textShadow font-extrabold text-xl md:text-2xl'>{user.name}</h1>
                    <h3 className='textShadow font-extrabold text-lg md:text-xl'>{user.age} años</h3>
                    {/* <div className="flex gap-1 items-center justify-center">
                        <FaMapMarkerAlt className='iconShadow' size={19} />
                        <p className='textShadow font-semibold text-base md:text-lg'>San Antonio</p>
                    </div> */}
                    {/* <p className='textShadow font-medium text-sm'>Estudiante de Turismo</p> */}
                </div>
                <button type='button' className='text-[#ed3434] textShadowSm font-bold p-[0.45rem]
                absolute top-1 rounded-full gradientBg shadow-md shadow-black/10 -right-24
                btnTransition btnShadow grid place-items-center md:hidden' onClick={() => handleSetShowModal()}>
                    <FaUser size={12} className="block"/>
                </button>
            </div>))
        : null}
        <SwiperDescription modalState={showModal} setModalState={setShowModal} setUiState={setShowUi} user={user} />
        {showUi ?
        <div className="absolute bottom-2 md:bottom-4 translate-x-1/2 right-1/2">
            <div className="flex gap-20 md:gap-32 justify-center items-center">
                <button type='button' className='iconShadow text-[#FFEAEA] hover:text-[#1F9AFF]
                hover:scale-110 transition-all duration-200 ease-linear noSelect'>
                    <RiCloseCircleLine onClick={()=> matchear(false, indice, user.id)} size={80} />
                </button>
                <button type='button' className='iconShadow text-[#ed3434] hover:text-[#72E52D]
                hover:scale-110 transition-all duration-200 ease-linear noSelect'>
                    <IoHeartCircleOutline onClick={()=> matchear(true, indice,user.id)} size={80} />
                </button>
            </div>
        </div> : null}
        </>
    )
}

export default Swiper;