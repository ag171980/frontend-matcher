import logo from '../../assets/logoRegister.svg';
import { FaGrinHearts } from 'react-icons/fa';

const MobileNav = () => {
    return (
        <div className='w-screen flex items-center justify-around sm:justify-between sm:px-44 bg-[#FF929D] py-3'>
            <div className='w-36'>
                <img src={logo} alt="Matcher logo" className='block w-full' loading='lazy' />
            </div>
            <FaGrinHearts size={33} className="text-[#FFEAEA] sideBarIcon" />
        </div>
    )
}

export default MobileNav;
