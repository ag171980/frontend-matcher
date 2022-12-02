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

const Feed = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [user, setUser] = useState([])
    // const [formData, setFormData] = useState<FormType>({
    //     genderInterest: "woman",
        
    // })
    const getUsers = async (dataToSend:any) => {
        

        try {
            const response = await axios.get(
                'https://backend-matcher-production.up.railway.app/users',dataToSend);
            
            if (response.status === 200) {
                
                setUser(response.data)
                console.log(user)
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
    getUsers({genderInterest: 'woman'})
}
    return (
        <>
        {isLoading ? <FullScreenLoader/>
        : <div className='xlContainer'>
            <div className="pageGradientBg flex flex-col-reverse md:flex md:flex-row items-center justify-center
            h-screen w-full relative">
                <div className="sideBarContainer md:block hidden">
                    <SideBar />
                </div>
                <div className='md:hidden block'>
                    <MobileFooter/>
                </div>
                <div className="swiperContainer flex flex-col items-center justify-center gap-3 relative">
                    <SwiperFilters />
                    <SwiperCard />
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