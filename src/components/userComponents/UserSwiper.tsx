import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { UserEditModal, UserSwiperDescription } from '../';

type Props = {
    userSwiperSlides: Array<{url: string}>
    modalEditState: boolean
    setModalEditState: React.Dispatch<React.SetStateAction<boolean>>
};

const UserSwiper = ({ userSwiperSlides, modalEditState, setModalEditState }: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [sliderBtnPressed, setSliderBtnPressed] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showUi, setShowUi] = useState<boolean>(true)
    const [showBtn, setShowBtn] = useState<boolean>(true)

    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? userSwiperSlides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === userSwiperSlides.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }
    
    const handleSetShowModal = () => {
        setShowModal(true)
        setShowUi(false)
        setShowBtn(false)
    }

    const handleDescriptionBtn = () => {
        setShowModal(true)
        setShowBtn(false)
    }


    return (
        <>
        {showBtn ?
        <button type="button" className="btnEditGradient textShadowSm btnTransition btnShadow
        w-full py-[0.4rem] shadow-md font-bold tracking-wider text-[#FFEAEA] rounded-full"
        onClick={() => setModalEditState(true)}>
            Editar perfil
        </button>
        : <div className="bg-transparent w-full py-[0.4rem] font-bold text-transparent">
            Editar perfil
        </div>}
        {!modalEditState ?
        <div className='flex flex-col items-center justify-center gap-4 relative mb-[0.3rem] md:mb-0'>
            <div className="relative flex flex-col items-center justify-center">
                <div className='relative w-72 h-[22rem] md:h-[23rem] md:w-[25.5rem] cardShadow'>
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
                    <div style={{backgroundImage: `url(${userSwiperSlides[currentIndex].url})`}}
                    className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 h-full w-full rounded-2xl" />
                    {showUi ?
                    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 justify-between items-center
                    gap-48 md:gap-[18.5rem] flex">
                        <HiOutlineChevronLeft size={40} className="cursor-pointer text-white/70
                        hover:text-white transition-colors noSelect" onClick={prevSlide} />
                        <HiOutlineChevronRight size={40} className="cursor-pointer text-white/70
                        hover:text-white transition-colors noSelect" onClick={nextSlide} />
                    </div> : null}
                    {!sliderBtnPressed ? (
                        (<div className="absolute top-6 left-[33.5%] md:left-[28.5%] -translate-x-1/2 text-white">
                            <div className="swiperInfoContainer w-full flex flex-col items-start gap-[0.15rem]
                            md:gap-1 noSelect">
                                <h1 className='textShadow font-extrabold text-xl md:text-2xl'>Ayelen Vargas</h1>
                                <h3 className='textShadow font-extrabold text-lg md:text-xl'>24 años</h3>
                                <div className="flex gap-1 items-center justify-center">
                                    <FaMapMarkerAlt className='iconShadow' size={19} />
                                    <p className='textShadow font-semibold text-base md:text-lg'>San Antonio</p>
                                </div>
                                <p className='textShadow font-medium text-sm'>Estudiante de Turismo</p>
                            </div>
                            <button type='button' className='text-[#ed3434] textShadowSm font-bold p-[0.45rem]
                            absolute top-1 rounded-full gradientBg shadow-md shadow-black/10 -right-24
                            btnTransition btnShadow grid place-items-center md:hidden'
                            onClick={() => handleSetShowModal()}>
                                <FaUser size={12} className="block"/>
                            </button>
                        </div>))
                    : null}
                </div>
            </div>
            <div className="w-[25.5rem] bg-[#FFEAEA] rounded-md hidden md:flex justify-center
            items-end gap-2 p-3 shadow-sm hover:shadow-md">
                <p className='text-sm font-medium'>
                    Lorem ipsum dolor sit amet consectet ura, adipisicing elit. Perspiasd deleniti 
                    expedita laudantium...
                </p>
                <button type='button' className='text-[#ed3434] textShadowSm font-bold px-4 py-1
                rounded-2xl min-w-max gradientBg shadow-md shadow-black/10 btnTransition btnShadow'
                onClick={() => handleDescriptionBtn()}>
                    Ver más
                </button>
            </div>
            <UserSwiperDescription modalState={showModal} setModalState={setShowModal}
            setUiState={setShowUi} setBtnState={setShowBtn} />
        </div>
        : <UserEditModal modalState={modalEditState} setModalState={setModalEditState} />}
        </>
    )
}

export default UserSwiper;