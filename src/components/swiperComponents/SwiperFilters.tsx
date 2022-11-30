import profile from '../../assets/horacio.png';

const SwiperFilters = () => {
    return (
        <div className="flex justify-around items-center bg-[#FFEAEA] md:w-[25.5rem] rounded-md
        shadow-md md:shadow-sm transition-shadow md:hover:shadow-md">
            <div className='py-2 grid grid-cols-3 gap-8 px-5 md:gap-14'>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-0 cursor-pointer
                transition-colors hover:text-[#ed3434]">
                    <div className="p-[0.2rem] rounded-full btnSubmitGradient">
                        <div style={{backgroundImage: `url(${profile})`}} className='w-9 h-9 md:h-12 md:w-12
                        bg-cover bg-center bg-no-repeat rounded-full'/>
                    </div>
                    <p className='font-bold text-xs md:font-semibold md:text-sm mt-0 md:mt-[0.15rem]'>
                        En línea
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-0 cursor-pointer
                transition-colors hover:text-[#ed3434]">
                    <div className="p-[0.2rem] rounded-full btnSubmitGradient">
                        <div style={{backgroundImage: `url(${profile})`}} className='w-9 h-9 md:h-12 md:w-12
                        bg-cover bg-center bg-no-repeat rounded-full'/>
                    </div>
                    <p className='font-bold text-xs md:font-semibold md:text-sm mt-0 md:mt-[0.15rem]'>
                        Populares
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-0 cursor-pointer
                transition-colors hover:text-[#ed3434]">
                    <div className="p-[0.2rem] rounded-full btnSubmitGradient">
                        <div style={{backgroundImage: `url(${profile})`}} className='w-9 h-9 md:h-12 md:w-12
                        bg-cover bg-center bg-no-repeat rounded-full'/>
                    </div>
                    <p className='font-bold text-xs md:font-semibold md:text-sm mt-0 md:mt-[0.15rem]'>
                        Les gustas
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SwiperFilters;