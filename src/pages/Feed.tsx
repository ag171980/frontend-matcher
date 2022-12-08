import { SideBar,
    SwiperCard,
    // SwiperCard2,
    // SwiperCard3,
    // NoMoreMatches,
    Recommended,
    MobileNav,
    MobileFooter,
    FullScreenLoader
} from './../components/';
import { useState, useEffect } from "react"
import axios from 'axios'

const Feed = () => {
    const [userLoged,] = useState(JSON.parse(localStorage.getItem("userLoged")|| '{}'))
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [users, setUsers] = useState([])
    const [matchesUser, setMatchesUser]= useState<string[]>([])

    const verifyMatchesByUser = async(idUserActual:any)=>{
        try {
            const response = await axios.get(
                'https://backend-matcher-production.up.railway.app/verifyMatchesUserById',idUserActual);
            
            if (response.status === 200) {
                setMatchesUser([])
                response.data.map((match:any)=>
                    setMatchesUser(matchesUser=> [...matchesUser, match[0]])
                )
                // console.log(response.data[0][0])
            }
        } catch (e) {
            console.error(e)
        }
    }

    const getUsers = async (dataToSend:any) => {
        try {
            const response = await axios.get(
                'https://backend-matcher-production.up.railway.app/users',dataToSend);
            
            if (response.status === 200) {
                
                setUsers(response.data)
                console.log(users)
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    })
    if(isLoading){
        getUsers({params: {genderInterest: userLoged.genderInterest}})
        verifyMatchesByUser({params: {idUser: userLoged.id}})
    }
    return (
        <>
        {isLoading ? <FullScreenLoader />
        : <div className='xlContainer'>
            <div className="pageGradientBg flex flex-col-reverse md:flex md:flex-row items-center justify-center
            h-screen w-full relative">
                <div className="sideBarContainer md:block hidden">
                    <SideBar userLoged={userLoged} />
                </div>
                <div className='md:hidden block'>
                    <MobileFooter />
                </div>
                <div className="swiperContainer flex flex-col items-center justify-center relative">
                {users.map((user, index)=> <SwiperCard key={index} user={user} indice={index}/>)}
                    {/* <NoMoreMatches />
                    <SwiperCard />
                    <SwiperCard2 />
                    <SwiperCard3 /> */}
                </div>
                <div className="sideBarContainer md:block bg-[#FF929D] hidden">
                    <Recommended />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <MobileNav />
                </div>
            </div>
        </div>}
        </>
    )
}

export default Feed;
