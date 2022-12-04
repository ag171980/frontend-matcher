import { SwiperMatcher, SwiperDescription } from '../';
import { useState } from 'react';
type Props={
    user:any
    indice:number
}
const SwiperCard = ({user,indice}:Props) => {
        const [showModal, setShowModal] = useState<boolean>(false)
        const [, setShowUi] = useState<boolean>(true)
        
    return (
        <div className={`flex flex-col items-center justify-center absolute z-${indice} mb-[0.3rem] md:mb-0 left-0 card-user`}>
            <div className="relative flex flex-col items-center justify-center">
                <SwiperMatcher user={user} indice={indice}/>
            </div>
            <div className="w-[25.5rem] bg-[#FFEAEA] rounded-md hidden md:flex justify-center
            items-end gap-2 p-3 shadow-sm hover:shadow-md">
                <p className='text-sm font-medium'>
                    {user.description}
                </p>
                <button type='button' className='text-[#ed3434] textShadowSm font-bold px-4 py-1
                rounded-2xl min-w-max gradientBg shadow-md shadow-black/10 btnTransition btnShadow'
                onClick={() => setShowModal(true)}>
                    Ver más
                </button>
            </div>
            <SwiperDescription modalState={showModal} setModalState={setShowModal} setUiState={setShowUi} user={user}/>
        </div>
    )
}

export default SwiperCard;