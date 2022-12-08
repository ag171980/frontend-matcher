import {
    SideBar,
    UserSideBar,
    UserSwiperCard,
    FullScreenLoader,
    UserMobileNav,
    UserMobileFooter
} from '../components';
import { useState, useEffect } from "react";
import axios from 'axios'

const UserPage = () => {
    const [userLoged,] = useState(JSON.parse(localStorage.getItem("userLoged") || '{}'))
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [matchesUser, setMatchesUser] = useState<string[]>([])
    const [users, setUsers] = useState([])

    const verifyMatchesByUser = async (idUserActual: any) => {
        try {
            const response = await axios.get(
                'https://backend-matcher-production.up.railway.app/verifyMatchesUserById', idUserActual);

            if (response.status === 200) {
                setMatchesUser([])
                response.data.map((match: any) =>
                    setMatchesUser(matchesUser => [...matchesUser, match[0]])
                )
                console.log(matchesUser)
                // console.log(response.data[0][0])
            }
        } catch (e) {
            console.error(e)
        }
    }
    const getUsers = async (dataToSend: any) => {
        try {
            const response = await axios.get(
                'https://backend-matcher-production.up.railway.app/users', dataToSend);

            if (response.status === 200) {

                setUsers(response.data)
                console.log(users)
            }
        } catch (e) {
            console.error(e)
        }
    }

    if (isLoading) {
        getUsers({ params: { genderInterest: userLoged.genderInterest } })
        verifyMatchesByUser({ params: { idUser: userLoged.id } })
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    })

    return (
        <>
            {isLoading ? <FullScreenLoader />
                : <div className='xlContainer'>
                    <div className="pageGradientBg h-screen w-full flex flex-col md:flex-row justify-center
            md:justify-between items-center relative">
                        <div className="sideBarContainer md:block hidden">
                            <SideBar userLoged={userLoged} matchesUser={matchesUser} />
                        </div>
                        <div className='md:hidden block absolute top-0 w-screen'>
                            <UserMobileNav />
                        </div>
                        <UserSwiperCard />
                        <div className="sideBarContainer md:block hidden bg-[#FF929D]">
                            <UserSideBar />
                        </div>
                        <div className='md:hidden block'>
                            <UserMobileFooter matchesUser={matchesUser} />
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default UserPage;
