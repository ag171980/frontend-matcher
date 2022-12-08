import {
    SideBar,
    UserSideBar,
    UserSwiperCard,
    FullScreenLoader,
    UserMobileNav,
    UserMobileFooter
} from '../components';
import { useState, useEffect } from "react";

const UserPage = () => {
    const [userLoged, setUserLoged] = useState(JSON.parse(localStorage.getItem("userLoged")|| '{}'))
    const [isLoading, setIsLoading] = useState<boolean>(true)

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
                    <SideBar userLoged={userLoged}/>
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <UserMobileNav/>
                </div>
                <UserSwiperCard />
                <div className="sideBarContainer md:block hidden bg-[#FF929D]">
                    <UserSideBar />
                </div>
                <div className='md:hidden block'>
                    <UserMobileFooter/>
                </div>
            </div>
        </div>}
        </>
    )
}

export default UserPage;
