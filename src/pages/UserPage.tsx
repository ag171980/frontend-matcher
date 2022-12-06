import { SideBar, UserSwiperCard, FullScreenLoader, UserMobileNav, MobileFooter } from '../components';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaRedoAlt } from 'react-icons/fa';
import axios from 'axios';

const UserPage = () => {
    const [userLoged,] = useState(JSON.parse(localStorage.getItem("userLoged")|| '{}'))
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    const [matchesUser, setMatchesUser]= useState([])

    const verifyMatchesByUser = async(idUserActual:any)=>{
        try {
            const response = await axios.get(
                'https://backend-matcher-production.up.railway.app/verifyMatchesUserById',idUserActual);
            
            if (response.status === 200) {
                setMatchesUser(response.data[0][0])
                // console.log(response.data[0][0])
            }
        } catch (e) {
            console.error(e)
        }
    }
    verifyMatchesByUser({params: {idUser: userLoged.id}})

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
                    <SideBar matchesUser={matchesUser} userLoged={userLoged}/>
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
                    <MobileFooter matchesUser={matchesUser}/>
                </div>
            </div>
        </div>}
        </>
    )
}

export default UserPage;