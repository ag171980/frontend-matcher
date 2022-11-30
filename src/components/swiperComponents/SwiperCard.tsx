import { SwiperMatcher, SwiperDescription } from '../';
import { useState } from 'react';

const SwiperCard = () => {
        const [showModal, setShowModal] = useState<boolean>(false)
        const [, setShowUi] = useState<boolean>(true)
        
    return (
        <div className='flex flex-col items-center justify-center gap-4 relative mb-[0.3rem] md:mb-0'>
            <div className="relative flex flex-col items-center justify-center">
                <SwiperMatcher />
            </div>
            <div className="w-[25.5rem] bg-[#FFEAEA] rounded-md hidden md:flex justify-center
            items-end gap-2 p-3 shadow-sm hover:shadow-md">
                <p className='text-sm font-medium'>
                    Lorem ipsum dolor sit amet consectet ura, adipisicing elit. Perspiasd deleniti 
                    expedita laudantium...
                </p>
                <button type='button' className='text-[#ed3434] textShadowSm font-bold px-4 py-1
                rounded-2xl min-w-max gradientBg shadow-md shadow-black/10 btnTransition btnShadow'
                onClick={() => setShowModal(true)}>
                    Ver más
                </button>
            </div>
            <SwiperDescription modalState={showModal} setModalState={setShowModal} setUiState={setShowUi} />
        </div>
    )
}

export default SwiperCard;