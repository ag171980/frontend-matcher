import { SideBar, UserSwiperCard, FullScreenLoader, UserMobileNav, MobileFooter } from '../components';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaRedoAlt } from 'react-icons/fa';

const UserPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    })

    return (
        <>
        {isLoading ? <FullScreenLoader/>
        : <div className='xlContainer'>
            <div className="pageGradientBg h-screen w-full flex flex-col md:flex-row justify-center
            md:justify-between items-center relative">
                <div className="sideBarContainer md:block hidden">
                    <SideBar />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <UserMobileNav/>
                </div>
                <UserSwiperCard />
                <div className="sideBarContainer md:block hidden">
                    <div className="text-[#FFEAEA] grid place-items-center rounded-full py-3 gap-1 w-[4.6rem]
                    cursor-pointer btnUserPageGradient transition-transform hover:scale-[1.025]">
                        <FaRedoAlt className='-scale-x-100 -rotate-6 text-2xl'/>
                        <button type='button' onClick={() => navigate("/feed")}>
                            <p className='text-center font-semibold text-sm'>Feed</p>
                        </button>
                    </div>
                </div>
                <div className='md:hidden block'>
                    <MobileFooter/>
                </div>
            </div>
        </div>}
        </>
    )
}

export default UserPage;