import { FaRedoAlt, FaHeartBroken, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserSideBar = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center justify-between py-10 h-screen gap-2'>
            <div className='flex flex-col items-start justify-center gap-8'>
                <div className="text-[#FFEAEA] grid place-items-center rounded-full py-3 gap-1 w-[4.6rem]
                cursor-pointer btnFeedGradient transition-transform hover:scale-[1.025]">
                    <FaRedoAlt className='-scale-x-100 -rotate-6 text-2xl'/>
                    <button type='button' onClick={() => navigate("/feed")}>
                        <p className='text-center font-semibold text-sm'>Feed</p>
                    </button>
                </div>
                <div className="text-[#FFEAEA] grid place-items-center rounded-full py-3 gap-1 w-[4.6rem]
                cursor-pointer btnUsetPageGradient textShadowSm btnUserPageGradient transition-transform
                hover:scale-[1.025]">
                    <FaSignOutAlt className='-scale-x-100 text-2xl'/>
                    <button type='button' onClick={() => navigate("/")}>
                        <p className='text-center font-semibold text-sm'>Logout</p>
                    </button>
                </div>
            </div>
            <div className="text-[#FFEAEA] grid place-items-center rounded-full py-3 gap-1 w-[5.5rem]
            cursor-pointer btnUsetPageGradient textShadowSm btnUserPageGradient transition-transform
            hover:scale-[1.025]">
                <FaHeartBroken className='text-2xl'/>
                <button type='button' className='grid place-items-center' onClick={() => navigate("/")}>
                    <p className='text-center font-semibold text-sm w-16 leading-[1.1rem]'>Borrar cuenta</p>
                </button>
            </div>
        </div>
    )
}

export default UserSideBar;
