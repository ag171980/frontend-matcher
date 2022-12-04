import { SideBar,
    SwiperCard,
    SwiperFilters,
    Recommended,
    MobileNav,
    MobileFooter,
    FullScreenLoader
} from './../components/';
import { useState, useEffect } from "react"
import axios from 'axios'

// type FormType = {
//     genderInterest: string
// };

interface MyObj {
    age: number
    description: string
    email: string
    gender: string
    genderInterest: string
    id: number
    img1: string
    img2: string
    img3: string
    img4: string
    name: string
}

const Feed = () => {
    const [userLoged, setUserLoged] = useState(JSON.parse(localStorage.getItem("userLoged")|| '{}'))
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [users, setUsers] = useState([])
    


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
}
    return (
        <>
        {isLoading ? <FullScreenLoader/>
        : <div className='xlContainer'>
            <div className="pageGradientBg flex flex-col-reverse md:flex md:flex-row items-center justify-center
            h-screen w-full relative">
                <div className="sideBarContainer md:block hidden">
                    <SideBar userLoged={userLoged} />
                </div>
                <div className='md:hidden block'>
                    <MobileFooter/>
                </div>
                <div className="swiperContainer flex flex-col items-center justify-center gap-3 relative">
                    <SwiperFilters />
                    <div className='w-full contenedorCards relative left-1/2 -translate-x-2/4'>
                        {users.map((user, index)=> <SwiperCard key={index} user={user} indice={index}/>)}
                    </div>
                </div>
                <div className="recommendedContainer md:block bg-[#FF929D] hidden">
                    <Recommended />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <MobileNav/>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Feed;