import { SwiperMatcher, SwiperDescription } from '../';
import { useEffect, useState } from 'react';
import shortenText from '../../utils/shortenText';
type Props={
    user:any
    indice:number
}
const SwiperCard = ({user,indice}:Props) => {
    const [activeClass, SetActiveClass] = useState<boolean>(false)
    const [showCard, setShowCard] = useState<boolean>(true)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [, setShowUi] = useState<boolean>(true)
    
    useEffect (() => {
        if (!showCard) {
            SetActiveClass(false)
        }
    }, [showCard])
        
    return (
        <>
        {showCard ?
        <div className={activeClass ? "swiperCard fadeInCard active" : "swiperCard fadeInCard"}>
            <div className="relative flex flex-col items-center justify-center">
                <SwiperMatcher user={user} indice={indice} setCardState={setShowCard} setActiveClassState={SetActiveClass} />
            </div>
            <div className="w-[22rem] h-[104px] bg-[#FFEAEA] rounded-lg hidden md:flex justify-between
            items-end gap-2 p-3 shadow-sm hover:shadow-md">
                <p className='text-sm font-medium flex self-start'>
                {shortenText(/* llamar a descripcion de usuario en vez de a un string */
                `Lorem ipsum dolor sit amet consectet ura, adipisicing elit. Perspiasd deleniti 
                expedita laudantium Lorem ipsum dolor`, 125)}
                </p>
                <button type='button' className='text-[#ed3434] textShadowSm font-bold px-4 py-1
                rounded-2xl min-w-max gradientBg shadow-md shadow-black/10 btnTransition btnShadow'
                onClick={() => setShowModal(true)}>
                    Ver más
                </button>
            </div>
            <SwiperDescription modalState={showModal} setModalState={setShowModal} setUiState={setShowUi} user={user} />
        </div>
        : null }
        </>
    )
}

export default SwiperCard;
