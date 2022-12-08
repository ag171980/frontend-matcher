import { FaRedoAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../../assets/logoRegister.svg";

const UserMobileNav = () => {
    return (
        <div className='w-screen flex items-center justify-around sm:justify-between sm:px-44 bg-[#FF929D] py-3'>
            <div className='w-36'>
                <img src={logo} alt="Matcher logo" className='block w-full' loading='lazy' />
            </div>
            <Link to="/feed">
                <div className="btnFeedGradient sideBarIcon rounded-full p-3">
                    <FaRedoAlt className='-scale-x-100 -rotate-6 text-lg text-[#FFEAEA]'/>
                </div>
            </Link>
            <Link to="/feed">
                <div className="btnUserPageGradient sideBarIcon rounded-full p-3">
                    <FaSignOutAlt className='-scale-x-100 text-lg text-[#FFEAEA]'/>
                </div>
            </Link>
        </div>
    )
}

export default UserMobileNav;
